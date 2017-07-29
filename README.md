# Happy birthday, Seth!!!

### Task: Solve the following Caesar cipher challenge to get to your birthday surprise.

Your birthday surprise is at: "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx". Pass all the tests to find out where that is!

### Instructions

1. Clone this repository
2. Install dependencies: `npm install`
3. Run **`mocha test.js --watch`** (to terminate the tests, hit `Ctrl C`)
4. To activate the next test, change `xit(...)` to `it(...)` in `test.js` (`x` is `mocha`'s way of skipping tests')
5. Implement your solution in `solution.js`
6. When all tests have passed, run `node solution.js "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx"`
7. Get to your birthday surprise!

### What is a Caesar cipher?

Given 2 arguments (`string` and `shiftAmount`), `encrypt(string, shiftAmount)` will convert a given string into a Caesar cipher by shifting each letter in the string **"up"** by the amount as indicated by `shiftAmount`.

Similarly, `decrypt(string, shiftAmount)` will decrypt a caesar cipher into a string by shifting each letter in the encrypted string **"down"** by the amount indicated by `shiftAmount`

Both `encrypt(string, shiftAmount)` and `decrypt(string, shiftAmount)` applies **only** to upper-case and lower-case alphabets (i.e. it does not shift non-alphabetical characters such as `-`, `_`, `#`, `<space>`, `!!`, etc). The second argument to the `decrypt(string, shiftAmount)` and `encrypt(string, shiftAmount)` (i.e. `shiftAmount`) will be a positive number greater than 0.

### Examples:
- `encrypt('abc', 1)` would move each letter "up" by 1 charCode and return `bcd`.
- `encrypt('abc', 2)` would move each letter "up" by 2 charCodes and return `cde`.
- `decrypt('cde', 2)` would move each letter "down" by 2 charCodes and return `abc`.
- `encrypt("it's my birthday", 1)` would move each letter up by 1 charCode and return `ju't nz cjsuiebz`
- `decrypt("ju't nz cjsuiebz", 1)` would return `it's my birthday`

### Hint:

- The difference between `decrypt()` and `encrypt()` is just the changing of 1 mathematical operation at 2 places
- Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher
- Char codes: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- More char codes: https://www.w3schools.com/charsets/ref_html_ascii.asp
