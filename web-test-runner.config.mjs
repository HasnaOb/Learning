export default {
  files: ['packages/**/*.unit.test.js'],
  nodeResolve: true,
  testRunnerHtml: testFramework =>
    `<!DOCTYPE html>
    <html>
      <body>
        <script>window.process = { env: { NODE_ENV: "development" } }</script>
        <script src="./__polyfills/scoped-custom-element-registry.min.js"></script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
  testFramework: {
    config: {
      ui: 'bdd',
    },
  },
  coverageConfig: {
    report: true,
    reportDir: 'coverage',
    reporters: ['cobertura', 'lcov'],
    threshold: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
