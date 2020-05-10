module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
}
