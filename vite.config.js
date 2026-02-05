import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        account: 'account.html',
        wishlist: 'wishlist.html',
        checkout: 'checkout.html',
        register: 'register.html',
        view: 'view.html',
        login: 'login.html',
        shop: 'shop.html'
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})