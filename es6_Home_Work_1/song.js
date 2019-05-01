//song constructor
class Song {
    constructor(name, artist, year, songLength, genre, songwriters, label, producers, countyProduced) {
        this.name = name;
        this.artist = artist;
        this.year = year;
        this.songLength = songLength;
        this.genre = genre;
        this.songwriters = songwriters;
        this.label = label;
        this.producers = producers;
        this.countyProduced = countyProduced;
    }

    //some getters
    get getName() {

        return this.name;

    }

    get getArtist() {

        return this.artist;

    }

    get getSongWriters(){

        return this.songwriters;

    }
    get getGenre(){

        return this.genre;

    }
    
    //A setters
    set setYear(year) {

        this.year = year;
        return this.year;
    }

    //function
    howLong() {

        console.log("The song has a length of " + this.songLength + " minutes");

    }
    
}


//intitialize song
var IntoTheWest = new Song("Into The West", "Annie Lennox", 2003, 4.15, ["pop","new Age"], 
                            {writer1 : "Annie Lennox", writer2 : "Fran Walsh", writer3 : "Howard Shore"}, "Reprise",
                            "Howard Shore", "New Zealand");

//couldn't figue out how to make the internal values private can access them without using the getter                           

console.log(IntoTheWest.getName);
console.log(IntoTheWest.getArtist);
console.log(IntoTheWest.songwriters.writer2);
console.log(IntoTheWest.getGenre[0]);
console.log("Origonal Year = " + IntoTheWest.year);
IntoTheWest.setYear = 2010;
console.log("New Year = " + IntoTheWest.year);
IntoTheWest.howLong();
   




