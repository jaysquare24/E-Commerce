export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    // Handle Vite’s @ imports
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"]
};
