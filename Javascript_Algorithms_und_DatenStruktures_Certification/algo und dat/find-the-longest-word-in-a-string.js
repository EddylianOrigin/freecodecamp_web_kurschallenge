function findLongestWordLength(str) {
  let a = 0;
  let w = str.split(" ");

  for (let i = 0; i < w.length; i++) {
    if (w[i].length > a) {
      a = w[i].length;
    }
  }
  return a;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
