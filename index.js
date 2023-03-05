const CryptoJS = require("crypto-js");
const crypto = require('crypto');
const Blake2s = require('blake2s-js');




//? 1. Polynomial hashing
function polynomialHash(s, base = 31, modulus = 1e9 + 7) {
    let n = s.length;
    let p = Array(n + 1).fill(1);
    let h = Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
      p[i] = (p[i - 1] * base) % modulus;
      h[i] = (h[i - 1] * base + s.charCodeAt(i - 1)) % modulus;
    }
    
    return h[n];
  }

  
  //? 2. Rolling Hashing 
function rollingHash(s, base = 31, modulus = 1e9 + 7) {
    let n = s.length;
    let p = Array(n + 1).fill(1);
    let h = Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
      p[i] = (p[i - 1] * base) % modulus;
      h[i] = (h[i - 1] * base + s.charCodeAt(i - 1)) % modulus;
    }
    
    let left = 0;
    let right = n - 1;
    let leftHash = h[left];
    let rightHash = (h[n] - (h[right] * p[n - right]) % modulus + modulus) % modulus;
    
    while (left < right) {
      left++;
      right--;
      leftHash = (leftHash * base + s.charCodeAt(left - 1)) % modulus;
      rightHash = (rightHash * base + s.charCodeAt(right)) % modulus;
    }
    
    return [leftHash, rightHash];
  }


  //? 3. Rabin-Karp Hashing 
  function rabinKarp(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let base = 31;
    let modulus = 1e9 + 7;
    let p = Array(m + 1).fill(1);
    let patternHash = 0;
    
    for (let i = 0; i < m; i++) {
      p[i + 1] = (p[i] * base) % modulus;
      patternHash = (patternHash * base + pattern.charCodeAt(i)) % modulus;
    }
    
    let textHash = Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
      textHash[i + 1] = (textHash[i] * base + text.charCodeAt(i)) % modulus;
    }
    
    let matches = [];
    
    for (let i = 0; i + m <= n; i++) {
      let curHash = (textHash[i + m] - (textHash[i] * p[m]) % modulus + modulus) % modulus;
      
      if (curHash === patternHash && text.slice(i, i + m) === pattern) {
        matches.push(i);
      }
    }
    
    return matches;
  }

  
  //? 4. MD5 hashing:

  function md5(str) {
    let md5hash = CryptoJS.MD5(str).toString();
    return md5hash;
  }

  //? 5. SHA-1 hashing:
  function sha1(str) {
    let sha1hash = CryptoJS.SHA1(str).toString();
    return sha1hash;
  }

  //? 6. SHA-256 hashing:
  function sha256(str) {
    let sha256hash = CryptoJS.SHA256(str).toString();
    return sha256hash;
  }


  //? 7. SHA-512 hashing:
  function sha512(str){
    const hash = crypto.createHash('sha512');
    hash.update(str);
    return hash.digest('hex');
  }



  //? 8. Blake 2

  function blake2(str, outputSize){
    const hash = new Blake2s(outputSize);
    const input = new TextEncoder().encode(str);
    hash.update(input);
    return Array.from(new Uint8Array(hash.digest())).map(b => b.toString(16).padStart(2, '0')).join('');
  }


  //? 9. Keccak
  function keccak(str, outputSize){
    const Keccak = require('sha3').Keccak;
    const hash = new Keccak(outputSize);
    const input = Buffer.from(str);
    hash.update(input);
    return hash.digest('hex');
  }








module.exports = {
    polynomialHash,
    rollingHash,
    rabinKarp,
    md5,
    sha1,
    sha256,
    sha512,
    blake2,
    keccak,
  }




  