const fs = require('fs');
const path = require('path');
const BCD = require('@mdn/browser-compat-data');
const bcdPath = path.dirname(require.resolve('@mdn/browser-compat-data'));

const Generate = (() => {
  const outputDir = path.resolve(__dirname, '../data');

  const baseDir = [
    'api',
    'browsers',
    'css',
    'html',
    'http',
    'javascript',
    'mathml',
    'svg',
    'webdriver',
    'webextensions',
    'xpath',
    'xslt',
  ];

  const getDirectories = (dir) => {
    const result = [];

    const cptDir = path.resolve(bcdPath, dir);
    fs.readdirSync(cptDir).map((filename) => {
      const filepath = path.join(cptDir, filename);

      if (fs.statSync(filepath).isDirectory()) {
        result.push(dir.replace('/', '.') + '.' + filename);
        result.push(...getDirectories(dir + '/' + filename));
      }
    });

    return result;
  };

  const generateWhitelist = () => {
    const res = [];

    res.push(...baseDir);
    baseDir.map((dir) => res.push(...getDirectories(dir)));

    return res.sort();
  };

  const getWhitelist = () => {
    return fs.readFileSync(path.resolve(outputDir, 'whitelist.json'));
  };

  const generateFeatureList = (folder = '', obj = BCD, path = '') => {
    path ? '' : (path = folder);
    let features = [];

    const WHITELIST = getWhitelist();

    const keyList = Object.keys(folder ? obj[folder] : obj);
    keyList.map((key) => {
      const baseObj = folder ? obj[folder][key] : obj[key];
      const cptPath = path ? path + '.' + key : key;

      if (key === '__compat') {
        features.push(path);
      } else if (WHITELIST.includes(cptPath) || baseObj.__compat) {
        features.push(...generateFeatureList(key, obj[folder], cptPath));
      }
    });

    return features;
  };

  const generateToFile = () => {
    const whitelist = JSON.stringify(generateWhitelist());

    fs.existsSync(outputDir) ? '' : fs.mkdirSync(outputDir);

    fs.writeFileSync(path.resolve(outputDir, 'whitelist.json'), whitelist);

    const features = JSON.stringify(generateFeatureList());

    fs.writeFileSync(path.resolve(outputDir, 'features.json'), features);
  };

  return {
    generateWhitelist,
    generateToFile,
    generateFeatureList,
  };
})();

/* istanbul ignore next */
process.argv[2] === '--generate' ? Generate.generateToFile() : '';

module.exports = Generate;
