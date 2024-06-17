"use strict";
// Exercise 40
// Define the make album function
function make_Album(artist_name, title_album, tracks) {
    let album = {
        artist: artist_name,
        title: title_album
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling thre function and creating a veribles with different values 
let album1 = make_Album("Haseeb", "Album", 10);
let album2 = make_Album("Usman", "Album 2");
let album3 = make_Album("Ali", "Album 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
