import Player from '@vimeo/player';
import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
