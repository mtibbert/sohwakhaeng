// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        // Enable global test APIs like describe, it, expect
        globals: true,
        // Choose your environment (e.g., 'node', 'jsdom', or 'happy-dom')
        environment: 'node',
    },
})