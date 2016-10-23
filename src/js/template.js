import $ from 'jquery';
import {SC_TOKEN} from './token';

function listSongs (song) {
  return `
    <div class="song" data-songsource="${song.stream_url}" data-formatsource="${song.original_format}"
    data-artistsource="${song.user.username}"
    data-titlesource="${song.title}">
      <img class="image" src="${song.artwork_url}">
      <div class="title">${song.title}</div>
      <div class="artist">${song.user.username}</div>
    </div>`;

  $(".results").append(listSongs);
};

function playSong (event) {
  // console.log(event);
  var play = `
    <audio controls="controls" autoplay>
      <source src="${event.currentTarget.dataset.songsource}?client_id=${SC_TOKEN}" type="audio/${event.currentTarget.dataset.formatsource}">
    </audio>`;

  $(".controls").html(play);

  var nowPlay = `
  <p>Now Playing: <strong>
      <span class="songArtist">${event.currentTarget.dataset.artistsource}</span> - 
      <span class="songTitle">${event.currentTarget.dataset.titlesource}</span>
  </strong></p>`;

  $(".nowPlaying").html(nowPlay);
};

export {listSongs, playSong};
