const languagesByCode = require('./languages.json');

const list = Object.keys(languagesByCode).map(function(code) {
  return {
    code: code,
    name: languagesByCode[code],
  };
})

module.exports = {
  asHash: function() { return languagesByCode; },
  asList: function() { return list; },
}
