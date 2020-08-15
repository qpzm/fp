// Naive factorial
function fact_naive(n) {
  if(n == 0)
    return 1;
  else
    return n * fact_naive(n - 1);
}
console.log(fact_naive(3));

function fact(n, ret) {
  if(n == 0)
    ret(1);
  else
    fact(n - 1, x => ret(n * x));
}

fact(3, (x) => { console.log(x) });
