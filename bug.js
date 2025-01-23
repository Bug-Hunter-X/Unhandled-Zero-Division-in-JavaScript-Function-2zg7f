function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause issues if a and b are both 0
  } else {
    return a / b;
  }
}