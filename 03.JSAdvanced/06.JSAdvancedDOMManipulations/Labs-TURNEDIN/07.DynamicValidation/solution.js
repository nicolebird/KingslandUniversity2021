function validate() {

  // Dom variables 
  const input = document.getElementById('email');
  var reqex = /[a-z]+@[a-z]+\.[a-z]{1,3}/g;

  input.addEventListener('change', function(){
      if (!reqex.test(input.target.value)) {
          input.target.classList.add('error');
      } else {
          input.target.classList.remove('error');
      }
  });
}