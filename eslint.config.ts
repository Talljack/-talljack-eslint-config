import createEslintConfig from './src'

export default createEslintConfig(
  {
    javascript: true,
    react: true,
    vue: true,
    typescript: {
      overrides: {
        '@typescript-eslint/no-explicit-any': 'off',
      }
    },
  },
)
