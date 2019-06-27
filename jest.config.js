const CI = process.env.CI;

const minCoverage = 99;

module.exports = {

  testEnvironment: "node",
  browser: false,

  cacheDirectory: "node_modules/.cache/jest",

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: [
    CI ? "json" : "lcov",
    "text",
    "text-summary",
  ],
  coverageThreshold: {
    global: {
      branches: minCoverage,
      functions: minCoverage,
      lines: minCoverage,
      statements: minCoverage,
    },
  },

  verbose: null,

};
