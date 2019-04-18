const CI = process.env.CI;

const minCoverage = 99;

module.exports = {

  testEnvironment: "node",

  collectCoverage: !CI,
  collectCoverageFrom: [
    "dist/**",
  ],
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
