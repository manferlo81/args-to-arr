const CI = process.env.CI;
const minCoverage = 95;

module.exports = {

  testEnvironment: "node",
  browser: false,

  cacheDirectory: "node_modules/.cache/jest",

  preset: "ts-jest",

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
