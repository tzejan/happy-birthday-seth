function caesarCipher(string, shiftAmount) {
  shiftAmount %= 26;
  return string
    .split("")
    .map(letter => {
      if (
        (letter >= "a" && letter <= "z") ||
        (letter >= "A" && letter <= "Z")
      ) {
        let baseIndex = letter >= "a" ? 97 : 65;

        let newLetterIndex = letter.charCodeAt(0) - baseIndex + shiftAmount;
        return String.fromCharCode(baseIndex + (newLetterIndex + 26) % 26);
      } else {
        return letter;
      }
    })
    .join("");
  // lookup table could be faster?
}

var encrypt = function(string, shiftAmount) {
  // YOUR SOLUTION HERE
  return caesarCipher(string, shiftAmount);
};

var decrypt = function(string, shiftAmount) {
  // YOUR SOLUTION HERE
  return caesarCipher(string, -shiftAmount);
};

// DO NOT TOUCH THIS PART OF THE CODE!
if (
  process.argv[2] ===
  "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx"
) {
  console.log(decrypt(process.argv[2], 19));
}
module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};
