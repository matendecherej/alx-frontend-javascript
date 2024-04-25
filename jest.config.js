module.exports = {
    // The directory where Jest should look for tests
    roots: ['<rootDir>/src'],
  
    // The pattern Jest uses to find test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  
    // The module file extensions Jest should use
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
    // Enable Jest to transform JavaScript files using Babel
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  };