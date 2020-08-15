// Tail-recursive factorial
function fact(n) {
  return tail_fact(1, n);
}

function tail_fact(acc, n) {
  if(n == 0)
    return acc;
  else
    return tail_fact(acc * n, n - 1);
}

console.log(fact(10));

function fact_cps(n, ret) {
  tail_fact_cps(1, n, ret);
}

function tail_fact_cps(acc, n, ret) {
  if(n == 0)
    ret(acc);
  else
    tail_fact_cps(acc * n, n - 1, ret);
}

fact_cps(10, console.log);
