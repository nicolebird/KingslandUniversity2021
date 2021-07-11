function main() {
    let inputString = document.getElementById("string").value;
    let cutInput = inputString.split(" , ");
 
    let informationText = cutInput[0];
    let informationToPrint = cutInput[1];
 
    console.log(informationText);
    console.log(informationToPrint);
 
    let passengerName = /\s([A-Z]+[a-z]*\-[A-Z]+[a-z]*|[A-Z]+[a-z]*\-[A-Z]+[a-z]*\.\-[A-Z]+[a-z]*)\s/;
    let matcherPassengerName = informationText.match(passengerName)[0];
    name = matcherPassengerName.replace(new RegExp(/\-/, "g"), " ").trim();
    console.log(name);
 
    let airport = /\s([A-Z]{3}\/[A-Z]{3})\s/g;
    let matcherAirport = informationText.match(airport)[0];
    matcherAirport = matcherAirport.trim().split("/");
    let fromAirport = matcherAirport[0];
    let toAirport = matcherAirport[1];
    console.log(fromAirport);
    console.log(toAirport);
 
    let flightNumber = /\s([A-Z]{1,3}[0-9]{1,5})\s/g;
    let matcherFlightNumber = informationText.match(flightNumber)[0];
    number = matcherFlightNumber.trim();
    console.log(number);
 
    let company = /\-\s([A-Z][a-z]*\*[A-Z][a-z]*)\s/g;
    let matcherCompany = informationText.match(company)[0];
    airCompany = matcherCompany.replace(new RegExp(/\-/, "g"), " ").trim().split("*").join(" ");
    console.log(airCompany);
 
    let result = document.getElementById("result");
    let output = "";
    switch (informationToPrint) {
        case "name":
            output = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case "flight":
            output = `Your flight number ${number} is from ${fromAirport} to ${toAirport}.`;
            break;
        case "company":
            output = `Have a nice flight with ${airCompany}.`;
            break;
        case "all":
            output = `Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${airCompany}.`;
            break;
    }
    result.textContent = output;
}