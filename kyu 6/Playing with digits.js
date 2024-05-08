function digPow(n, p) {
  let result = 0;
  let k;
  let strN = n.toString();

  for (let i = 0; i < strN.length; i++) {
    result += strN[i] ** (p + i);
  }
  k = result / n;

  if ((k ^ 0) === k) {
    return k;
  } else {
    return -1;
  }
}
