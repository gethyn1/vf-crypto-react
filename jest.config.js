module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "./setup-jest.js"
  ]
}
