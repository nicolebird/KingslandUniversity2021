let add = (function () {
  let sum = 0;

  function main(num) {
      sum += num;
      return main;
  }
  
  main.toString = () => sum.toString();

  return main;
})();

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());