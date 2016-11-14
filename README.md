# rollup-plugin-fest

Rollup plugin to compile [fest](https://github.com/mailru/fest) templates.

## Installation

```
npm install --save-dev rollup-plugin-fest
```

## Usage

```
import { rollup } from 'rollup';
import fest from 'rollup-plugin-fest';

rollup({
    entry: 'main.js',
    plugins: [
        fest()
    ]
}).then(...)
```

## License

ISC
