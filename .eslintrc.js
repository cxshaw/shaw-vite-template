module.exports = {
  extends: [require.resolve('shaw-lint/typescript/react')],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'spellcheck/spell-checker': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
