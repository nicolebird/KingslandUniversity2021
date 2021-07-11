// Write a function that receives a single string - the path to a file (the '\' character is escaped)

//Your task is to subtract the file name and it's extension.  (Beware of files like template.bak.pptx, as template.bak , they should be a file name, while pptx is the extension)


//start with making the main function
function main(filePath){
    extractedFile(filePath);
}

//the second function contains components from the main function
function extractedFile(filePath){

    let fileIndex = filePath.lastIndexOf("\\");
    let splittedFile = filePath.substr(fileIndex + 1, 100);
    let lastPdIndex = splittedFile.lastIndexOf(".");
    let fileName = splittedFile.substr(0, lastPdIndex);
    //declare what is needed for this code to run

    console.log(`File name: ${fileName}`);
    //Print the file name 

    let fileExtension = (splittedFile.substr(lastPdIndex + 1, 10));
    //this declares the file extension and puts it in a substring

    console.log(`File extension: ${fileExtension}`);
    //prints out the file extension on a separate line

}
main(`C:\\Internal\\training-internal\\Template.pptx`);
