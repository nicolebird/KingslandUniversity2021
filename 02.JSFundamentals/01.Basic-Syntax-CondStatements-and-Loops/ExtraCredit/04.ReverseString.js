//Write a program which reverses a string (" ") and print it on the console.

function main(string) {
    let reverse = "";
    string += "";
	// string = string + "";
    reverse = string.split("").reverse().join("");
    //this splits the string by elements, reverses said elements and then joins them to create the new output

    console.log(reverse);
}
main("Hello"); //olleH
main("Kingsland"); //dnalsgniK
main(12345); //54321




