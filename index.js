const BCD = require('@mdn/browser-compat-data');
const WHITELIST = require('./data/whitelist.json');
const FEATURES = require('./data/features.json');

const Generate = require('./generate');

const MDNBrowserCompatApi = (() => {
  const getFeatures = (folder = '') => {
    if (!folder) {
      return FEATURES;
    }
    return FEATURES.filter((feature) => feature.split('.')[0] === folder);
  };

  const getWhitelist = () => WHITELIST;

  const getBrowsers = () => BCD.browsers;

  const find = (query, folder = '') => {
    const features = getFeatures(folder);
    return features.filter((feature) => feature.includes(query));
  };

  const updateData = () => Generate.generateToFile();

  return {
    find,
    getFeatures,
    getWhitelist,
    getBrowsers,
    updateData,
  };
})();

console.log('TEST: features');
console.log(MDNBrowserCompatApi.getFeatures().length);

console.log('TEST: features css');
console.log(MDNBrowserCompatApi.getFeatures('css').length);

console.log('TEST: width');
console.log(MDNBrowserCompatApi.find('width').length);

console.log('TEST: width inside css');
console.log(MDNBrowserCompatApi.find('width', 'css').length);

console.log('TEST: fit-content');
console.log(MDNBrowserCompatApi.find('fit-content').length);

console.log('TEST: Chrome name');
console.log(MDNBrowserCompatApi.getBrowsers().chrome.name);

module.exports = MDNBrowserCompatApi;
