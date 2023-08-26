import events from '../pubsub/pubsub';
import sounds from './sounds.js';

const musicController = (() => {
  const backgroudMusic1 = new Audio(sounds.music1);
  const backgroudMusic2 = new Audio(sounds.music2);
  const backgroudMusic3 = new Audio(sounds.music3);
  const backgroudMusic4 = new Audio(sounds.music4);
  const menuSound = new Audio(sounds.menuSelection);
  const menuMusic = new Audio(sounds.menuMusic);
  const gameoverMusic = new Audio(sounds.gameoverMusic);
  const musics = [
    backgroudMusic1,
    backgroudMusic2,
    backgroudMusic3,
    backgroudMusic4,
  ];
  const amountMusics = musics.length;
  let currentMusic = Math.floor(Math.random() * amountMusics);
  let musicVolume = 0.4;
  let isMute = false;

  musics.forEach((music) => {
    music.volume = musicVolume;
  });

  function play() {
    if (currentMusic >= amountMusics) currentMusic = 0;
    musics[currentMusic].play();
    musics[currentMusic].addEventListener('ended', playNextMusic);
  }

  function playNextMusic() {
    currentMusic++;
    play();
  }

  function mute() {
    isMute === true ? (isMute = false) : (isMute = true);
    musics.forEach((music) => {
      isMute === true ? (music.volume = 0) : (music.volume = musicVolume);
    });
  }

  function stop() {
    currentMusic = Math.floor(Math.random() * amountMusics);
    musics.forEach((music) => {
      music.pause();
      music.currentTime = 0;
      music.removeEventListener('ended', playNextMusic);
    });
  }

  function playMenuMusic() {
    menuMusic.currentTime = 0;
    menuMusic.play();

    menuMusic.addEventListener('ended', playMenuMusic);
  }

  function stopMenuMusic() {
    menuMusic.pause();
    menuMusic.removeEventListener('ended', playMenuMusic);
  }

  function playMenuSound() {
    menuSound.currentTime = 0;
    menuSound.play();
  }

  function playGameOverMusic() {
    gameoverMusic.currentTime = 0;
    gameoverMusic.play();
  }

  function stopGameoverMusic() {
    gameoverMusic.pause();
  }

  events.on('mute', mute);
  events.on('play', play);
  events.on('stop', stop);
  events.on('menuSound', playMenuSound);
  events.on('playMenuMusic', playMenuMusic);
  events.on('stopMenuMusic', stopMenuMusic);
  events.on('gameoverMusic', playGameOverMusic);
  events.on('stopGameOverMusic', stopGameoverMusic);
})();

export default musicController;
