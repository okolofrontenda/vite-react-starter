import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import pluginChecker from 'vite-plugin-checker'

export default defineConfig({
	plugins: [
		react(),
		pluginChecker({
			typescript: true,
			eslint: {
				lintCommand:
					'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
			},
		}),
	],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
})
