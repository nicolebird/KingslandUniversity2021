// Write a function that stores information about movies inside an array. 
// The movie's object info must be name, director and date. 
// You can receive several types of input:

// ● "addMovie {movie name}" – add the movie

// ● "{movie name} directedBy {director}" – check if the movie exists and then add the director

// ● "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info 
// (if the movie has no director, name or date, don’t print it) in JSON format.



function main(StringArray) {

    let movieList = [],
    //this declares that the key word movieList will be an array of something.
        itemIndex = 0,
        directorName = '';
        //The directorName will be within a string

    for (let i = 0; i < StringArray.length; i++) {

        //make 2 arrays
        let temporaryArray = StringArray[i].split(' ');
        
        if (temporaryArray.includes('addMovie')) {

            let movie = {
                name: temporaryArray[1]
            };

            //add object to to movie list 
            movieList.push(movie);
        } else if (temporaryArray.includes('directedBy')) {

            itemIndex = getIndexArray(temporaryArray[0], movieList);
            
            if (itemIndex >= 0) {

                // check for multiple directors 
                for (let i = 2; i < temporaryArray.length; i++) {
                    
                    directorName += `${temporaryArray[i]} `;
                }

            //add the director at the movie index. 
            movieList[itemIndex].director =
            directorName.trim();
            directorName = ' ';
            
            
            }
        } else if (temporaryArray.includes('onDate')) {

            itemIndex = getIndexArray(temporaryArray[0], movieList);
            
            if (itemIndex >= 0) {

                movieList[itemIndex].date = temporaryArray[2];
            }
        }
    }

    //loop through the movie list
    for (let j = 0; j < movieList.length; j++) {

        
        if (movieList[j].name != undefined && 
            movieList[j].director != undefined && 
            movieList[j].date != undefined) {

            
            console.log(JSON.stringify(movieList[j]));
        }
    }

}

function getIndexArray(searchNumber, numberArray) {

    //let index = 0;

    for (let i = 0; i < numberArray.length; i++) {

        if (searchNumber == numberArray[i].name) {
            
            return i;
        }
    }

return - 1;

}
main(['addMovie FastAndFurious','addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'FastAndFurious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'FastAndFurious directedBy Rob Cohen']);