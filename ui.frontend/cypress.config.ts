// cypress.config.ts
import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

export default defineConfig({
  projectId: 'nzsnb3',
  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, {
        ...config
      });
    },
  },
});
