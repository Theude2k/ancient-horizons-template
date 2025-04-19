import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ancient-horizons-template/', // for https://theude2k.github.io/ancient-horizons-template/
})
