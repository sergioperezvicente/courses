interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 120,
  song: 'Enter Sadman',
  details: {
    author: 'Metallica',
    year: 1991,
  },
};

const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer
const { author } = details

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author)

const [ p1, p2, trunks = 'Not found']: string[] = ['Goku', 'Vegetta']

console.error('Personaje 3:', trunks)

export {};
