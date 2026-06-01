"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/app-context";
import { notificationApi } from "@/lib/api";

function formatTime(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMin < 60) return `${diffMin}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays === 1) return "어제";
    return `${diffDays}일 전`;
  } catch {
    return "";
  }
}

export function NotificationPanel() {
  const { notifOpen, setNotifOpen, setNotifBadge } = useApp();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  // 패널이 열릴 때마다 알림 목록 fetch
  useEffect(() => {
    if (!notifOpen) return;

    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const data = await notificationApi.getNotifications();
        setNotifications(data?.items ?? []);
        // API의 unreadCount로 뱃지 동기화
        setNotifBadge(data?.unreadCount ?? 0);
      } catch (err) {
        console.error("알림 조회 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [notifOpen, setNotifBadge]);

  const handleClose = async () => {
    // 패널 닫힐 때 전체 읽음 처리
    try {
      await notificationApi.readAll();
      setNotifBadge(0);
    } catch (err) {
      console.error("알림 읽음 처리 실패:", err);
      // 실패해도 UI는 닫음
    }
    setNotifOpen(false);
  };

  if (!notifOpen) return null;

  return (
    <div
      className="absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[200]"
      onClick={handleClose}
    >
      <div
        className="absolute top-0 left-0 right-0 bg-white rounded-b-[24px] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.2)] animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-black text-[#1a1a2e]">알림</h2>
          <button
            type="button"
            className="bg-transparent border-none text-[22px] cursor-pointer text-[#8888aa]"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        {/* 로딩 */}
        {loading && (
          <div className="py-6 text-center text-[14px] font-bold text-[#7C3AED]">
            알림을 불러오는 중이에요...
          </div>
        )}

        {/* 알림 없음 */}
        {!loading && notifications.length === 0 && (
          <div className="py-8 text-center">
            <div className="text-[36px] mb-2">🔔</div>
            <div className="text-[14px] font-bold text-[#8888aa]">
              새로운 알림이 없어요
            </div>
          </div>
        )}

        {/* 알림 목록 */}
        {!loading &&
          notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex gap-3 py-3 border-b border-[rgba(0,0,0,0.06)] last:border-b-0 items-start"
            >
              {notif.unread && (
                <div className="w-2 h-2 rounded-full bg-[#7C3AED] mt-[5px] flex-shrink-0" />
              )}
              {!notif.unread && (
                <div className="w-2 h-2 mt-[5px] flex-shrink-0" />
              )}
              <span className="text-[24px]">{notif.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-black text-[#1a1a2e] mb-[2px]">
                  {notif.title}
                </div>
                <div className="text-[13px] text-[#4a4a6a] leading-relaxed">
                  {notif.description}
                </div>
                <div className="text-[11px] text-[#8888aa] mt-1">
                  {formatTime(notif.createdAt)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}