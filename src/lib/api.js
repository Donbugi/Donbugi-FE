import apiClient, {
  clearAuth,
  getAccessToken,
  getStoredUserId,
  saveAuth,
} from "./axios";

export { clearAuth, getAccessToken, getStoredUserId, saveAuth };

export const authApi = {
  signup: async ({ email, password }) => {
    const response = await apiClient.post("/api/auth/signup", {
      email,
      password,
    });

    return response.data;
  },

  login: async ({ email, password }) => {
    const response = await apiClient.post("/api/auth/login", {
      email,
      password,
    });

    return response.data;
  },

  getMe: async () => {
    const response = await apiClient.get("/api/auth/me");

    return response.data;
  },

  updateMe: async ({ nickname }) => {
    const response = await apiClient.patch("/api/auth/me", {
      nickname,
    });

    return response.data;
  },
};

export const mainApi = {
  getEconomicWeather: async () => {
    const response = await apiClient.get("/api/main/economic-weather");

    return response.data;
  },

  getKospi: async () => {
    const response = await apiClient.get("/api/main/kospi");

    return response.data;
  },
};

export const articleApi = {
  getLatest: async (limit = 30) => {
    const response = await apiClient.get("/api/articles/latest", {
      params: { limit },
    });

    return response.data;
  },

  getByCategory: async (perCategory = 10) => {
    const response = await apiClient.get("/api/articles/by-category", {
      params: { perCategory },
    });

    return response.data;
  },

  search: async ({ q, limit = 30 }) => {
    const response = await apiClient.get("/api/articles/search", {
      params: { q, limit },
    });

    return response.data;
  },

  getDetail: async (articleId) => {
    const response = await apiClient.get(`/api/articles/${articleId}`);

    return response.data;
  },
};

export const newsInterestApi = {
  saveRead: async ({ userId, category }) => {
    const response = await apiClient.post("/api/news/interest/read", {
      userId,
      category,
    });

    return response.data;
  },

  getTrends: async ({ userId, top = 5 } = {}) => {
    const response = await apiClient.get("/api/news/interest/trends", {
      params: { userId, top },
    });

    return response.data;
  },
};

export const quizApi = {
  getArticleQuiz: async (articleId) => {
    const response = await apiClient.get(`/api/quiz/${articleId}`);

    return response.data;
  },

  getRandom: async (size = 3) => {
    const response = await apiClient.get("/api/quiz/random", {
      params: { size },
    });

    return response.data;
  },

  getRandomSession: async (size = 3) => {
    const response = await apiClient.get("/api/quiz/random-session", {
      params: { size },
    });

    return response.data;
  },

  saveAttempt: async ({
    userId,
    correct,
    question,
    userAnswer,
    correctAnswer,
    explanation,
  }) => {
    const response = await apiClient.post("/api/quiz/stats/attempt", {
      userId,
      correct,
      question,
      userAnswer,
      correctAnswer,
      explanation,
    });

    return response.data;
  },

  getDashboard: async ({ userId } = {}) => {
    const response = await apiClient.get("/api/quiz/stats/dashboard", {
      params: { userId },
    });

    return response.data;
  },
};

export const pointApi = {
  getBenefits: async () => {
    const response = await apiClient.get("/api/point-benefits");

    return response.data;
  },

  getBalance: async (userId) => {
    const response = await apiClient.get("/api/points/balance", {
      params: { userId },
    });

    return response.data;
  },

  earn: async ({ userId, amount, title, detail }) => {
    const response = await apiClient.post("/api/points/earn", {
      userId,
      amount,
      title,
      detail,
    });

    return response.data;
  },

  getMonthlySummary: async ({ userId, year, month }) => {
    const response = await apiClient.get("/api/points/monthly-summary", {
      params: {
        userId,
        year,
        month,
      },
    });

    return response.data;
  },

  getRecentActivity: async (userId) => {
    const response = await apiClient.get("/api/points/recent-activity", {
      params: { userId },
    });

    return response.data;
  },

  redeem: async ({ userId, email, benefitCode }) => {
    const response = await apiClient.post("/api/points/redeem", {
      userId,
      email,
      benefitCode,
    });

    return response.data;
  },

  checkAttendance: async ({ userId, date }) => {
    const response = await apiClient.post("/api/points/rewards/attendance", {
      userId,
      date,
    });

    return response.data;
  },

  getAttendanceStatus: async (userId) => {
    const response = await apiClient.get(
      "/api/points/rewards/attendance/status",
      {
        params: { userId },
      }
    );

    return response.data;
  },

  rewardDailyQuiz: async ({ userId, sessionId, results }) => {
    const response = await apiClient.post("/api/points/rewards/daily-quiz", {
      userId,
      sessionId,
      results,
    });

    return response.data;
  },

  rewardNewsDetailQuiz: async ({ userId, articleId }) => {
    const response = await apiClient.post(
      "/api/points/rewards/news-detail-quiz",
      {
        userId,
        articleId,
      }
    );

    return response.data;
  },
};

export const notificationApi = {
  getNotifications: async () => {
    const response = await apiClient.get("/api/notifications");

    return response.data;
  },

  readAll: async () => {
    const response = await apiClient.patch("/api/notifications/read-all");

    return response.data;
  },
};