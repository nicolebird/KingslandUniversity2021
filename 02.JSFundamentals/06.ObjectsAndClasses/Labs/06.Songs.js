class Song {

    constructor(type, name, time) {

        this.type = type;
        this.name = name;
        this.time = time;

    }

} 
function main(infoArray){

    let songList = [];
    let numberOfSongs = infoArray.shift();
    let lookUpType = infoArray.pop();



    for (let i = 0; i < numberOfSongs; i++) { 
    //iterating through input array

        let [songType, songName, songTime] = infoArray[i].split('_');
        //let currentSongInformation = infoArray[i].split('_');
        let songObjects = new Song(songType, songName, songTime);
        songList.push(songObjects);

    }

    //print out songs only of the given type (type == lookUpType)
    let filterSongList = songList.filter(function(songObjects){
        return songObjects.type == lookUpType || lookUpType == 'all';
    });
    
    for(let song of filterSongList){
        console.log(song.name);
    }

}
main([3,'favourite_DownTown_3:14','favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);

// Define a class Song, which holds the following information about songs: typeList, name and time.

// You will receive the input as an array.

// The first element n will be the number of songs. Next n elements will be the songs data in the following format:

// "{typeList}_{name}_{time}", and the last element will be Type List / "all".

// Print only the names of the songs which are from that Type List / All songs.
