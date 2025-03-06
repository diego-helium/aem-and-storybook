// cypress.config.ts
import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4503/content/wknd/us/en/tests',
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, {
        ...config
      });
    },
  },
});
