# k-convert

## Install

```sh
npm i k-converter
```

## Usage

```sh
const kconvert = require("k-converter");
//or
import kconvert from 'k-converter';
```

And with this capability, you're able to seamlessly translate float numbers into the K-metric, enhancing clarity and precision.

```javascript
kconvert.convertTo(100500);
//'10.5k'
```

Additionally, it empowers you to effortlessly convert strings using the K-metric into float numbers, streamlining data interpretation and analysis.

```javascript
kconvert.convertFrom("50.2k");
//50200
```