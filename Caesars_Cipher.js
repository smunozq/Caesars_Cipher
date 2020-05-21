function rot13(str) {
  let decodeResult = "";
  let alphabetStart = "ABCDEFGHIJKLM";
  let alphabetEnd = "NOPQRSTUVWXYZ";

  str.split("").forEach(function (letterToDecode, index) {
    let alphabetStartIndex = alphabetStart.indexOf(letterToDecode);
    let alphabetEndIndex = alphabetEnd.indexOf(letterToDecode);

    if (alphabetStartIndex >= 0) {
      decodeResult += alphabetEnd[alphabetStartIndex];
    } else if (alphabetEndIndex >= 0) {
      decodeResult += alphabetStart[alphabetEndIndex];
    } else {
      decodeResult += letterToDecode;
    }
  });

  return decodeResult;
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
