"use client";

import { useApp } from "@/lib/app-context";
import { StatusBar } from "@/components/shared/status-bar";
import { NavBar } from "@/components/shared/nav-bar";
import { Toast } from "@/components/shared/toast";
import { NotificationPanel } from "@/components/shared/notification-panel";
import { MarketTempPopup } from "@/components/shared/market-temp-popup";
import { AlertPopup } from "@/components/shared/alert-popup";

import { AuthScreen } from "@/components/auth/auth-screen";
import { NicknameScreen } from "@/components/auth/nickname-screen";
import { OnboardingScreen } from "@/components/auth/onboarding-screen";
import { ResultScreen } from "@/components/auth/result-screen";

import { HomeScreen } from "@/components/home/home-screen";
import { NewsScreen } from "@/components/news/news-screen";
import { CalendarScreen } from "@/components/calendar/calendar-screen";
import { ShopScreen } from "@/components/shop/shop-screen";
import { MyScreen } from "@/components/my/my-screen";

export function MainApp() {
  const { currentScreen, currentTab } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case "auth":
        return <AuthScreen />;
      case "nickname":
        return <NicknameScreen />;
      case "onboarding":
        return <OnboardingScreen />;
      case "result":
        return <ResultScreen />;
      case "main":
        return renderMainTab();
      default:
        return <AuthScreen />;
    }
  };

  const renderMainTab = () => {
    switch (currentTab) {
      case "home":
        return <HomeScreen />;
      case "news":
        return <NewsScreen />;
      case "calendar":
        return <CalendarScreen />;
      case "shop":
        return <ShopScreen />;
      case "my":
        return <MyScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const showNav = currentScreen === "main";

  return (
    <div className="w-[390px] h-[844px] bg-gradient-to-br from-[#f5eeff] to-[#eef9f5] rounded-[44px] shadow-[0_20px_80px_rgba(124,58,237,0.18),0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col my-6 mx-auto relative">
      {showNav && <StatusBar />}

      <div className="flex flex-col flex-1 min-h-0">{renderScreen()}</div>

      {showNav && <NavBar />}

      {/* Popups & Overlays */}
      <NotificationPanel />
      <MarketTempPopup />
      <AlertPopup />
      <Toast />
    </div>
  );
}
