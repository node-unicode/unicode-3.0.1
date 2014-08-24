# Unicode v3.0.1 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v3.0.1’s categories, scripts, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](http://mths.be/node-unicode-data) project. Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).

## Installation

```bash
npm install unicode-3.0.1 --save
```

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](http://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
var regenerate = require('regenerate');
var set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// var regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
var codePoints = require('unicode-3.0.1/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
var symbols = require('unicode-3.0.1/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
var regex = require('unicode-3.0.1/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
var category = require('unicode-3.0.1/categories')[ 0x41 ];
// Get an array of all code points with the `Bidi_ON` bidi property:
var on = require('unicode-3.0.1/bidi/ON/code-points');
// Get the directionality of a given code point:
var directionality = require('unicode-3.0.1/bidi')[ 0x41 ];

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, and scripts is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.0.1:

```js
// properties:

require('unicode-3.0.1/properties/Any/code-points');
require('unicode-3.0.1/properties/Any/symbols');
require('unicode-3.0.1/properties/Any/regex');

require('unicode-3.0.1/properties/Assigned/code-points');
require('unicode-3.0.1/properties/Assigned/symbols');
require('unicode-3.0.1/properties/Assigned/regex');

require('unicode-3.0.1/properties/ASCII/code-points');
require('unicode-3.0.1/properties/ASCII/symbols');
require('unicode-3.0.1/properties/ASCII/regex');

// categories:

require('unicode-3.0.1/categories')[ codePoint ]; // lookup array

require('unicode-3.0.1/categories/Cc/code-points');
require('unicode-3.0.1/categories/Cc/symbols');
require('unicode-3.0.1/categories/Cc/regex');

require('unicode-3.0.1/categories/C/code-points');
require('unicode-3.0.1/categories/C/symbols');
require('unicode-3.0.1/categories/C/regex');

require('unicode-3.0.1/categories/Zs/code-points');
require('unicode-3.0.1/categories/Zs/symbols');
require('unicode-3.0.1/categories/Zs/regex');

require('unicode-3.0.1/categories/Z/code-points');
require('unicode-3.0.1/categories/Z/symbols');
require('unicode-3.0.1/categories/Z/regex');

require('unicode-3.0.1/categories/Po/code-points');
require('unicode-3.0.1/categories/Po/symbols');
require('unicode-3.0.1/categories/Po/regex');

require('unicode-3.0.1/categories/P/code-points');
require('unicode-3.0.1/categories/P/symbols');
require('unicode-3.0.1/categories/P/regex');

require('unicode-3.0.1/categories/Sc/code-points');
require('unicode-3.0.1/categories/Sc/symbols');
require('unicode-3.0.1/categories/Sc/regex');

require('unicode-3.0.1/categories/S/code-points');
require('unicode-3.0.1/categories/S/symbols');
require('unicode-3.0.1/categories/S/regex');

require('unicode-3.0.1/categories/Ps/code-points');
require('unicode-3.0.1/categories/Ps/symbols');
require('unicode-3.0.1/categories/Ps/regex');

require('unicode-3.0.1/categories/Pe/code-points');
require('unicode-3.0.1/categories/Pe/symbols');
require('unicode-3.0.1/categories/Pe/regex');

require('unicode-3.0.1/categories/Sm/code-points');
require('unicode-3.0.1/categories/Sm/symbols');
require('unicode-3.0.1/categories/Sm/regex');

require('unicode-3.0.1/categories/Pd/code-points');
require('unicode-3.0.1/categories/Pd/symbols');
require('unicode-3.0.1/categories/Pd/regex');

require('unicode-3.0.1/categories/Nd/code-points');
require('unicode-3.0.1/categories/Nd/symbols');
require('unicode-3.0.1/categories/Nd/regex');

require('unicode-3.0.1/categories/N/code-points');
require('unicode-3.0.1/categories/N/symbols');
require('unicode-3.0.1/categories/N/regex');

require('unicode-3.0.1/categories/Lu/code-points');
require('unicode-3.0.1/categories/Lu/symbols');
require('unicode-3.0.1/categories/Lu/regex');

require('unicode-3.0.1/categories/L/code-points');
require('unicode-3.0.1/categories/L/symbols');
require('unicode-3.0.1/categories/L/regex');

require('unicode-3.0.1/categories/LC/code-points');
require('unicode-3.0.1/categories/LC/symbols');
require('unicode-3.0.1/categories/LC/regex');

require('unicode-3.0.1/categories/Sk/code-points');
require('unicode-3.0.1/categories/Sk/symbols');
require('unicode-3.0.1/categories/Sk/regex');

require('unicode-3.0.1/categories/Pc/code-points');
require('unicode-3.0.1/categories/Pc/symbols');
require('unicode-3.0.1/categories/Pc/regex');

require('unicode-3.0.1/categories/Ll/code-points');
require('unicode-3.0.1/categories/Ll/symbols');
require('unicode-3.0.1/categories/Ll/regex');

require('unicode-3.0.1/categories/So/code-points');
require('unicode-3.0.1/categories/So/symbols');
require('unicode-3.0.1/categories/So/regex');

require('unicode-3.0.1/categories/Pi/code-points');
require('unicode-3.0.1/categories/Pi/symbols');
require('unicode-3.0.1/categories/Pi/regex');

require('unicode-3.0.1/categories/No/code-points');
require('unicode-3.0.1/categories/No/symbols');
require('unicode-3.0.1/categories/No/regex');

require('unicode-3.0.1/categories/Pf/code-points');
require('unicode-3.0.1/categories/Pf/symbols');
require('unicode-3.0.1/categories/Pf/regex');

require('unicode-3.0.1/categories/Lo/code-points');
require('unicode-3.0.1/categories/Lo/symbols');
require('unicode-3.0.1/categories/Lo/regex');

require('unicode-3.0.1/categories/Lt/code-points');
require('unicode-3.0.1/categories/Lt/symbols');
require('unicode-3.0.1/categories/Lt/regex');

require('unicode-3.0.1/categories/Cn/code-points');
require('unicode-3.0.1/categories/Cn/symbols');
require('unicode-3.0.1/categories/Cn/regex');

require('unicode-3.0.1/categories/Lm/code-points');
require('unicode-3.0.1/categories/Lm/symbols');
require('unicode-3.0.1/categories/Lm/regex');

require('unicode-3.0.1/categories/Mn/code-points');
require('unicode-3.0.1/categories/Mn/symbols');
require('unicode-3.0.1/categories/Mn/regex');

require('unicode-3.0.1/categories/M/code-points');
require('unicode-3.0.1/categories/M/symbols');
require('unicode-3.0.1/categories/M/regex');

require('unicode-3.0.1/categories/Me/code-points');
require('unicode-3.0.1/categories/Me/symbols');
require('unicode-3.0.1/categories/Me/regex');

require('unicode-3.0.1/categories/Cf/code-points');
require('unicode-3.0.1/categories/Cf/symbols');
require('unicode-3.0.1/categories/Cf/regex');

require('unicode-3.0.1/categories/Mc/code-points');
require('unicode-3.0.1/categories/Mc/symbols');
require('unicode-3.0.1/categories/Mc/regex');

require('unicode-3.0.1/categories/Zl/code-points');
require('unicode-3.0.1/categories/Zl/symbols');
require('unicode-3.0.1/categories/Zl/regex');

require('unicode-3.0.1/categories/Zp/code-points');
require('unicode-3.0.1/categories/Zp/symbols');
require('unicode-3.0.1/categories/Zp/regex');

require('unicode-3.0.1/categories/Nl/code-points');
require('unicode-3.0.1/categories/Nl/symbols');
require('unicode-3.0.1/categories/Nl/regex');

require('unicode-3.0.1/categories/Cs/code-points');
require('unicode-3.0.1/categories/Cs/symbols');
require('unicode-3.0.1/categories/Cs/regex');

require('unicode-3.0.1/categories/Co/code-points');
require('unicode-3.0.1/categories/Co/symbols');
require('unicode-3.0.1/categories/Co/regex');

// bidi:

require('unicode-3.0.1/bidi')[ codePoint ]; // lookup array

require('unicode-3.0.1/bidi/BN/code-points');
require('unicode-3.0.1/bidi/BN/symbols');
require('unicode-3.0.1/bidi/BN/regex');

require('unicode-3.0.1/bidi/S/code-points');
require('unicode-3.0.1/bidi/S/symbols');
require('unicode-3.0.1/bidi/S/regex');

require('unicode-3.0.1/bidi/B/code-points');
require('unicode-3.0.1/bidi/B/symbols');
require('unicode-3.0.1/bidi/B/regex');

require('unicode-3.0.1/bidi/WS/code-points');
require('unicode-3.0.1/bidi/WS/symbols');
require('unicode-3.0.1/bidi/WS/regex');

require('unicode-3.0.1/bidi/ON/code-points');
require('unicode-3.0.1/bidi/ON/symbols');
require('unicode-3.0.1/bidi/ON/regex');

require('unicode-3.0.1/bidi/ET/code-points');
require('unicode-3.0.1/bidi/ET/symbols');
require('unicode-3.0.1/bidi/ET/regex');

require('unicode-3.0.1/bidi/CS/code-points');
require('unicode-3.0.1/bidi/CS/symbols');
require('unicode-3.0.1/bidi/CS/regex');

require('unicode-3.0.1/bidi/ES/code-points');
require('unicode-3.0.1/bidi/ES/symbols');
require('unicode-3.0.1/bidi/ES/regex');

require('unicode-3.0.1/bidi/EN/code-points');
require('unicode-3.0.1/bidi/EN/symbols');
require('unicode-3.0.1/bidi/EN/regex');

require('unicode-3.0.1/bidi/L/code-points');
require('unicode-3.0.1/bidi/L/symbols');
require('unicode-3.0.1/bidi/L/regex');

require('unicode-3.0.1/bidi/NSM/code-points');
require('unicode-3.0.1/bidi/NSM/symbols');
require('unicode-3.0.1/bidi/NSM/regex');

require('unicode-3.0.1/bidi/R/code-points');
require('unicode-3.0.1/bidi/R/symbols');
require('unicode-3.0.1/bidi/R/regex');

require('unicode-3.0.1/bidi/AL/code-points');
require('unicode-3.0.1/bidi/AL/symbols');
require('unicode-3.0.1/bidi/AL/regex');

require('unicode-3.0.1/bidi/AN/code-points');
require('unicode-3.0.1/bidi/AN/symbols');
require('unicode-3.0.1/bidi/AN/regex');

require('unicode-3.0.1/bidi/LRE/code-points');
require('unicode-3.0.1/bidi/LRE/symbols');
require('unicode-3.0.1/bidi/LRE/regex');

require('unicode-3.0.1/bidi/RLE/code-points');
require('unicode-3.0.1/bidi/RLE/symbols');
require('unicode-3.0.1/bidi/RLE/regex');

require('unicode-3.0.1/bidi/PDF/code-points');
require('unicode-3.0.1/bidi/PDF/symbols');
require('unicode-3.0.1/bidi/PDF/regex');

require('unicode-3.0.1/bidi/LRO/code-points');
require('unicode-3.0.1/bidi/LRO/symbols');
require('unicode-3.0.1/bidi/LRO/regex');

require('unicode-3.0.1/bidi/RLO/code-points');
require('unicode-3.0.1/bidi/RLO/symbols');
require('unicode-3.0.1/bidi/RLO/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](http://mths.be/mit) license.
