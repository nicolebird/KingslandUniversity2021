//Write a function that processes information about a race.  On the first line you will be given list of participants separated by "," .  On the next few lines until you receieve a line "end of race" you will be given some info which will be some alphanumeric characters.  In between them you could have some extra characters which you should ignore.  For example "G!32e%o7r#32g$235@!2e".  The kerrers are the name of the person and the sum of the digits is the distance he ran.  So here we have George who ran 29km.  Store the information about the person only if the list of racers contains the name of the person.  If you recieve the same person more than once just add the distance to his old distance.  At the end print the top 3 racers ordered by distance in descending in the format:  "1st place: {first racer}   2nd place: {second racer}  3rd place: {third racer}"

//INPUT: [George, Peter, Bill, Tom, 'G4e@55or%6g6!68e!!@' `R1@!3a$y4456@`, `B5@i@#123ll`, `G@e54o$r6ge#`, `7P%et^#e5346r`, `T$o553m&6`, `end of race`]
//OUTPUT: 1st place: George  2nd place: Peter  3rd place: Tom
//COMMENT: On the 3rd input line we have Ray.  He is not on the list, so we dont count his result.  The other ones are valid.  George has a total of 55km, Peter has 25km, and Tom has 19km.  We don't print Bill because he is in 4th place.