function kangaroo(x1, v1, x2, v2) {
  let message = "NO";
  for (let i = 0; i < 10000; i++) {
    if (x1 + v1 * i === x2 + v2 * i) {
      message = "YES";
      return message;
    }
  }
  return message;
}