//---- WITH EVENT DELEGATION (attaching only 1 event listener and using 'target' to capture elements, w/o attaching event listener to each one of them) ----
function main() {
  let cardsSection = document.getElementsByClassName('cards')[0];
  let leftSpan = document.getElementsByTagName('span')[0];
  let rightSpan = document.getElementsByTagName('span')[2];
  let historyDiv = document.getElementById('history');

  if (cardsSection === null || leftSpan === null || rightSpan === null || historyDiv === null) {
    throw new Error('Something went wrong...');
  }

  cardsSection.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'IMG') {

      if (historyDiv.childElementCount === 8) {
        return;
      }

      if (event.target.parentNode.id === 'player1Div' && leftSpan.textContent === '') {
        leftSpan.textContent = event.target.name;
        event.target.src = 'images/whiteCard.jpg';
        event.target.style.border = '0px solid transparent';
      } else if (event.target.parentNode.id === 'player2Div' && rightSpan.textContent === '') {
        rightSpan.textContent = event.target.name;
        event.target.src = 'images/whiteCard.jpg';
        event.target.style.border = '0px solid transparent';
      }

      if (leftSpan.textContent !== '' && rightSpan.textContent !== '') {
        historyDiv.textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;

        let player1Card = document.querySelector('#player1Div > img[src="images/whiteCard.jpg"][style*="border: 0px solid transparent;"]');
        let player2Card = document.querySelector('#player2Div > img[src="images/whiteCard.jpg"][style*="border: 0px solid transparent;"]');

        if (Number(leftSpan.textContent) > Number(rightSpan.textContent)) {
          player1Card.style.border = '2px solid green';
          player2Card.style.border = '2px solid red';
        } else {
          player1Card.style.border = '2px solid red';
          player2Card.style.border = '2px solid green';
        }

        leftSpan.textContent = '';
        rightSpan.textContent = '';
      } 
    }
  });
}

//leaves brackets around the final results.  will tinker with it but idk why at this point.  Come back to it later.  


// main([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
//     ]
    
//   );

  main(
    'Pesho: JD, JD, JD, JD, JD, JD',
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC');