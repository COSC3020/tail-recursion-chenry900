function fib(n) {
  if (n == 0)
    return [0];
  if (n == 1)
    return [0,1];

  return tailRecursive(2, 0, 1, [0, 1], n);
  //var array = fib(n-1);
  //array.push(array[array.length - 2]+array[array.length - 1]);
  //return array;
}

function tailRecursive(iter, two, one, current, n) {
  if (iter > n) {
    return current;
  }
  return tailRecursive((iter + 1), one, (two + one), current.concat(two + one));
}
