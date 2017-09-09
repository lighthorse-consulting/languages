const languagesByCode = require('./languages.json');

const list = Object.keys(languagesByCode).map(code => {
  return {
    code: code,
    name: languagesByCode[code],
  };
})

module.exports = {
  asHash: () => languagesByCode,
  asList: () => list,
}
