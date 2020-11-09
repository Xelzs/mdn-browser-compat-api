const Generate = require('../src/generate');
const tap = require('tap');
const fs = require('fs');
const path = require('path');

tap.test('generate', (test) => {
  test.test('with the data folder', (subtest) => {
    const outputDir = path.resolve(__dirname, '../data');

    Generate.generateToFile();

    if (
      fs.existsSync(path.resolve(outputDir, 'whitelist.json')) &&
      fs.existsSync(path.resolve(outputDir, 'features.json'))
    ) {
      subtest.pass();
    } else {
      subtest.fail();
    }

    subtest.end();
  });

  test.test('without the data folder', (subtest) => {
    const outputDir = path.resolve(__dirname, '../data');

    if (fs.existsSync(outputDir)) {
      fs.rmdirSync(outputDir, { recursive: true });
    }

    Generate.generateToFile();

    if (
      fs.existsSync(path.resolve(outputDir, 'whitelist.json')) &&
      fs.existsSync(path.resolve(outputDir, 'features.json'))
    ) {
      subtest.pass();
    } else {
      subtest.fail();
    }

    subtest.end();
  });

  test.end();
});
