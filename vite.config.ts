import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // MUHIM: GitHub Pages-da saytingiz "username.github.io/repo-nomi/" shaklida bo'lsa, 
  // 'base' qismiga repozitoriya nomingizni yozishingiz kerak.
  // Agar shaxsiy domeningiz bo'lsa, shunchaki './' qoldiring.
  base: './',

  server: {
    port: 3000, // Mahalliy tekshirish uchun port
    open: true, // Server yoqilganda brauzerni avtomatik ochish
  },

  build: {
    outDir: 'dist', // Tayyor sayt 'dist' papkasiga tushadi
    minify: 'terser', // Kodni maksimal darajada siqish (tezroq ishlashi uchun)
    sourcemap: false, // Xatoliklarni tekshirish fayllarini o'chirib qo'yish
  }
});
