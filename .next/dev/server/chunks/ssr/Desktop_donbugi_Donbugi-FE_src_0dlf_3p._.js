module.exports = [
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBar",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function StatusBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 flex justify-between items-center px-7 pt-3 pb-1 text-[15px] font-black text-[#1a1a2e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "9:41"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📶 🔋"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/nav-bar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
const navItems = [
    {
        id: 'news',
        icon: '📰',
        label: '뉴스'
    },
    {
        id: 'calendar',
        icon: '📅',
        label: '캘린더'
    },
    {
        id: 'home',
        icon: '🏠',
        label: '홈'
    },
    {
        id: 'shop',
        icon: '🏪',
        label: '상점'
    },
    {
        id: 'my',
        icon: null,
        label: '마이페이지'
    }
];
function NavBar() {
    const { currentTab, goToTab, userChar } = useApp();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex-shrink-0 bg-white/97 backdrop-blur-[20px] border-t border-[rgba(124,58,237,0.1)] flex py-2 pb-3.5",
        children: navItems.map((item)=>{
            const isActive = currentTab === item.id;
            const icon = item.id === 'my' && userChar ? userChar.emoji : item.icon || '🐢';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>goToTab(item.id),
                className: `flex-1 flex flex-col items-center gap-[3px] py-[5px] cursor-pointer border-none bg-transparent transition-all duration-200`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[20px] transition-transform duration-200 ${isActive ? 'scale-[1.15] drop-shadow-[0_0_4px_rgba(124,58,237,0.5)]' : ''}`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/nav-bar.jsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] font-bold ${isActive ? 'text-[#7C3AED]' : 'text-[#8888aa]'}`,
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/nav-bar.jsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/nav-bar.jsx",
                lineNumber: 23,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/nav-bar.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/toast.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function Toast() {
    const { toastMessage, toastVisible } = useApp();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-[100px] left-1/2 -translate-x-1/2 bg-[rgba(30,20,60,0.95)] text-white py-3 px-5 rounded-[30px] text-sm font-bold z-[999] whitespace-nowrap pointer-events-none transition-all duration-300 ${toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`,
        children: toastMessage
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/toast.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPanel",
    ()=>NotificationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
const notifications = [
    {
        icon: '📈',
        title: '엔비디아 실적 발표',
        desc: '오늘 장 마감 후 엔비디아 1분기 실적이 발표됩니다.',
        time: '1시간 전',
        isNew: true
    },
    {
        icon: '⚔️',
        title: '오늘의 과제 도착!',
        desc: '새로운 금융 퀴즈 3문제가 준비되었어요.',
        time: '3시간 전',
        isNew: true
    },
    {
        icon: '🔔',
        title: '미국 CPI 발표 예정',
        desc: '오늘 오후 9:30 소비자물가지수가 발표됩니다.',
        time: '어제',
        isNew: false
    }
];
function NotificationPanel() {
    const { notifOpen, setNotifOpen, setNotifBadge } = useApp();
    const handleClose = ()=>{
        setNotifOpen(false);
        setNotifBadge(0);
    };
    if (!notifOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[200]",
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 right-0 bg-white rounded-b-[24px] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.2)] animate-slide-down",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[18px] font-black text-[#1a1a2e]",
                            children: "알림"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-transparent border-none text-[22px] cursor-pointer text-[#8888aa]",
                            onClick: handleClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                notifications.map((notif, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 py-3 border-b border-[rgba(0,0,0,0.06)] last:border-b-0 items-start",
                        children: [
                            notif.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-[#7C3AED] mt-[5px] flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[24px]",
                                children: notif.icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-black text-[#1a1a2e] mb-[2px]",
                                        children: notif.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[#4a4a6a] leading-relaxed",
                                        children: notif.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-[#8888aa] mt-1",
                                        children: notif.time
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketTempPopup",
    ()=>MarketTempPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function MarketTempPopup() {
    const { marketTempOpen, setMarketTempOpen, currentKospiStatus } = useApp();
    if (!marketTempOpen) return null;
    const status = KOSPI_STATUS[currentKospiStatus];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[300] flex items-center justify-center",
        onClick: ()=>setMarketTempOpen(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[24px] p-6 mx-5 w-full max-w-[340px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[48px] text-center my-3",
                    children: status.icon
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[16px] font-black text-[#7C3AED] text-center mb-2",
                    children: status.name
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-[#4a4a6a] leading-[1.7] mb-4 text-center",
                    children: status.desc
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[rgba(124,58,237,0.06)] rounded-xl p-3 text-[13px] text-[#4a4a6a] leading-[1.7] mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "📊 코스피 기준 시장 동향"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                            lineNumber: 26,
                            columnNumber: 17
                        }, this),
                        status.reason.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    line,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                                        lineNumber: 28,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-xl text-[15px] font-black cursor-pointer",
                    onClick: ()=>setMarketTempOpen(false),
                    children: "확인"
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertPopup",
    ()=>AlertPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function AlertPopup() {
    const { alertPopOpen, setAlertPopOpen, alertPopData } = useApp();
    if (!alertPopOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[400] flex items-center justify-center",
        onClick: ()=>setAlertPopOpen(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[24px] py-7 px-6 mx-5 w-full max-w-[340px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-center",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[52px] mb-3",
                    children: alertPopData.icon
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[18px] font-black text-[#1a1a2e] mb-2",
                    children: alertPopData.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-[#4a4a6a] leading-[1.7] mb-5",
                    dangerouslySetInnerHTML: {
                        __html: alertPopData.desc
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-xl text-[15px] font-black cursor-pointer",
                    onClick: ()=>setAlertPopOpen(false),
                    children: "확인"
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthScreen",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AuthScreen() {
    const { goToScreen, toast } = useApp();
    const [isLoginMode, setIsLoginMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = ()=>{
        if (!email || !password) {
            toast("⚠️ 이메일과 비밀번호를 입력해주세요.");
            return;
        }
        goToScreen("nickname");
    };
    const handleSignup = ()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto hide-scrollbar flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#7C3AED] via-[#5b21b6] to-[#3CBBA2] px-8 py-[60px] pb-12 text-center text-white relative overflow-hidden flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[60px] -right-[60px] w-[200px] h-[200px] bg-white/[0.06] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-10 -left-10 w-[140px] h-[140px] bg-white/[0.06] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[56px] mb-2 animate-float",
                                children: "🐢"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[34px] font-black tracking-[-1px] mb-2",
                                children: "돈부기"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[15px] opacity-85 leading-relaxed",
                                children: [
                                    "뉴스로 키우는 나의 금융 지능",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    "매일 조금씩, 확실하게 성장하세요"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-7 pb-8 flex flex-col gap-3.5 flex-1",
                        children: isLoginMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                            children: "이메일 (아이디)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "이메일 주소를 입력하세요",
                                            className: "w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                            children: "비밀번호"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "비밀번호를 입력하세요",
                                            className: "w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogin,
                                    className: "w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-transform active:scale-[0.97] mt-1",
                                    children: "로그인"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-[13px] text-[#8888aa]",
                                    children: [
                                        "계정이 없으신가요?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#7C3AED] font-bold cursor-pointer",
                                            onClick: ()=>setIsLoginMode(false),
                                            children: "회원가입"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                            children: "이메일 (아이디)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "이메일 주소를 입력하세요",
                                            className: "w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                            children: "비밀번호"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "8자 이상 입력하세요",
                                            className: "w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                            children: "비밀번호 확인"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: confirmPassword,
                                            onChange: (e)=>setConfirmPassword(e.target.value),
                                            placeholder: "비밀번호를 다시 입력하세요",
                                            className: "w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSignup,
                                    className: "w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-transform active:scale-[0.97] mt-1",
                                    children: "회원가입"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-[13px] text-[#8888aa]",
                                    children: [
                                        "이미 계정이 있으신가요?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#7C3AED] font-bold cursor-pointer",
                                            onClick: ()=>setIsLoginMode(true),
                                            children: "로그인"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-[12px] text-[#8888aa] leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-[#7C3AED] font-bold no-underline",
                                            children: "서비스 이용약관"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        "및",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-[#7C3AED] font-bold no-underline",
                                            children: "개인정보 처리방침"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        "에 동의합니다."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NicknameScreen",
    ()=>NicknameScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NicknameScreen() {
    const { goToScreen, setUserNick, toast, setObStep, setObScores } = useApp();
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const isValid = nickname.trim().length >= 2;
    const handleNext = ()=>{
        if (!isValid) {
            toast("⚠️ 닉네임은 2자 이상 입력해주세요.");
            return;
        }
        setUserNick(nickname.trim());
        setObStep(0);
        setObScores([
            0,
            0,
            0,
            0
        ]);
        goToScreen("onboarding");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto hide-scrollbar flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#7C3AED] to-[#3CBBA2] px-8 py-12 pb-9 text-center text-white flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[56px] mb-2.5 animate-float",
                                children: "🐢"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[24px] font-black mb-2",
                                children: "반가워요!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-85 leading-relaxed",
                                children: [
                                    "돈부기에서 사용할",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    "닉네임을 입력해주세요"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-7 pb-8 flex-1 flex flex-col gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-black text-[#1a1a2e] mb-1.5",
                                        children: "닉네임"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        maxLength: 10,
                                        value: nickname,
                                        onChange: (e)=>setNickname(e.target.value),
                                        placeholder: "2~10자 사이로 입력하세요",
                                        className: "w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px] text-[#8888aa] mt-1.5",
                                        children: "⚠️ 한글, 영문, 숫자 사용 가능 (최대 10자)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                className: `w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-opacity ${isValid ? "opacity-100" : "opacity-40 pointer-events-none"}`,
                                children: "다음으로 →"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnboardingScreen",
    ()=>OnboardingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OnboardingScreen() {
    const { obStep, setObStep, obScores, setObScores, goToScreen, setUserChar } = useApp();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const currentQ = OBQ[obStep];
    const isLastStep = obStep === OBQ.length - 1;
    const canProceed = selectedOption !== null;
    const handleSelect = (score)=>{
        setSelectedOption(score);
        const newScores = [
            ...obScores
        ];
        newScores[obStep] = score;
        setObScores(newScores);
    };
    const handleNext = ()=>{
        if (!canProceed) return;
        if (isLastStep) {
            // Calculate result
            const total = obScores.reduce((a, b)=>a + b, 0);
            const char = total <= 7 ? CHARS[0] : total <= 10 ? CHARS[1] : total <= 13 ? CHARS[2] : total <= 16 ? CHARS[3] : CHARS[4];
            setUserChar(char);
            goToScreen("result");
        } else {
            setObStep(obStep + 1);
            setSelectedOption(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto hide-scrollbar flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] px-6 pt-7 pb-6 text-white flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5 mb-5",
                                children: [
                                    0,
                                    1,
                                    2,
                                    3
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 h-1 rounded-sm transition-colors ${i < obStep ? "bg-white" : "bg-white/30"}`
                                    }, i, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] opacity-80 mb-2 font-bold",
                                children: [
                                    "질문 ",
                                    obStep + 1,
                                    " / ",
                                    OBQ.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[19px] font-black leading-[1.4]",
                                children: currentQ.q
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] opacity-75 mt-1.5",
                                children: [
                                    "👉 ",
                                    currentQ.sub
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 pb-7 flex flex-col gap-2.5 flex-1",
                        children: currentQ.opts.map((opt, i)=>{
                            const score = i + 1;
                            const isSelected = selectedOption === score;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleSelect(score),
                                className: `bg-white border-2 rounded-[14px] py-4 px-[18px] cursor-pointer transition-all flex items-center gap-3 ${isSelected ? "border-[#7C3AED] bg-[rgba(124,58,237,0.06)]" : "border-[#e8e0ff] hover:border-[#7C3AED]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-9 h-9 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0 ${isSelected ? "bg-[#7C3AED]" : "bg-[rgba(124,58,237,0.08)]"}`,
                                        children: opt.e
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-black text-[#1a1a2e]",
                                            children: [
                                                String.fromCharCode(65 + i),
                                                ". ",
                                                opt.t
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: `mx-5 mb-7 py-[15px] bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-opacity flex-shrink-0 ${canProceed ? "opacity-100" : "opacity-40 pointer-events-none"}`,
                        children: isLastStep ? "결과 보기 🎯" : "다음으로 →"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultScreen",
    ()=>ResultScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ResultScreen() {
    const { userChar, goToScreen, setCurrentTab } = useApp();
    const char = userChar || {
        emoji: "🐢",
        name: "거북이",
        tag: "금융 입문 단계",
        desc: "",
        features: []
    };
    const handleStart = ()=>{
        setCurrentTab("home");
        goToScreen("main");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto hide-scrollbar flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#7C3AED] via-[#5b21b6] to-[#3CBBA2] px-8 py-12 pb-9 text-center text-white relative overflow-hidden flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[50px] -right-[50px] w-40 h-40 bg-white/[0.07] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[80px] mb-3 animate-float",
                                children: char.emoji
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[26px] font-black mb-1.5",
                                children: char.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block bg-white/20 py-1 px-4 rounded-[20px] text-[13px] font-bold mb-2",
                                children: char.tag
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm opacity-85 leading-relaxed whitespace-pre-line",
                                children: char.desc
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 pb-8 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[20px] p-4 mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[15px] font-black text-[#1a1a2e] mb-2.5",
                                        children: "✨ 나의 금융 성향"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    char.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 py-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-[#7C3AED]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-[#4a4a6a]",
                                                    children: feature
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleStart,
                                className: "w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-transform active:scale-[0.97]",
                                children: "🐢 돈부기 시작하기"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileArea",
    ()=>ProfileArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function ProfileArea() {
    const { userNick, userChar, setNotifOpen, notifBadge, setMarketTempOpen, currentKospiStatus } = useApp();
    const char = userChar || CHARS[0];
    const kospi = KOSPI_STATUS[currentKospiStatus];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 bg-gradient-to-br from-[#7C3AED] via-[#5b21b6] to-[#3CBBA2] px-5 pt-4 pb-[22px] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-10 -right-10 w-40 h-40 bg-white/[0.08] rounded-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-white/20 rounded-full border-[3px] border-white/50 flex items-center justify-center text-[32px] relative animate-float",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: char.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-1 -right-1 bg-[#FF9F1C] text-white text-[10px] font-black py-[2px] px-1.5 rounded-lg border-2 border-white",
                                        children: char.lvLabel
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] opacity-85 mb-[2px]",
                                        children: "안녕하세요!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[18px] font-black tracking-[-0.5px]",
                                        children: [
                                            userNick,
                                            "님 👋"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2.5 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/15 rounded-[14px] py-2.5 px-3.5 text-center text-white backdrop-blur-[10px] cursor-pointer transition-colors hover:bg-white/25",
                                onClick: ()=>setMarketTempOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[24px]",
                                        children: kospi.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] opacity-80",
                                        children: "시장 날씨"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px] font-bold",
                                        children: kospi.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white/15 border-none rounded-full w-[42px] h-[42px] flex items-center justify-center cursor-pointer relative",
                                onClick: ()=>setNotifOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[20px]",
                                        children: "🔔"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    notifBadge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 bg-[#FF4D6D] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white/40",
                                        children: notifBadge
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/15 rounded-xl py-2.5 px-3.5 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-[12px] mb-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[13px]",
                                children: "💎 금융 지능 지수 (FinIQ)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-black text-[#ffd700]",
                                children: "3,240P"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-white/25 rounded overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-[#ffd700] to-[#ffec6e] rounded animate-expand-fill",
                            style: {
                                width: "72%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-white/70 mt-1 text-right",
                        children: "다음 레벨까지 760P"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Card({ children, className = '', onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white/95 rounded-[20px] p-[18px] mx-4 mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)] ${className}`,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function SectionHeader({ title, action, onAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center px-5 pt-4 pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[17px] font-black text-[#1a1a2e] tracking-[-0.5px]",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[13px] text-[#7C3AED] font-bold cursor-pointer",
                onClick: onAction,
                children: action
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HashTag",
    ()=>HashTag,
    "Pill",
    ()=>Pill,
    "ProgressBar",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Pill({ children, color = '#7C3AED', bgColor = 'rgba(124,58,237,0.1)' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[11px] font-bold py-[3px] px-2.5 rounded-[20px] inline-block",
        style: {
            color,
            background: bgColor
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function HashTag({ children, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[11px] text-[#7C3AED] bg-[rgba(124,58,237,0.08)] py-[3px] px-2 rounded-[6px] font-bold cursor-pointer hover:bg-[rgba(124,58,237,0.18)] transition-colors",
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function ProgressBar({ percentage, negative = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-2 bg-[#f0e8ff] rounded overflow-hidden my-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `h-full rounded ${negative ? 'bg-gradient-to-r from-[#ff6b6b] to-[#ee4040]' : 'bg-gradient-to-r from-[#3CBBA2] to-[#5bdb7c]'}`,
            style: {
                width: `${percentage}%`
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsScroll",
    ()=>NewsScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const newsItems = [
    {
        id: "nvda",
        pill: "🔬 반도체",
        pillColor: "#7C3AED",
        title: "엔비디아, AI 칩 수요 폭발로 분기 매출 최고 기록",
        summary: "데이터센터 부문이 전년 대비 200% 성장하며 시장 예측을 크게 웃돌았습니다.",
        tags: [
            "반도체",
            "AI전쟁"
        ],
        sentiment: "긍정적 전망",
        sentimentIcon: "😊",
        percentage: 80,
        negative: false,
        borderColor: "#7C3AED"
    },
    {
        id: "realestate",
        pill: "🏠 부동산",
        pillColor: "#3CBBA2",
        title: "서울 아파트 거래량 4개월 연속 증가세",
        summary: "금리 인하 기대감에 실수요자 중심으로 거래가 회복되고 있습니다.",
        tags: [
            "부동산",
            "금리인하"
        ],
        sentiment: "긍정적 전망",
        sentimentIcon: "😊",
        percentage: 65,
        negative: false,
        borderColor: "#3CBBA2"
    },
    {
        id: "fed",
        pill: "🌐 글로벌",
        pillColor: "#FF9F1C",
        title: "미 연준, 올해 금리 인하 횟수 조정 시사",
        summary: "연준 의장이 인플레이션 목표 달성 전까지 신중한 접근을 강조했습니다.",
        tags: [
            "금리인상",
            "연준"
        ],
        sentiment: "부정적 전망",
        sentimentIcon: "😟",
        percentage: 42,
        negative: true,
        borderColor: "#FF9F1C"
    }
];
function NewsScroll() {
    const { goToTab } = useApp();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeader"], {
                title: "📰 오늘의 뉴스",
                action: "더보기 ›",
                onAction: ()=>goToTab("news")
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-x-auto px-4 pb-2 hide-scrollbar",
                children: newsItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[260px] bg-white/95 rounded-[20px] p-4 shadow-[0_2px_16px_rgba(60,60,120,0.10)] cursor-pointer transition-transform active:scale-[0.97]",
                        style: {
                            borderTop: `3px solid ${item.borderColor}`
                        },
                        onClick: ()=>goToTab("news"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pill"], {
                                color: item.pillColor,
                                bgColor: `${item.pillColor}1a`,
                                children: item.pill
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[15px] font-black text-[#1a1a2e] leading-[1.4] my-2",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] text-[#4a4a6a] leading-relaxed mb-2.5",
                                children: item.summary
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5 flex-wrap mb-2.5",
                                children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashTag"], {
                                        children: [
                                            "#",
                                            tag
                                        ]
                                    }, tag, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-[#8888aa] flex justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            item.sentimentIcon,
                                            " ",
                                            item.sentiment
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        style: {
                                            color: item.negative ? "#ee4040" : "#3CBBA2"
                                        },
                                        children: [
                                            item.percentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                percentage: item.percentage,
                                negative: item.negative
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TodayQuiz",
    ()=>TodayQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/card.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const quizzes = [
    {
        id: "q1",
        question: "Q1. 엔비디아 데이터센터 매출이 전년 대비 얼마나 성장했나요?",
        options: [
            "200%",
            "50%",
            "100%"
        ],
        correctIndex: 0
    },
    {
        id: "q2",
        question: "Q2. 금리 인하 기대감으로 거래가 회복된 시장은?",
        options: [
            "주식시장",
            "부동산",
            "채권시장"
        ],
        correctIndex: 1
    },
    {
        id: "q3",
        question: "Q3. 미 연준이 목표로 하는 인플레이션 수치는?",
        options: [
            "1%",
            "3%",
            "2%"
        ],
        correctIndex: 2
    }
];
function TodayQuiz() {
    const { qDone, setQDone, toast } = useApp();
    const doneCount = Object.keys(qDone).length;
    const handleAnswer = (quizId, optIndex, correctIndex)=>{
        if (qDone[quizId]) return;
        const isCorrect = optIndex === correctIndex;
        const newQDone = {
            ...qDone,
            [quizId]: {
                answered: true,
                correct: isCorrect,
                selected: optIndex,
                correctIndex
            }
        };
        setQDone(newQDone);
        if (isCorrect) {
            toast("🎉 정답! +20P 적립");
        } else {
            toast("😅 오답! 정답을 확인해보세요");
        }
        // Check if all done
        const newDoneCount = Object.keys(newQDone).length;
        if (newDoneCount === 3) {
            const allCorrect = Object.values(newQDone).every((q)=>q.correct);
            setTimeout(()=>{
                if (allCorrect) {
                    toast("🏆 오늘 과제 전체 정답! 보너스 +20P");
                } else {
                    toast("⚔️ 오늘 과제 완료!");
                }
            }, 800);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-5 pt-4 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[17px] font-black text-[#1a1a2e] tracking-[-0.5px]",
                        children: "⚔️ 오늘의 과제"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[13px] text-[#7C3AED] font-bold",
                        children: [
                            doneCount,
                            " / 3 완료"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 mb-3.5 bg-white/95 rounded-[20px] p-4 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                children: [
                    quizzes.map((quiz)=>{
                        const result = qDone[quiz.id];
                        const isDone = !!result;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-gradient-to-br from-[#f8f0ff] to-[#f0faff] rounded-xl p-3.5 mb-2.5 last:mb-0 border-2 transition-colors ${isDone ? result.correct ? "border-[#3CBBA2] bg-[rgba(60,187,162,0.06)]" : "border-[#FF4D6D] bg-[rgba(255,77,109,0.06)]" : "border-transparent"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-bold text-[#1a1a2e] mb-2 leading-[1.4]",
                                    children: quiz.question
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1.5 flex-wrap",
                                    children: quiz.options.map((opt, i)=>{
                                        let btnClass = "py-1.5 px-3 border-2 rounded-lg text-[13px] font-bold bg-white cursor-pointer transition-all";
                                        if (isDone) {
                                            if (i === result.correctIndex) {
                                                btnClass += " border-[#3CBBA2] bg-[#3CBBA2] text-white";
                                            } else if (i === result.selected && !result.correct) {
                                                btnClass += " border-[#FF4D6D] bg-[#FF4D6D] text-white";
                                            } else {
                                                btnClass += " border-[#ddd] text-[#1a1a2e] opacity-50";
                                            }
                                        } else {
                                            btnClass += " border-[#ddd] text-[#1a1a2e] hover:border-[#7C3AED] hover:text-[#7C3AED]";
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: btnClass,
                                            onClick: ()=>handleAnswer(quiz.id, i, quiz.correctIndex),
                                            disabled: isDone,
                                            children: opt
                                        }, i, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                            lineNumber: 116,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mt-2 py-2 px-2.5 rounded-lg text-[12px] font-bold leading-relaxed ${result.correct ? "bg-[rgba(60,187,162,0.12)] text-[#1a7a64]" : "bg-[rgba(255,77,109,0.10)] text-[#c0243a]"}`,
                                    children: result.correct ? "✅ 정답이에요! +20P 적립" : `❌ 오답이에요! 정답: ${quiz.options[quiz.correctIndex]}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, quiz.id, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(60,187,162,0.08)] rounded-xl p-3 flex items-center gap-3 mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[24px]",
                                children: "📅"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-[#8888aa] font-bold tracking-wider",
                                        children: "D-DAY 주요 일정"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-black text-[#1a1a2e]",
                                        children: "미국 소비자물가지수(CPI) 발표"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[#7C3AED] font-bold",
                                        children: "오늘 오후 9:30 🔔"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#7C3AED] text-white border-none rounded-lg py-2 px-3 text-[12px] font-bold cursor-pointer",
                                onClick: ()=>toast("⏰ 알림이 설정되었어요!"),
                                children: "알림 ON"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/home/home-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeScreen",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$profile$2d$area$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/home/profile-area.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$news$2d$scroll$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/home/news-scroll.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$today$2d$quiz$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/home/today-quiz.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomeScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto hide-scrollbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$profile$2d$area$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileArea"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/home-screen.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$news$2d$scroll$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewsScroll"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/home-screen.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$today$2d$quiz$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TodayQuiz"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/home-screen.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/home/home-screen.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsList",
    ()=>NewsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const categories = [
    {
        id: '',
        label: '전체'
    },
    {
        id: '주식',
        label: '📈 증권'
    },
    {
        id: '부동산',
        label: '🏠 부동산'
    },
    {
        id: '연준',
        label: '🌐 글로벌'
    },
    {
        id: '비트코인',
        label: '💰 가상화폐'
    }
];
const newsItems = [
    {
        id: 'nvda',
        keywords: '반도체 엔비디아 ai ai전쟁 주식',
        pill: '🔬 반도체',
        pillColor: '#7C3AED',
        title: '엔비디아, AI 칩 수요 폭발로 분기 매출 최고 기록',
        summary: '데이터센터 부문이 전년 대비 200% 성장하며 시장 예측을 크게 웃돌았습니다.',
        tags: [
            '반도체',
            'AI전쟁'
        ],
        sentiment: {
            text: '긍정 80%',
            color: '#3CBBA2',
            icon: '😊'
        },
        time: '2시간 전'
    },
    {
        id: 'realestate',
        keywords: '부동산 아파트 서울 금리 금리인하',
        pill: '🏠 부동산',
        pillColor: '#3CBBA2',
        title: '서울 아파트 거래량 4개월 연속 증가세',
        summary: '금리 인하 기대감에 실수요자 중심으로 거래가 회복되고 있습니다.',
        tags: [
            '부동산',
            '금리인하'
        ],
        sentiment: {
            text: '긍정 65%',
            color: '#3CBBA2',
            icon: '😊'
        },
        time: '4시간 전'
    },
    {
        id: 'fed',
        keywords: '연준 금리 달러 cpi 금리인상',
        pill: '🌐 글로벌',
        pillColor: '#FF9F1C',
        title: '미 연준, 올해 금리 인하 횟수 조정 시사',
        summary: '연준 의장이 인플레이션 목표 달성 전까지 신중한 접근을 강조했습니다.',
        tags: [
            '금리인상',
            '연준'
        ],
        sentiment: {
            text: '부정 58%',
            color: '#ee4040',
            icon: '😟'
        },
        time: '6시간 전'
    },
    {
        id: 'btc',
        keywords: '비트코인 이더리움 가상화폐 etf',
        pill: '💰 가상화폐',
        pillColor: '#FF9F1C',
        title: '비트코인, ETF 자금 유입에 다시 8만 달러 돌파 시도',
        summary: '현물 ETF를 통한 기관 자금 유입이 재개되면서 비트코인이 다시 8만 달러를 향해 상승 중입니다.',
        tags: [
            '비트코인',
            'ETF'
        ],
        sentiment: {
            text: '긍정 72%',
            color: '#3CBBA2',
            icon: '😊'
        },
        time: '8시간 전'
    }
];
function NewsList({ searchQuery, onSelectArticle, onHashtagClick }) {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const filteredNews = newsItems.filter((item)=>{
        const matchSearch = !searchQuery || item.keywords.toLowerCase().includes(searchQuery.toLowerCase());
        const matchCat = !selectedCategory || item.keywords.toLowerCase().includes(selectedCategory.toLowerCase());
        return matchSearch && matchCat;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] px-5 pt-4 pb-5 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[22px] font-black mb-1",
                        children: "📰 뉴스 센터"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-85",
                        children: "돈부기가 선별한 오늘의 금융 뉴스"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 mx-4 mt-3 mb-2.5 bg-white rounded-[14px] py-3 px-4 flex items-center gap-2.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "종목명, 키워드로 뉴스 검색...",
                        className: "flex-1 border-none outline-none text-[15px] text-[#1a1a2e] bg-transparent",
                        value: searchQuery,
                        onChange: (e)=>onHashtagClick(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 flex gap-2 overflow-x-auto px-4 pb-3 hide-scrollbar",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedCategory(cat.id),
                        className: `py-[7px] px-4 rounded-[20px] text-[13px] font-bold cursor-pointer whitespace-nowrap border-2 transition-all ${selectedCategory === cat.id ? 'bg-[#7C3AED] text-white border-[#7C3AED]' : 'bg-white text-[#4a4a6a] border-[#ddd]'}`,
                        children: cat.label
                    }, cat.id, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto hide-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pb-4",
                    children: filteredNews.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10 text-[#8888aa]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[40px] mb-3",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[16px] font-bold",
                                children: "검색 결과가 없습니다"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this) : filteredNews.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)] cursor-pointer transition-transform active:scale-[0.98]",
                            onClick: ()=>onSelectArticle(item.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pill"], {
                                            color: item.pillColor,
                                            bgColor: `${item.pillColor}1a`,
                                            children: item.pill
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] text-[#8888aa]",
                                            children: item.time
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[16px] font-black text-[#1a1a2e] mb-2 leading-[1.4]",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-[#4a4a6a] leading-relaxed mb-3",
                                    children: item.summary
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1.5",
                                            children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashTag"], {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        onHashtagClick(tag);
                                                    },
                                                    children: [
                                                        "#",
                                                        tag
                                                    ]
                                                }, tag, true, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] font-bold",
                                            style: {
                                                color: item.sentiment.color
                                            },
                                            children: [
                                                item.sentiment.icon,
                                                " ",
                                                item.sentiment.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleView",
    ()=>ArticleView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$pill$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/pill.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ArticleView({ articleId, onBack, onHashtagClick }) {
    const { artQuizDone, setArtQuizDone, toast } = useApp();
    const article = ARTS[articleId];
    if (!article) return null;
    const quizDone = artQuizDone[articleId];
    const handleQuizAnswer = (idx)=>{
        if (quizDone) return;
        const isCorrect = idx === article.quiz.ans;
        setArtQuizDone({
            ...artQuizDone,
            [articleId]: {
                answered: true,
                correct: isCorrect,
                selected: idx
            }
        });
        if (isCorrect) {
            toast('🎉 정답! +20P 적립됩니다');
        } else {
            toast('😅 오답! 참여 보너스 +20P 적립');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 flex items-center gap-2 px-5 py-3.5 bg-white border-b border-[rgba(0,0,0,0.06)] cursor-pointer text-[15px] font-bold text-[#7C3AED] active:bg-[#f5f0ff]",
                onClick: onBack,
                children: "‹ 뉴스 목록으로"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-5 hide-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block text-[12px] font-bold py-1 px-3 rounded-[20px] mb-3",
                        style: {
                            color: article.cc,
                            background: article.cb
                        },
                        children: article.cat
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[20px] font-black text-[#1a1a2e] leading-[1.4] mb-3",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-bold text-[#7C3AED]",
                                children: article.src
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[#8888aa]",
                                children: article.dt
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[15px] text-[#4a4a6a] leading-[1.8] mb-4",
                        dangerouslySetInnerHTML: {
                            __html: article.body
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap mb-4",
                        children: article.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-bold text-[#7C3AED] bg-[rgba(124,58,237,0.08)] py-1.5 px-3.5 rounded-[20px] cursor-pointer",
                                onClick: ()=>{
                                    onHashtagClick(tag.replace('#', ''));
                                    onBack();
                                },
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: article.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 py-3 px-4 bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(60,187,162,0.08)] rounded-xl mb-4 cursor-pointer border border-[rgba(124,58,237,0.15)] no-underline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[16px]",
                                children: "🔗"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-bold text-[#7C3AED]",
                                children: [
                                    "원문 보기 — ",
                                    article.src
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-[12px] text-[#8888aa]",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#f8f0ff] to-[#f0faff] rounded-[16px] p-4 mb-5 border-2 border-[rgba(124,58,237,0.12)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] font-black text-[#7C3AED] tracking-[0.5px] mb-2",
                                children: "🧩 뉴스 퀴즈 (+20P)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[15px] font-bold text-[#1a1a2e] mb-3 leading-relaxed",
                                children: article.quiz.q
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: article.quiz.opts.map((opt, i)=>{
                                    let btnClass = 'py-2.5 px-3.5 border-2 rounded-[10px] text-sm font-bold bg-white cursor-pointer transition-all text-left';
                                    if (quizDone) {
                                        if (i === article.quiz.ans) {
                                            btnClass += ' border-[#3CBBA2] bg-[#3CBBA2] text-white';
                                        } else if (i === quizDone.selected && !quizDone.correct) {
                                            btnClass += ' border-[#FF4D6D] bg-[#FF4D6D] text-white';
                                        } else {
                                            btnClass += ' border-[#e0d4ff] text-[#1a1a2e] opacity-50';
                                        }
                                    } else {
                                        btnClass += ' border-[#e0d4ff] text-[#1a1a2e] hover:border-[#7C3AED] hover:text-[#7C3AED]';
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: btnClass,
                                        onClick: ()=>handleQuizAnswer(i),
                                        disabled: !!quizDone,
                                        children: [
                                            String.fromCharCode(65 + i),
                                            ". ",
                                            opt
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            quizDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-2.5 py-2.5 px-3 rounded-[10px] text-[13px] font-bold leading-relaxed ${quizDone.correct ? 'bg-[rgba(60,187,162,0.12)] text-[#1a7a64]' : 'bg-[rgba(255,77,109,0.10)] text-[#c0243a]'}`,
                                children: quizDone.correct ? '✅ 정답이에요! +20P 적립' : `❌ 오답이에요. 정답은 ${String.fromCharCode(65 + article.quiz.ans)}번이에요. +20P (참여 보너스)`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsScreen",
    ()=>NewsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$news$2f$news$2d$list$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-list.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$news$2f$article$2d$view$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/news/article-view.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NewsScreen() {
    const [selectedArticle, setSelectedArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    if (selectedArticle) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$news$2f$article$2d$view$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArticleView"], {
            articleId: selectedArticle,
            onBack: ()=>setSelectedArticle(null),
            onHashtagClick: (tag)=>{
                setSearchQuery(tag);
                setSelectedArticle(null);
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-screen.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$news$2f$news$2d$list$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewsList"], {
        searchQuery: searchQuery,
        onSelectArticle: setSelectedArticle,
        onHashtagClick: setSearchQuery
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-screen.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddEventPopup",
    ()=>AddEventPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
function AddEventPopup() {
    const { addEventOpen, setAddEventOpen, userEvents, setUserEvents, toast } = useApp();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [memo, setMemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    if (!addEventOpen) return null;
    const handleSave = ()=>{
        if (!title.trim()) {
            toast("⚠️ 일정 제목을 입력해주세요.");
            return;
        }
        if (!date) {
            toast("⚠️ 날짜를 선택해주세요.");
            return;
        }
        const [y, m, d] = date.split("-").map(Number);
        const key = `${y}-${m}-${d}`;
        const newEvents = {
            ...userEvents
        };
        if (!newEvents[key]) newEvents[key] = [];
        newEvents[key].push({
            t: title,
            tm: time,
            desc: memo,
            c: "#7C3AED"
        });
        setUserEvents(newEvents);
        setAddEventOpen(false);
        toast("✅ 일정이 저장되었어요!");
        // Reset form
        setTitle("");
        setDate("");
        setTime("");
        setMemo("");
    };
    const handleCancel = ()=>{
        setAddEventOpen(false);
        setTitle("");
        setDate("");
        setTime("");
        setMemo("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[300] flex items-end justify-center",
        onClick: handleCancel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-t-[24px] p-6 w-full max-h-[80%] overflow-y-auto",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[18px] font-black text-[#1a1a2e] mb-4",
                    children: "새 일정 추가"
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                            children: "일정 제목"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: title,
                            onChange: (e)=>setTitle(e.target.value),
                            placeholder: "일정 제목을 입력하세요",
                            className: "w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2.5 mb-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                    children: "날짜"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: date,
                                    onChange: (e)=>setDate(e.target.value),
                                    className: "w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                                    children: "시간"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "time",
                                    value: time,
                                    onChange: (e)=>setTime(e.target.value),
                                    className: "w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] font-bold text-[#4a4a6a] mb-1.5",
                            children: "메모"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: memo,
                            onChange: (e)=>setMemo(e.target.value),
                            placeholder: "메모 (선택)",
                            className: "w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2.5 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCancel,
                            className: "flex-1 py-3.5 bg-[#f0e8ff] text-[#7C3AED] border-none rounded-xl text-[15px] font-black cursor-pointer",
                            children: "취소"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            className: "flex-[2] py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-xl text-[15px] font-black cursor-pointer",
                            children: "저장하기"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarScreen",
    ()=>CalendarScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$calendar$2f$add$2d$event$2d$popup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/add-event-popup.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MONTH_NAMES = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
];
const DAY_NAMES = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토"
];
function CalendarScreen() {
    const { userEvents, addEventOpen, setAddEventOpen } = useApp();
    const now = new Date();
    const [calYear, setCalYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(now.getFullYear());
    const [calMonth, setCalMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(now.getMonth());
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const calNav = (dir)=>{
        let newMonth = calMonth + dir;
        let newYear = calYear;
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }
        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }
        setCalMonth(newMonth);
        setCalYear(newYear);
    };
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const prevMonthDays = new Date(calYear, calMonth, 0).getDate();
    const getEventsForDay = (day)=>{
        const key = `${calYear}-${calMonth + 1}-${day}`;
        return [
            ...SYS_EVS[key] || [],
            ...userEvents[key] || []
        ];
    };
    const renderCalendarDays = ()=>{
        const days = [];
        // Previous month days
        for(let i = 0; i < firstDay; i++){
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[50px] rounded-lg p-1 cursor-pointer transition-colors hover:bg-[rgba(124,58,237,0.06)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 flex items-center justify-center text-[12px] font-bold text-[#ccc] mx-auto mb-[2px]",
                    children: prevMonthDays - firstDay + 1 + i
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, `prev-${i}`, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 61,
                columnNumber: 9
            }, this));
        }
        // Current month days
        for(let d = 1; d <= daysInMonth; d++){
            const dow = (firstDay + d - 1) % 7;
            const isToday = d === now.getDate() && calMonth === now.getMonth() && calYear === now.getFullYear();
            const isSelected = selectedDay && selectedDay.d === d && selectedDay.m === calMonth && selectedDay.y === calYear;
            const events = getEventsForDay(d);
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `min-h-[50px] rounded-lg p-1 cursor-pointer transition-colors hover:bg-[rgba(124,58,237,0.06)] ${isSelected ? "bg-[rgba(124,58,237,0.1)]" : ""}`,
                onClick: ()=>setSelectedDay({
                        d,
                        m: calMonth,
                        y: calYear
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-6 h-6 flex items-center justify-center text-[12px] font-bold mx-auto mb-[2px] ${isToday ? "bg-[#7C3AED] text-white rounded-full" : dow === 0 ? "text-[#ee4040]" : dow === 6 ? "text-[#7C3AED]" : "text-[#1a1a2e]"}`,
                        children: d
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-[2px] justify-center flex-wrap",
                        children: events.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[5px] h-[5px] rounded-full flex-shrink-0",
                                style: {
                                    background: e.c || "#7C3AED"
                                }
                            }, i, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, `day-${d}`, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, this));
        }
        // Next month days
        const remain = (7 - (firstDay + daysInMonth) % 7) % 7;
        for(let i = 1; i <= remain; i++){
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[50px] rounded-lg p-1 cursor-pointer transition-colors hover:bg-[rgba(124,58,237,0.06)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 flex items-center justify-center text-[12px] font-bold text-[#ccc] mx-auto mb-[2px]",
                    children: i
                }, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this)
            }, `next-${i}`, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 124,
                columnNumber: 9
            }, this));
        }
        return days;
    };
    const selectedEvents = selectedDay ? getEventsForDay(selectedDay.d) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto hide-scrollbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] px-5 pt-4 pb-5 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[22px] font-black mb-1",
                        children: "📅 금융 캘린더"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-85",
                        children: "주요 경제 일정과 나만의 일정을 관리하세요"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white mx-4 rounded-[20px] shadow-[0_2px_16px_rgba(60,60,120,0.10)] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 pt-4 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[17px] font-black text-[#1a1a2e]",
                                children: [
                                    calYear,
                                    "년 ",
                                    MONTH_NAMES[calMonth]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>calNav(-1),
                                        className: "bg-[rgba(124,58,237,0.08)] border-none rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-[16px] text-[#7C3AED]",
                                        children: "‹"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>calNav(1),
                                        className: "bg-[rgba(124,58,237,0.08)] border-none rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-[16px] text-[#7C3AED]",
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAddEventOpen(true),
                                        className: "bg-[#7C3AED] border-none rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-[18px] text-white font-black",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 px-3 pb-1",
                        children: DAY_NAMES.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[11px] font-bold text-center py-1 ${i === 0 ? "text-[#ee4040]" : i === 6 ? "text-[#7C3AED]" : "text-[#8888aa]"}`,
                                children: name
                            }, name, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-[2px] px-3 pb-3",
                        children: renderCalendarDays()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 mb-3 bg-white rounded-[20px] shadow-[0_2px_16px_rgba(60,60,120,0.10)] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[15px] font-black text-[#1a1a2e]",
                            children: selectedDay ? `${selectedDay.y}년 ${MONTH_NAMES[selectedDay.m]} ${selectedDay.d}일` : "날짜를 선택해주세요"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    selectedDay && selectedEvents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[#8888aa] py-3 text-left",
                        children: "이 날에는 등록된 일정이 없습니다"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    selectedEvents.map((event, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2.5 items-start py-2.5 border-b border-[rgba(0,0,0,0.06)] last:border-b-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0",
                                    style: {
                                        background: event.c || "#7C3AED"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-black text-[#1a1a2e] mb-[2px]",
                                            children: event.t
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] text-[#8888aa]",
                                            children: event.tm
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        event.desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] text-[#4a4a6a] mt-[3px] leading-relaxed",
                                            children: event.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)),
                    !selectedDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[#8888aa] py-3 text-left",
                        children: "날짜를 클릭하면 일정을 확인할 수 있습니다"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$calendar$2f$add$2d$event$2d$popup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddEventPopup"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShopScreen",
    ()=>ShopScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
const earnItems = [
    {
        icon: '⚔️',
        title: '오늘의 과제 참여',
        desc: '문제 풀기만 해도 · 문제당',
        points: '+20P',
        tag: '문제당'
    },
    {
        icon: '🎯',
        title: '오늘의 과제 전체 정답',
        desc: '3문제 모두 정답 시 보너스',
        points: '+20P',
        tag: '보너스'
    },
    {
        icon: '📰',
        title: '뉴스 5개 읽기',
        desc: '뉴스 상세 페이지 5개 이상 방문',
        points: '+20P',
        tag: '달성시'
    },
    {
        icon: '📖',
        title: '뉴스 10개 읽기',
        desc: '뉴스 상세 페이지 10개 이상 방문',
        points: '+40P',
        tag: '달성시'
    },
    {
        icon: '🧩',
        title: '뉴스 상세 퀴즈 참여',
        desc: '뉴스 상세 페이지 퀴즈 참여',
        points: '+20P',
        tag: '참여당'
    },
    {
        icon: '🔥',
        title: '연속 7일 출석 보너스',
        desc: '7일 연속 출석 달성 시',
        points: '+100P',
        tag: '보너스'
    }
];
const exchangeItems = [
    {
        icon: '💳',
        name: '간편결제 캐시백',
        desc: '카카오페이·토스 500원 캐시백',
        cost: '1,000P'
    },
    {
        icon: '☕',
        name: '커피 쿠폰',
        desc: '스타벅스·메가커피 아메리카노 1잔',
        cost: '800P'
    }
];
const exchangeGridItems = [
    {
        icon: '📡',
        name: '데이터 쿠폰',
        desc: '통신사 1GB 충전',
        cost: '1,500P'
    },
    {
        icon: '🏪',
        name: '편의점 할인',
        desc: 'GS25·CU 1,000원 할인',
        cost: '600P'
    },
    {
        icon: '🛍️',
        name: '쇼핑 할인',
        desc: '네이버쇼핑 5,000원',
        cost: '2,000P'
    },
    {
        icon: '🎬',
        name: 'OTT 이용권',
        desc: '웨이브·티빙 1개월',
        cost: '3,000P'
    }
];
function ShopScreen() {
    const { userChar, setAlertPopOpen, setAlertPopData } = useApp();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('earn');
    const char = userChar || CHARS[0];
    const handleExchange = (name, desc, icon, cost)=>{
        setAlertPopData({
            icon,
            title: `${name} 신청 완료!`,
            desc: `<strong>${cost}</strong>가 차감되며,<br><br>${desc}을(를) 이메일로 발송해드립니다.<br><br>📧 가입 이메일로 자동 발송됩니다.<br>발송까지 최대 24시간이 소요될 수 있어요.`
        });
        setAlertPopOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto hide-scrollbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_70%)] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-10 -left-5 w-40 h-40 bg-[radial-gradient(circle,rgba(60,187,162,0.25),transparent_70%)] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 pt-6 pb-5 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[22px] font-black mb-1",
                                children: "🏪 포인트 상점"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] opacity-75",
                                children: "활동으로 포인트를 모아 혜택으로 교환하세요"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/[0.08] border border-white/[0.12] rounded-[16px] p-4 mt-4 flex items-center justify-between backdrop-blur-[16px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-11 bg-gradient-to-br from-[#ffd700] to-[#ffb300] rounded-xl flex items-center justify-center text-[22px] flex-shrink-0",
                                                children: "🪙"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] opacity-70 font-bold tracking-[0.5px]",
                                                        children: "보유 포인트"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[26px] font-black text-[#ffd700] leading-[1.1]",
                                                        children: "3,240P"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-white/50 mt-[2px]",
                                                        children: "이번 달 +1,240P 적립"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[rgba(60,187,162,0.2)] border border-[rgba(60,187,162,0.4)] rounded-[10px] py-1.5 px-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-black text-[#3CBBA2]",
                                                children: char.lvLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-white/50",
                                                children: "멤버십"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-shrink-0 bg-white border-b border-[rgba(0,0,0,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('earn'),
                        className: `flex-1 py-3 px-1.5 rounded-none text-[12px] font-bold border-none border-b-2 cursor-pointer text-center transition-all bg-transparent ${activeTab === 'earn' ? 'text-[#7C3AED] border-b-[#7C3AED]' : 'text-[#8888aa] border-b-transparent'}`,
                        children: "✨ 포인트 적립"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('exch'),
                        className: `flex-1 py-3 px-1.5 rounded-none text-[12px] font-bold border-none border-b-2 cursor-pointer text-center transition-all bg-transparent ${activeTab === 'exch' ? 'text-[#7C3AED] border-b-[#7C3AED]' : 'text-[#8888aa] border-b-transparent'}`,
                        children: "🎁 혜택 교환"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 pb-6",
                children: activeTab === 'earn' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[15px] font-black text-[#1a1a2e]",
                                    children: "포인트 적립 방법"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[12px] text-[#8888aa] mt-[2px]",
                                    children: "활동에 참여하고 포인트를 적립하세요"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/95 rounded-[20px] p-1 px-4 mb-3.5 shadow-[0_2px_12px_rgba(60,60,120,0.08)]",
                            children: earnItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3.5 py-3.5 border-b border-[rgba(0,0,0,0.05)] last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[20px] w-[42px] h-[42px] bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(60,187,162,0.08)] rounded-xl flex items-center justify-center flex-shrink-0",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-black text-[#1a1a2e]",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[12px] text-[#8888aa] mt-[2px]",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end gap-[2px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-black text-[#3CBBA2]",
                                                    children: item.points
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-[#8888aa]",
                                                    children: item.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] font-black text-[#8888aa] tracking-[0.5px] mt-4 mb-2",
                            children: "인기 혜택"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        exchangeItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/95 rounded-[16px] p-4 mb-2.5 shadow-[0_2px_12px_rgba(60,60,120,0.08)] cursor-pointer transition-all hover:border-[rgba(124,58,237,0.2)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(60,60,120,0.12)] border border-transparent",
                                onClick: ()=>handleExchange(item.name, item.desc, item.icon, item.cost),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[28px] w-12 h-12 bg-gradient-to-br from-[#f5eeff] to-[#eef9f5] rounded-[14px] flex items-center justify-center flex-shrink-0",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[15px] font-black text-[#1a1a2e]",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[12px] text-[#8888aa] leading-[1.4] mt-[2px]",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pt-2.5 border-t border-[rgba(0,0,0,0.05)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[13px] font-black text-[#7C3AED]",
                                                        children: item.cost
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[#8888aa]",
                                                        children: "필요 포인트"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] text-white border-none rounded-[10px] py-2 px-[18px] text-[13px] font-black cursor-pointer",
                                                children: "교환하기"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] font-black text-[#8888aa] tracking-[0.5px] mt-4 mb-2",
                            children: "생활 혜택"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2.5",
                            children: exchangeGridItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 rounded-[16px] p-4 shadow-[0_2px_12px_rgba(60,60,120,0.08)] cursor-pointer transition-all hover:border-[rgba(124,58,237,0.2)] hover:-translate-y-[1px] border border-transparent",
                                    onClick: ()=>handleExchange(item.name, item.desc, item.icon, item.cost),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[28px] mb-2",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-black text-[#1a1a2e]",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-[#8888aa] my-1 mb-2",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-2 border-t border-[rgba(0,0,0,0.05)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[12px] font-black text-[#7C3AED]",
                                                    children: item.cost
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] text-white border-none rounded-[10px] py-1.5 px-3 text-[12px] font-black cursor-pointer",
                                                    children: "교환"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[rgba(124,58,237,0.05)] rounded-xl py-3 px-3.5 text-[12px] text-[#8888aa] leading-[1.7] mt-3.5 border border-[rgba(124,58,237,0.08)]",
                            children: "💡 교환 신청 시 가입 이메일로 쿠폰이 자동 발송됩니다. 발송까지 최대 24시간이 소요될 수 있어요."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MyScreen",
    ()=>MyScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
const wrongNotes = [
    {
        q: "Q. 미 연준의 기준금리 결정 기구는?",
        a: "내 답: FRB ❌ → 정답: FOMC (연방공개시장위원회) ✅",
        hint: "💡 FRB는 연방준비제도를, FOMC는 금리를 실제로 결정하는 기구예요!"
    },
    {
        q: "Q. PER이 낮을수록 주가는?",
        a: "내 답: 고평가 ❌ → 정답: 저평가 가능성 ✅",
        hint: "💡 PER이 낮으면 이익 대비 주가가 낮다는 뜻이에요."
    },
    {
        q: "Q. 비트코인 반감기 주기는?",
        a: "내 답: 2년 ❌ → 정답: 약 4년 ✅",
        hint: "💡 약 21만 블록(≈4년)마다 채굴 보상이 절반으로 줄어들어요."
    },
    {
        q: "Q. 주가순자산비율(PBR)이 1 미만이면?",
        a: "내 답: 고평가 ❌ → 정답: 저평가 가능성 ✅",
        hint: "💡 PBR 1 미만은 주가가 순자산보다 낮다는 뜻이에요."
    },
    {
        q: "Q. 코스피는 어느 나라 주가지수인가요?",
        a: "내 답: 일본 ❌ → 정답: 대한민국 ✅",
        hint: "💡 코스피(KOSPI)는 Korea Composite Stock Price Index의 약자예요!"
    }
];
const pointHistory = [
    {
        icon: "⚔️",
        title: "오늘의 과제 참여",
        desc: "오늘 · Q1 연준 관련 문제",
        amount: "+20P",
        isPlus: true
    },
    {
        icon: "🔥",
        title: "7일 연속 출석 보너스",
        desc: "어제 · 출석 체크",
        amount: "+100P",
        isPlus: true
    },
    {
        icon: "🎁",
        title: "커피 쿠폰 교환",
        desc: "3월 22일 · 혜택 교환 사용",
        amount: "-800P",
        isPlus: false
    }
];
function MyScreen() {
    const { userNick, userChar } = useApp();
    const char = userChar || CHARS[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto hide-scrollbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-[#7C3AED] to-[#3CBBA2] rounded-[20px] p-6 text-center text-white mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[80px] mb-2",
                            children: char.emoji
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[22px] font-black mb-1",
                            children: userNick
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm opacity-90 mb-3",
                            children: [
                                char.lvLabel,
                                " · ",
                                char.tag
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 rounded-xl py-2.5 px-2 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[18px] font-black",
                                            children: "3,240"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] opacity-80",
                                            children: "FinIQ"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 rounded-xl py-2.5 px-2 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[18px] font-black",
                                            children: "42일"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] opacity-80",
                                            children: "연속 출석"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[17px] font-black text-[#1a1a2e] tracking-[-0.5px] mb-1",
                            children: "🥚 아바타 진화 단계"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] text-[#8888aa] mb-1",
                            children: [
                                "현재 ",
                                char.lvLabel,
                                " · 다음 단계까지 760P"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-end py-3 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-7 left-5 right-5 h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                CHARS.map((c)=>{
                                    const isCurrent = c.lv === char.lv;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-center relative z-10 transition-all ${isCurrent ? "" : "opacity-35 blur-[1px]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${isCurrent ? "text-[30px] drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]" : "text-[22px]"}`,
                                                children: c.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-[11px] font-bold ${isCurrent ? "text-[#7C3AED] font-black" : "text-[#8888aa]"}`,
                                                children: isCurrent ? `${c.lvLabel} ◀` : c.lvLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.lv, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-2.5",
                            children: "📰 최근 관심 뉴스 동향"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] text-[#4a4a6a] mb-2.5",
                            children: "최근 한 달간 가장 많이 읽은 주제"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5 flex-wrap",
                            children: [
                                "#반도체 · 12회",
                                "#AI전쟁 · 9회",
                                "#금리인하 · 7회",
                                "#엔비디아 · 6회",
                                "#가상화폐 · 4회"
                            ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px] font-bold text-[#7C3AED] bg-[rgba(124,58,237,0.08)] py-1 px-2.5 rounded-[20px]",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2.5 p-2.5 bg-[rgba(124,58,237,0.06)] rounded-[10px] text-[13px] text-[#4a4a6a] leading-relaxed",
                            children: [
                                "💡 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "AI 한마디:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 142,
                                    columnNumber: 16
                                }, this),
                                " 기술주·반도체 뉴스에 집중되어 있어요. 포트폴리오 다각화를 위해 부동산·채권 뉴스도 함께 살펴보세요."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-3",
                            children: "📝 오늘의 과제 정답률"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-2.5 border-b border-[rgba(0,0,0,0.05)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-[#4a4a6a]",
                                    children: "이번 주 정답률"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[15px] font-black text-[#3CBBA2]",
                                    children: "88% (15/17)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-[#4a4a6a]",
                                    children: "이번 달 정답률"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[15px] font-black text-[#3CBBA2]",
                                    children: "81%"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2.5 h-2 bg-[#e8e0ff] rounded overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[81%] h-full bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] text-[#8888aa] mt-1 text-right",
                            children: "이번 달 81%"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-2.5",
                            children: "📖 과제 오답노트"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] text-[#8888aa] mb-2.5",
                            children: "최근 7일 이내 틀린 문제"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[220px] overflow-y-auto hide-scrollbar",
                            children: wrongNotes.map((note, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-[#fff8e1] to-[#fff3cd] rounded-[10px] p-3 mb-2 last:mb-0 border-l-[3px] border-l-[#FF9F1C]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] font-bold text-[#1a1a2e] mb-1",
                                            children: note.q
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] text-[#7a5800] leading-relaxed",
                                            children: [
                                                note.a,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                note.hint
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-2.5",
                            children: "💎 내역"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[12px] text-[#8888aa] mb-2.5",
                            children: "포인트 적립 및 사용 내역 (최근 3건)"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        pointHistory.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 py-2.5 border-b border-[rgba(0,0,0,0.05)] last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[20px] w-9 h-9 bg-[rgba(124,58,237,0.08)] rounded-[10px] flex items-center justify-center",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-black text-[#1a1a2e]",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] text-[#8888aa]",
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-[15px] font-black ${item.isPlus ? "text-[#3CBBA2]" : "text-[#FF4D6D]"}`,
                                        children: item.amount
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainApp",
    ()=>MainApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/status-bar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$nav$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/nav-bar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$toast$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/toast.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$notification$2d$panel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/notification-panel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$market$2d$temp$2d$popup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/market-temp-popup.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$alert$2d$popup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shared/alert-popup.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$auth$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/auth-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$nickname$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/nickname-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$onboarding$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/onboarding-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$result$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/auth/result-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$home$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/home/home-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$news$2f$news$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/news/news-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$calendar$2f$calendar$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/calendar/calendar-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shop$2f$shop$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/shop/shop-screen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$my$2f$my$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/my/my-screen.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MainApp() {
    const { currentScreen, currentTab } = useApp();
    const renderScreen = ()=>{
        switch(currentScreen){
            case "auth":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$auth$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 28,
                    columnNumber: 16
                }, this);
            case "nickname":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$nickname$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NicknameScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 30,
                    columnNumber: 16
                }, this);
            case "onboarding":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$onboarding$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OnboardingScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, this);
            case "result":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$result$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResultScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this);
            case "main":
                return renderMainTab();
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$auth$2f$auth$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 38,
                    columnNumber: 16
                }, this);
        }
    };
    const renderMainTab = ()=>{
        switch(currentTab){
            case "home":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$home$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 45,
                    columnNumber: 16
                }, this);
            case "news":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$news$2f$news$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewsScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 47,
                    columnNumber: 16
                }, this);
            case "calendar":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$calendar$2f$calendar$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 49,
                    columnNumber: 16
                }, this);
            case "shop":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shop$2f$shop$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShopScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 51,
                    columnNumber: 16
                }, this);
            case "my":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$my$2f$my$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MyScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 53,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$home$2f$home$2d$screen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeScreen"], {}, void 0, false, {
                    fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                    lineNumber: 55,
                    columnNumber: 16
                }, this);
        }
    };
    const showNav = currentScreen === "main";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[390px] h-[844px] bg-gradient-to-br from-[#f5eeff] to-[#eef9f5] rounded-[44px] shadow-[0_20px_80px_rgba(124,58,237,0.18),0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col my-6 mx-auto relative",
        children: [
            showNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$status$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 63,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 min-h-0",
                children: renderScreen()
            }, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            showNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$nav$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavBar"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 67,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$notification$2d$panel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPanel"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$market$2d$temp$2d$popup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarketTempPopup"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$alert$2d$popup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertPopup"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$shared$2f$toast$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/donbugi/Donbugi-FE/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/app-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$main$2d$app$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/donbugi/Donbugi-FE/src/components/main-app.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-[#ede0ff] via-[#f5f0ff] to-[#d8f7ef] flex justify-center items-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppProvider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$donbugi$2f$Donbugi$2d$FE$2f$src$2f$components$2f$main$2d$app$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainApp"], {}, void 0, false, {
                fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/app/page.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/app/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/donbugi/Donbugi-FE/src/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_donbugi_Donbugi-FE_src_0dlf_3p._.js.map