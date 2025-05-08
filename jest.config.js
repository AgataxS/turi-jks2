export default {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: { "^.+\\.(jsx?|tsx?)$": "@swc/jest" },   // ← añade esto
    moduleNameMapper: { "\\.(css|jpg|png)$": "identity-obj-proxy" },
  };
  