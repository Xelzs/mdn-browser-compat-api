const BCD = require('@mdn/browser-compat-data');
const WHITELIST = require('../data/whitelist.json');
const FEATURES = require('../data/features.json');
const objectPath = require('object-path');

const Generate = require('./generate');

const MDNBrowserCompatApi = (() => {
  /* istanbul ignore next */
  const updateData = () => Generate.generateToFile();

  const getFeatures = (folder = '') => {
    if (!folder) {
      return FEATURES;
    }
    return FEATURES.filter((feature) => feature.split('.')[0] === folder);
  };

  /* istanbul ignore next */
  const getWhitelist = () => WHITELIST;

  const getBrowsers = () => BCD.browsers;

  const find = (query, folder = '') => {
    const features = getFeatures(folder);
    return features.filter((feature) => feature.includes(query));
  };

  const get = (query) => {
    const features = find(query);
    return features.reduce((acc, feature) => {
      let obj = {};
      obj[feature] = objectPath.get(BCD, feature);
      acc.push(obj);

      return acc;
    }, []);
  };

  return {
    find,
    getFeatures,
    getWhitelist,
    getBrowsers,
    get,
    updateData,
  };
})();

module.exports = MDNBrowserCompatApi;
