function fact(n) {
  if(n < 0)
    throw "n < 0";
  else if(n == 0)
    return 1;
  else
    return n * fact(n-1);
}

function fact_wrapper(n) {
  try {
    return fact(n);
  } catch (ex) {
    return false;
  }
}

console.log("fact_wrapper(-1): " + fact_wrapper(-1));
console.log("fact_wrapper(10): " + fact_wrapper(10));

function fact_cps(n, ret, err) {
  if(n < 0)
    err();
  else if(n == 0)
    ret(1);
  else
    fact_cps(n - 1, x => ret(n * x), err);
}

function fact_cps_wrapper(n, ret) {
  fact_cps(n, ret, _ => ret(false));
}

fact_cps_wrapper(-1, x => console.log(`fact_wrapper(-1): ${x}`));
fact_cps_wrapper(10, x =>console.log(`fact_wrapper(10): ${x}`));
