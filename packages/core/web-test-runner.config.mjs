import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'src/**/*.test.ts',
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: './tsconfig.json',
      target: 'es2020'
    })
  ],
  browsers: [
    playwrightLauncher({ product: 'chromium' })
  ],
  coverageConfig: {
    include: ['src/**/*.ts'],
    exclude: ['src/**/*.test.ts', 'src/**/*.stories.ts']
  },
  testFramework: {
    config: {
      timeout: 10000
    }
  }
};