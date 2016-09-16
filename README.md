# weifund-util

[![NPM version](http://img.shields.io/npm/v/weifund-util.svg)](https://www.npmjs.org/package/weifund-util) [![Build status](https://ci.appveyor.com/api/projects/status/wwajr0886e00g8je/branch/master?svg=true)](https://ci.appveyor.com/project/weifund/weifund-util/branch/master) [![Coverage Status](https://coveralls.io/repos/github/weifund/weifund-util/badge.svg?branch=master)](https://coveralls.io/github/weifund/weifund-util?branch=master) [![NPM Downloads](https://img.shields.io/npm/dm/weifund-util.svg)](https://www.npmjs.org/package/weifund-util)

A utility methods for the WeiFund client and library. Note, still in heavy development.

## Install

```
npm install --save weifund-util
```

## About

WeiFund uses a small set of methods to handle its campaign and registry data. There are many small utility methods that are needed to make these methods function. This library contains those methods.

## Usage

```
const utils = require('weifund-util');

console.log(utils);

/* results in:
{
  isBigNumber: isBigNumber,
  etherScanAddressUrl: etherScanAddressUrl,
  etherScanTxHashUrl: etherScanTxHashUrl,
  parseCampaignRegistryData: parseCampaignRegistryData,
  buildInputsArray: buildInputsArray,
  oneDay: oneDay,
  parseSolidityMethodInterface: parseSolidityMethodInterface,
  emptyWeb3Address: emptyWeb3Address,
  parseMethodABIObject: parseMethodABIObject,
  capitalizeFirstLetter: capitalizeFirstLetter,
  filterXSSObject: filterXSSObject,
  nameContainsIDProperties: nameContainsIDProperties,
  parseSolidityMethodName: parseSolidityMethodName,
};
*/
```

## Contributing

Please help better the ecosystem by submitting issues and pull requests to weifund-util. We need all the help we can get to build the absolute best linting standards and utilities. We follow the AirBNB linting standard. Please read more about contributing to `weifund-util` in the `CONTRIBUTING.md`.

## Guides

You'll find more detailed information on using weifund-util and tailoring it to your needs in our guides:

- [User guide](docs/user-guide.md) - Usage, configuration, FAQ and complementary tools.
- [Developer guide](docs/developer-guide.md) - Contributing to weifund-util and writing your own plugins & formatters.

## Help out

There is always a lot of work to do, and will have many rules to maintain. So please help out in any way that you can:

- Create, enhance, and debug rules (see our guide to ["Working on rules"](CONTRIBUTING.md)).
- Improve documentation.
- Chime in on any open issue or pull request.
- Open new issues about your ideas for making stylelint better, and pull requests to show us how your idea works.
- Add new tests to *absolutely anything*.
- Work on [improving performance of rules](docs/developer-guide/benchmarks.md).
- Create or contribute to ecosystem tools, like the plugins for Atom and Sublime Text.
- Spread the word.

Please consult our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing](CONTRIBUTING.md) docs before helping out.

We communicate via [issues](https://github.com/weifund/weifund-util/issues) and [pull requests](https://github.com/weifund/weifund-util/pulls).

## Important documents

- [Changelog](CHANGELOG.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](https://raw.githubusercontent.com/weifund/weifund-util/master/LICENSE)

## Licence

```
All Rights Reserved. WeiFund is currently exploring the appropriate 
license structure and this will be updated when a conclusion is reached.
```
