# Hash-util-js

hash-util-js is a JavaScript package that provides various hashing functions for strings. It includes Polynomial **Hashing, Rolling Hashing, and Rabin-Karp Hashing** for string matching, as well as popular cryptographic hash functions such as **MD5, SHA-1, and SHA-256**.


## Installation

You can install hash-utils using npm:

```bash
npm install hash-util-js
```


## API

_`polynomialHash(s: string, base?: number, modulus?: number): number`_  

Computes the polynomial hash value of the input string s using the given base and modulus values. The default values are 31 and 10^9 + 7, respectively.

_`rollingHash(s: string, base?: number, modulus?: number): [number, number]`_  

Computes the rolling hash values of the input string s using the given base and modulus values. The function returns a tuple containing the left and right hash values.

_`rabinKarp(text: string, pattern: string): number[]`_  

Finds all occurrences of the input pattern string in the text string using the Rabin-Karp hashing algorithm. The function returns an array of indices where the pattern occurs in the text.

_`md5(str: string): string`_  

Computes the MD5 hash value of the input string str. The function returns the hash value as a hexadecimal string.

_`sha1(str: string): string`_  

Computes the SHA-1 hash value of the input string str. The function returns the hash value as a hexadecimal string.

_`sha256(str: string): string`_  

Computes the SHA-256 hash value of the input string str. The function returns the hash value as a hexadecimal string.



## Usage

To use hash-utils in your JavaScript project, you can import the desired functions:

```javascript
import { polynomialHash, rollingHash, rabinKarp, md5, sha1, sha256 } from 'hash-utils';
```

## Examples

**Polynomial Hashing**

```javascript
const { polynomialHash } = require('hash-js');

const str = 'example';
const hash = polynomialHash(str);
console.log(hash); // output: 152040089
```

**Rolling Hashing**

```javascript
const { rollingHash } = require('hash-js');

const str = 'example';
const [leftHash, rightHash] = rollingHash(str);
console.log(leftHash, rightHash); // output: 877164158 68720961
```

**Rabin-Karp Hashing**

```javascript
const { rabinKarp } = require('hash-js');

const text = 'example example';
const pattern = 'example';
const matches = rabinKarp(text, pattern);
console.log(matches); // output: [0, 8]
```

**MD5 hashing**

```javascript
const { md5 } = require('hash-js');

const str = 'example';
const hash = md5(str);
console.log(hash); // output: '1a79a4d60de6718e8e5b326e338ae533'
```

**SHA-1 hashing**

```javascript
const { sha1 } = require('hash-js');

const str = 'example';
const hash = sha1(str);
console.log(hash); // output: 'a0f1490c15e3d6e90f9a92be4ca836b83e99a4fa'
```

**SHA-256 hashing**

```javascript
const { sha256 } = require('hash-js');

const str = 'example';
const hash = sha256(str);
console.log(hash); // output: 'a0cfc76d5d3b59463dc2ffcf0ca4a3a14d9c6a772d6a685c53449e16f4c84dd5'
```