const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', clickMe);

function clickMe(event) {
  console.log("The event was " , event);
  const target = event.currentTarget;
  console.log("target is ", target);
  const targetText = target.textContent;
  console.log("target is ", target.textContent);
  target.textContent = (+targetText) + 1;
}
