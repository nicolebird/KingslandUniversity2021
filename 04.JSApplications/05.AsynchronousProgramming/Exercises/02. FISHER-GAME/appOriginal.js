function attachEvents() {

    let anglerInput = document.getElementById("anglerVal");
    let weightInput = document.getElementById("weightVal");
    let speciesInput = document.getElementById("speciesVal");
    let locationInput = document.getElementById("locationVal");
    let baitInput = document.getElementById("baitVal");
    let captureTimeInput = document.getElementById("captureTimeVal");
    let catchesDIV = document.getElementById("catches");

    const url = "https://fisher-game.firebaseio.com/catches/.json";

    let addBtn = document.getElementsByClassName("add")[0];
    addBtn.addEventListener("click", () => {
        let angler = anglerInput.value;
        let weight = weightInput.value;
        let species = speciesInput.value;
        let location = locationInput.value;
        let bait = baitInput.value;
        let captureTime = captureTimeInput.value;
        let newCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };


        fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCatch)
        });
    });


    let loadBtn = document.getElementsByClassName("load")[0];
    loadBtn.addEventListener("click", () => {
        loadCatches();
    });

    async function loadCatches() {
        catchesDIV.innerHTML = "";
        fetch(url)
            .then(result => result.json())
            .then(data => {
                let dataArr = Object.entries(data);
                dataArr.forEach(c => {

                    //create div for the catch
                    let newDIV = document.createElement("div");
                    newDIV.setAttribute("id", `${c[0]}`);
                    newDIV.className = "catch";

                    //angler - string representing the name of the person who caught the fish.  
                    let anglerLabel = document.createElement("label"); //declare 
                    anglerLabel.textContent = "Angler";
                    newDIV.appendChild(anglerLabel);
                    let anglerInput = document.createElement("input"); //declare
                    anglerInput.value = `${c[1].angler}`;
                    anglerInput.className = "input";
                    newDIV.appendChild(anglerInput);
                    newDIV.appendChild(document.createElement("hr"));

                    //  weight - floating-point number representing the weight of the fish in kilograms
                    let weightLabel = document.createElement("label");
                    weightLabel.textContent = "Weight";
                    newDIV.appendChild(weightLabel);
                    let weightInput = document.createElement("input");
                    weightInput.value = `${c[1].weight}`;
                    weightInput.className = "input";
                    weightInput.setAttribute("type", "number");
                    newDIV.appendChild(weightInput);
                    newDIV.appendChild(document.createElement("hr"));

                    //species - string representing the name of the fish species
                    let speciesLabel = document.createElement("label");
                    speciesLabel.textContent = "Species";
                    newDIV.appendChild(speciesLabel);
                    let speciesInput = document.createElement("input");
                    speciesInput.value = `${c[1].species}`;
                    speciesInput.className = "input";
                    newDIV.appendChild(speciesInput);
                    newDIV.appendChild(document.createElement("hr"));

                    //location -string representing the location where the fish was caught
                    let locationLabel = document.createElement("label");
                    locationLabel.textContent = "Location";
                    newDIV.appendChild(locationLabel);
                    let locationInput = document.createElement("input");
                    locationInput.value = `${c[1].location}`;
                    locationInput.className = "input";
                    newDIV.appendChild(locationInput);
                    newDIV.appendChild(document.createElement("hr"));

                    //bait - string representing the bait used to catch the fish
                    let baitLabel = document.createElement("label");
                    baitLabel.textContent = "Bait";
                    newDIV.appendChild(baitLabel);
                    let baitInput = document.createElement("input");
                    baitInput.value = `${c[1].bait}`;
                    baitInput.className = "input";
                    newDIV.appendChild(baitInput);
                    newDIV.appendChild(document.createElement("hr"));

                    //capture time - integer number representing the time needed to catch the fish in minutes
                    let captureLabel = document.createElement("label");
                    captureLabel.textContent = "Capture time";
                    newDIV.appendChild(captureLabel);
                    let captureInput = document.createElement("input");
                    captureInput.value = `${c[1].captureTime}`;
                    captureInput.className = "input";
                    captureInput.setAttribute("type", "number");
                    newDIV.appendChild(captureInput);
                    newDIV.appendChild(document.createElement("hr"));
                    

                    //update - attach update handler
                    let updateBtn = document.createElement("button");
                    updateBtn.className = "button";
                    updateBtn.textContent = "UPDATE";
                    updateBtn.addEventListener("click",() => {
                        upd(newDIV.id);
                    });
                    newDIV.appendChild(updateBtn);

                    //delete - attach update handler
                    let deleteBtn = document.createElement("button");
                    deleteBtn.className = "button";
                    deleteBtn.textContent = "DELETE";
                    deleteBtn.addEventListener("click", () => {
                        del(newDIV.id);
                    });
                    newDIV.appendChild(deleteBtn);
                    //append the new div
                    catchesDIV.appendChild(newDIV);
                });
            });
    }


    async function del(id) {
        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
                method: 'DELETE'
            })
            .then(() => {
                let divToDelete = document.getElementById(id);
                divToDelete.remove();
            })
            .catch(err => {
                console.error(err);
            });
    }
}

async function upd(id) {
    let inputs = document.getElementById(id).getElementsByTagName('input');
    let newContent = {
        angler: inputs[0].value,
        weight: inputs[1].value,
        species: inputs[2].value,
        location: inputs[3].value,
        bait: inputs[4].value,
        captureTime: inputs[5].value
    };

    fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newContent)
        })
        .then(() =>
            console.log("figure this out"))
        .catch(err=>
            console.log(err));
}

attachEvents();

//GET link: https://fisher-game.firebaseio.com/-Mctc2CNQK2-UCXJ9r-z.json

