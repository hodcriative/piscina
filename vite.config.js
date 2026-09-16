import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necessário porque o site é publicado em hodcriative.github.io/piscina/
  // (um subdiretório, não a raiz do domínio). Se um dia o projeto for
  // publicado na raiz (domínio próprio, Vercel, Netlify), troque para '/'.
  base: '/piscina/',
})
