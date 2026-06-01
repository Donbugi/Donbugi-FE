import axios from "axios";

export const TOKEN_KEY = "donbugi_access_token";
export const USER_ID_KEY = "donbugi_user_id";
export const NICKNAME_KEY = "donbugi_nickname";
export const USER_CHAR_KEY = "donbugi_user_char";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(TOKEN_KEY);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.response?.data ||
      "API 요청에 실패했습니다.";

    return Promise.reject(
      new Error(typeof message === "string" ? message : "API 요청에 실패했습니다.")
    );
  }
);

export function saveAuth({ accessToken, userId }) {
  if (typeof window === "undefined") {
    return;
  }

  if (accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  }

  if (userId) {
    localStorage.setItem(USER_ID_KEY, userId);
  }
}

export function clearAuth() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(NICKNAME_KEY);
  localStorage.removeItem(USER_CHAR_KEY);
}

export function getAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUserId() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(USER_ID_KEY);
}

export default apiClient;