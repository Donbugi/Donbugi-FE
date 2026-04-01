"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";
import { StatusBar } from "@/components/shared/status-bar";

export function AuthScreen() {
  const { goToScreen, toast } = useApp();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast("⚠️ 이메일과 비밀번호를 입력해주세요.");
      return;
    }
    goToScreen("nickname");
  };

  const handleSignup = () => {
    if (!email) {
      toast("⚠️ 이메일을 입력해주세요.");
      return;
    }
    if (password.length < 8) {
      toast("⚠️ 비밀번호는 8자 이상이어야 해요.");
      return;
    }
    if (password !== confirmPassword) {
      toast("⚠️ 비밀번호가 일치하지 않아요.");
      return;
    }
    goToScreen("nickname");
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <StatusBar />
      <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#7C3AED] via-[#5b21b6] to-[#3CBBA2] px-8 py-[60px] pb-12 text-center text-white relative overflow-hidden flex-shrink-0">
          <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] bg-white/[0.06] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-[140px] h-[140px] bg-white/[0.06] rounded-full" />
          <div className="text-[56px] mb-2 animate-float">🐢</div>
          <div className="text-[34px] font-black tracking-[-1px] mb-2">
            돈부기
          </div>
          <div className="text-[15px] opacity-85 leading-relaxed">
            뉴스로 키우는 나의 금융 지능
            <br />
            매일 조금씩, 확실하게 성장하세요
          </div>
        </div>

        {/* Auth Form */}
        <div className="p-7 pb-8 flex flex-col gap-3.5 flex-1">
          {isLoginMode ? (
            <>
              <div className="mb-3.5">
                <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
                  이메일 (아이디)
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  className="w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                />
              </div>
              <div className="mb-3.5">
                <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
                  비밀번호
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-transform active:scale-[0.97] mt-1"
              >
                로그인
              </button>
              <div className="text-center text-[13px] text-[#8888aa]">
                계정이 없으신가요?{" "}
                <span
                  className="text-[#7C3AED] font-bold cursor-pointer"
                  onClick={() => setIsLoginMode(false)}
                >
                  회원가입
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3.5">
                <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
                  이메일 (아이디)
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  className="w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                />
              </div>
              <div className="mb-3.5">
                <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
                  비밀번호
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="8자 이상 입력하세요"
                  className="w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                />
              </div>
              <div className="mb-3.5">
                <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
                  비밀번호 확인
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="비밀번호를 다시 입력하세요"
                  className="w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                />
              </div>
              <button
                onClick={handleSignup}
                className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-transform active:scale-[0.97] mt-1"
              >
                회원가입
              </button>
              <div className="text-center text-[13px] text-[#8888aa]">
                이미 계정이 있으신가요?{" "}
                <span
                  className="text-[#7C3AED] font-bold cursor-pointer"
                  onClick={() => setIsLoginMode(true)}
                >
                  로그인
                </span>
              </div>
              <div className="text-center text-[12px] text-[#8888aa] leading-relaxed">
                <a href="#" className="text-[#7C3AED] font-bold no-underline">
                  서비스 이용약관
                </a>{" "}
                및{" "}
                <a href="#" className="text-[#7C3AED] font-bold no-underline">
                  개인정보 처리방침
                </a>
                에 동의합니다.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
