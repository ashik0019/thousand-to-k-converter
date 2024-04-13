# k-convert

## Install

```sh
npm i k-convert
```

## Usage

```sh
const kconvert = require("k-convert");
//or
import kconvert from 'k-convert';
```

And then, you are able to convert float numbers to the k-metric:

```javascript
kconvert.convertTo(100500);
//'10.5k'
```

Or convert strings using the k-metric to float numbers:

```javascript
kconvert.convertFrom("50.2k");
//50200
```