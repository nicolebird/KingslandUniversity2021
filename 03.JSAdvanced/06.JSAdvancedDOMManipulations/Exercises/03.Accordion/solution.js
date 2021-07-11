function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let divElement = document.getElementById('extra');
  
    if (buttonElement === null || divElement === null) {
      throw new Error('Something went wrong...');
    }
  
    const actions = {
      'More': 'Less',
      'Less': 'More',
      '': 'block',
      'none': 'block',
      'block': 'none',
    };
  
    buttonElement.innerHTML = actions[buttonElement.innerHTML];
    divElement.style.display = actions[divElement.style.display];
}