function getInfo() {
    const inputField = document.getElementById('stopId');
    const busStop = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    if (input == null || busStop == null || buses == null) {
        throw new Error('Something went wrong...');
    }

    let url = `https://judgetests.firebaseio.com/businfo/${inputField.value}.json`;

    busStop.textContent = '';
    buses.textContent = '';

    fetch(url)
        .then(response => response.json())
        .then((data)=>{        
            busStop.textContent = data.name; 

            Object.entries(data.buses)
                .forEach(([busId, time]) => {
                    const li = document.createElement("li");
                    li.textContent = `Bus ${busId} arrives in ${time}`;
                    buses.appendChild(li);
                });
        })
        .catch((err) => busStop.textContent = 'Error');
       
        //Another way to write this out that works but to me seems to verbose.
        
        // fetch(url)
        // .then(response => response.json())
        // .then(data => {
        //   busStop.textContent = data.name;
  
        //   //this creates an innerHTML which when incorporates the li tag.  Seems a bit more complex written out compared to the uncommented out text above.  
        //   buses.innerHTML = Object.entries(data.buses).map(([bus, minutes]) => `<li>Bus ${bus} arrives in ${minutes} minutes</li>`).join('');
        // })
        // .catch(() => {
        //   buses.innerHTML = '';
        //   busStop.textContent = 'Error';
        // });
}