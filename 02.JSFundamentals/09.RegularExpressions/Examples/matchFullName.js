function main(names) {

    let regexReqs = /\b[A-Z][a-z]+[A-Z][a-z]+\b/g; 
    //Regex101 is a HUGE help with figuring out this gibberish
    let validNames = []; //.push valid names into array
    
    while ((validNames = regexReqs.exec(names)) !== null) {

        validNames.push(validNames[0]);
    }
    console.log(validNames.join().replace(/,/g," "));
}
main('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov');