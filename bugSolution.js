function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Or throw an error: throw new Error('Both inputs cannot be zero');
  } else if (a === 0 || b === 0) {
    return 0;
  } else {
    return a / b;
  }
}