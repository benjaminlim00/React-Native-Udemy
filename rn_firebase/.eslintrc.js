module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: { jest: true },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extensioreadme.n": "off",
    "react/prop-types": "off",
    "comma-dangle": "off"
  },
  globals: { fetch: false }
};
