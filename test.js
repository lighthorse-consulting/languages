const countries = require('./index');

describe('Languages', () => {
  test('Exposes countries hash', () => {
    expect(countries.asHash()).toBeTruthy();
  })
  test('Exposes countries list', () => {
    expect(countries.asList().length).toBe(608);
  })
})
