"use client";

import { ProfileArea } from "./profile-area";
import { NewsScroll } from "./news-scroll";
import { TodayQuiz } from "./today-quiz";

export function HomeScreen() {
  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      <ProfileArea />
      <NewsScroll />
      <TodayQuiz />
    </div>
  );
}
