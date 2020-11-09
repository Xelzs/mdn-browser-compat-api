const MDNBrowserCompatApi = require('../src/index');
const tap = require('tap');

tap.test('getFeatures()', (test) => {
  test.test('should return a list with more than 10 000 features', (subtest) => {
    const features = MDNBrowserCompatApi.getFeatures();
    features.length > 10000 ? subtest.pass() : subtest.fail('Length is less than 10 000');
    subtest.end();
  });

  test.test('should return a list contains only css features', (subtest) => {
    const features = MDNBrowserCompatApi.getFeatures('css');
    const filtered = features.filter((feature) => !feature.includes('css'));
    filtered.length > 0
      ? subtest.fail(`Contains ${filtered.length} features not included in css folder`)
      : subtest.pass();
    subtest.end();
  });

  test.end();
});

tap.test('find()', (test) => {
  test.test('should return a list of features containing width keyword', (subtest) => {
    const features = MDNBrowserCompatApi.find('width');
    const filtered = features.filter((feature) => !feature.includes('width'));
    filtered.length > 0
      ? subtest.fail(`Contains ${filtered.length} features not including width keyword`)
      : subtest.pass();
    subtest.end();
  });

  test.test('should return a list of features containing fit-content keyword in css folder', (subtest) => {
    const features = MDNBrowserCompatApi.find('fit-content', 'css');
    const filtered = features.filter((feature) => !feature.includes('fit-content'));
    filtered.length > 0
      ? subtest.fail(`Contains ${filtered.length} features not including fit-content keyword`)
      : subtest.pass();
    subtest.end();
  });

  test.end();
});

tap.equal(MDNBrowserCompatApi.getBrowsers().chrome.name, 'Chrome');

tap.test('get()', (test) => {
  test.test("should return the BCD object of 'css.properties.width.fit-content'", (subtest) => {
    const feature = MDNBrowserCompatApi.get('css.properties.width.fit-content');
    subtest.equal(feature.length, 1);
    subtest.end();
  });

  test.end();
});
