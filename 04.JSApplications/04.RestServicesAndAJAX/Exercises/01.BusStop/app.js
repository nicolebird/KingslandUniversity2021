//Double check against PDF
// function getInfo() {
//     let input = document.getElementById('stopId');
//     let busStop = document.getElementById('stopName');
//     let buses = document.getElementById('buses');
  
//     if (input == null || busStop == null || buses == null) {
//       throw new Error('Something went wrong...');
//     }
  
//     let uri = `https://judgetests.firebaseio.com/businfo/${input.value}.json`;
  
//     fetch(uri)
//       .then(response => response.json())
//       .then(data => {
//         busStop.textContent = data.name;

//         //this creates an innerHTML which when incorporates the li tag.  Seems a bit more complex written out compared to the uncommented out text above.  
//         buses.innerHTML = Object.entries(data.buses).map(([bus, minutes]) => `<li>Bus ${bus} arrives in ${minutes} minutes</li>`).join('');
//       })
//       .catch(() => {
//         buses.innerHTML = '';
//         busStop.textContent = 'Error';
//       });
// }


//-----------------------Another way
const inputElements = {
  stopID: document.querySelector("#stopId"),
  submitBtn: document.querySelector("#submit"),
};

const queryResultElements = {
  stopName: document.querySelector("#stopName"),
  buses: document.querySelector("#buses"),
};

function handleErrors(data) {
  if (data.buses === undefined) {
      throw new Error();
  }

  return data;
}

function displaySchedules(busStop) {
  queryResultElements.stopName.textContent = busStop.name;
  queryResultElements.buses.innerHTML = "";

  for (const bus in busStop.buses) {
      let busElement = document.createElement("li");
      busElement.textContent = `Bus ${bus} arrives in ${busStop.buses[bus]}`;

      queryResultElements.buses.appendChild(busElement);
  }

  return busStop;
}

function catchInvalidID(error) {
  queryResultElements.stopName.textContent = "Error";
  queryResultElements.buses.innerHTML = "";
}

function getInfo() {
  const stopId = inputElements.stopID.value;
  let fetchURL = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

  fetch(fetchURL)
      .then(response => response.json())
      .then(handleErrors)
      .then(displaySchedules)
      .catch(catchInvalidID);
}

// ---------------- Another way

// const inputElements = {
//   stopID: document.querySelector("#stopId"),
//   submitBtn: document.querySelector("#submit"),
// };

// const queryResultElements = {
//   stopName: document.querySelector("#stopName"),
//   buses: document.querySelector("#buses"),
// };

// function handleErrors(data) {
//   if (data.buses === undefined) {
//       throw new Error();
//   }

//   return data;
// }

// function displaySchedules(busStop) {
//   queryResultElements.stopName.textContent = busStop.name;
//   queryResultElements.buses.innerHTML = "";

//   for (const bus in busStop.buses) {
//       let busElement = document.createElement("li");
//       busElement.textContent = `Bus ${bus} arrives in ${busStop.buses[bus]}`;

//       queryResultElements.buses.appendChild(busElement);
//   }

//   return busStop;
// }

// function catchInvalidID(error) {
//   queryResultElements.stopName.textContent = "Error";
//   queryResultElements.buses.innerHTML = "";
// }

// function getInfo() {
//   const stopId = inputElements.stopID.value;
//   let fetchURL = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

//   fetch(fetchURL)
//       .then(response => response.json())
//       .then(handleErrors)
//       .then(displaySchedules)
//       .catch(catchInvalidID);
// }