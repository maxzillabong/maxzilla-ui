import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'src/**/*.test.{js,ts}',
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'es2020',
    }),
  ],
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  coverage: true,
  coverageConfig: {
    threshold: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },
    include: ['src/**/*.ts'],
    exclude: ['src/**/*.test.ts', 'src/**/*.stories.ts'],
  },
  testFramework: {
    config: {
      timeout: '10000',
    },
  },
};