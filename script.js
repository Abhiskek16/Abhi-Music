console.log("Welcome to Spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let Progressbar = document.getElementById('Progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Can't Tell", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Ainek", filepath: "songs/2.mp3", coverPath: "cover/1.jpg" },
    { songName: "Goat", filepath: "songs/3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Jee Karda", filepath: "songs/4.mp3", coverPath: "cover/1.jpg" },
    { songName: "Kesariya", filepath: "songs/5.mp3", coverPath: "cover/1.jpg" },
    { songName: "Levels", filepath: "songs/6.mp3", coverPath: "cover/1.jpg" },
    { songName: "+ Feel", filepath: "songs/7.mp3", coverPath: "cover/1.jpg" },
    { songName: "Bamb Aagaya", filepath: "songs/8.mp3", coverPath: "cover/1.jpg" },
    { songName: "Heartless", filepath: "songs/9.mp3", coverPath: "cover/1.jpg" },
    { songName: "Pasoori", filepath: "songs/10.mp3", coverPath: "cover/1.jpg" },
    { songName: "Pent", filepath: "songs/11.mp3", coverPath: "cover/1.jpg" },
    { songName: "Raabta", filepath: "songs/12.mp3", coverPath: "cover/1.jpg" },
    { songName: "Last Ride", filepath: "songs/13.mp3", coverPath: "cover/1.jpg" },
]
songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {


    //update sekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    Progressbar.value = progress;
})
Progressbar.addEventListener('change', () => {
    audioElement.currentTime = Progressbar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        // console.log(e.target)
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}

)
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}

)