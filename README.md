# Crypto-hashing-js

crypto-hashing-js is a JavaScript package that provides various hashing functions for strings. It includes Polynomial **Hashing, Rolling Hashing, and Rabin-Karp Hashing** for string matching, as well as popular cryptographic hash functions such as **MD5, SHA-1, SHA-256, SHA-512, Keccak, and Blake2**.


## Installation

You can install crypto-hashing-js using npm:

```bash
npm install crypto-hashing-js
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

_`sha512(str: string): string`_

Computes the SHA-512 hash value of the input string str. The function returns the hash value as a hexadecimal string.

_`blake2(str: string, outputBits: number): string`_

Computes the Blake2 hash value of the input string str. The function takes an optional parameter outputBits to specify the desired output size, which defaults to 256 bits. The function returns the hash value as a hexadecimal string.

_`keccak(str: string, outputBits: number): string`_

Computes the Keccak hash value of the input string str. The function takes an optional parameter outputBits to specify the desired output size, which defaults to 256 bits. The function returns the hash value as a hexadecimal string.


## Usage

To use hash-utils in your JavaScript project, you can import the desired functions:

```javascript
import { polynomialHash, rollingHash, rabinKarp, md5, sha1, sha256, sha512, keccak, blake2 } from 'crypto-hashing-js';
```

## Examples

**Polynomial Hashing**

```javascript
const { polynomialHash } = require('crypto-hashing-js');

const str = 'example';
const hash = polynomialHash(str);
console.log(hash); // output: 152040089
```

**Rolling Hashing**

```javascript
const { rollingHash } = require('crypto-hashing-js');

const str = 'example';
const [leftHash, rightHash] = rollingHash(str);
console.log(leftHash, rightHash); // output: 877164158 68720961
```

**Rabin-Karp Hashing**

```javascript
const { rabinKarp } = require('crypto-hashing-js');

const text = 'example example';
const pattern = 'example';
const matches = rabinKarp(text, pattern);
console.log(matches); // output: [0, 8]
```

**MD5 hashing**

```javascript
const { md5 } = require('crypto-hashing-js');

const str = 'example';
const hash = md5(str);
console.log(hash); // output: '1a79a4d60de6718e8e5b326e338ae533'
```

**SHA-1 hashing**

```javascript
const { sha1 } = require('crypto-hashing-js');

const str = 'example';
const hash = sha1(str);
console.log(hash); // output: 'a0f1490c15e3d6e90f9a92be4ca836b83e99a4fa'
```

**SHA-256 hashing**

```javascript
const { sha256 } = require('crypto-hashing-js');

const str = 'example';
const hash = sha256(str);
console.log(hash); // output: 'a0cfc76d5d3b59463dc2ffcf0ca4a3a14d9c6a772d6a685c53449e16f4c84dd5'
```

**SHA-512 hashing**

```javascript
const { sha512 } = require('crypto-hashing-js');

const str = 'example';
const hash = sha512(str);
console.log(hash); // output: 'abd536...'
```

**blake2 hashing**

```javascript
const { blake2 } = require('crypto-hashing-js');

const str = 'example';
const hash = blake2(str, 32);
console.log(hash); // output: 'e9b064...'
```

**keccak hashing**

```javascript
const { keccak } = require('crypto-hashing-js');

const str = 'example';
const hash = keccak(str, 256);
console.log(hash); // output: '2076e37...'
```

