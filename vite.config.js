import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrganizationPage = repositoryName?.endsWith('.github.io')
const deploymentBase = process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrganizationPage
  ? `/${repositoryName}/`
  : '/'

export default defineConfig({
  // No GitHub Actions, usa automaticamente /nome-do-repositorio/.
  base: deploymentBase,
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 4173,
  },
})
