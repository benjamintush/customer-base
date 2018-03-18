module.exports = {
  // "rules": {
  //   "semi": ["error", "always"],
  //   "quotes": ["error", "double"]
  // }
  extends: ['airbnb-base'],
  // add your custom rules here
  rules: {
    // disallows named function expressions, except in recursive functions, where a name is needed
    'func-names': ["error", "never"],
    // eslint-disable no-unused-vars
    'no-unused-vars': 0,
    // disable max-len errors
    'max-len': ["error", { code: 1000 }],
    // require semicolons always
    'semi': ["error", "always"],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}