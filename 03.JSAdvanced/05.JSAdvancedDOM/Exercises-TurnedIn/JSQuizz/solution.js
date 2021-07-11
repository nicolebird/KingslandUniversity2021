function solve() {
  //----------- GET DATA -----------
  let sections = document.getElementsByTagName('section');
  let ulResultElement = document.getElementById('results');
  let h1ResultElement = document.getElementsByTagName('h1')[1];

  if (sections.length <= 0 || ulResultElement === null || h1ResultElement === null) {
    throw new Error('Something went wrong...');
  }

  //-------- MODIFY HTML --------
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let correctAnswersCount = 0;
  
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', function(click) {
      if (correctAnswers.includes(click.target.innerText)) {
        correctAnswersCount++;
      }

      sections[i].style.display = 'none';
      if (i === sections.length - 1) {
        ulResultElement.style.display = 'block';
        correctAnswersCount === 3 ? h1ResultElement.textContent = 'You are recognized as top JavaScript fan!' :
                                    h1ResultElement.textContent = `You have ${correctAnswersCount} right answers`;
        return;
      }

      sections[i + 1].style.display = 'block';
    });
  }
}
