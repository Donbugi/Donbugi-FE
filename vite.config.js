import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

// ES 모듈 환경에서 __dirname 직접 정의 (언더바 2개임을 확인하세요!)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@" 경로를 src 폴더로 매핑하여 "@/components/..." 식으로 호출 가능하게 함
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
