import $ from 'jquery';
import {SC_TOKEN} from './token';

function listSongs (song) {
  var art = song.artwork_url;
  if (art === null) {
    art = "https://images.unsplash.com/photo-1449960238630-7e720e630019";
  }
  return `
    <div class="song" data-songsource="${song.stream_url}" data-formatsource="${song.original_format}"
    data-artistsource="${song.user.username}"
    data-titlesource="${song.title}">
      <img class="image" src="${art}">
      <div class="title">${song.title}</div>
      <div class="artist">${song.user.username}</div>
    </div>`;

  $(".results").append(listSongs);
};

function playSong (event) {
  // console.log(event);
  var play = `
    <audio class="controls" controls="controls" autoplay>
      <source src="${event.currentTarget.dataset.songsource}?client_id=${SC_TOKEN}" type="audio/${event.currentTarget.dataset.formatsource}">
    </audio>`;

  $(".player").html(play);

  var nowPlay = `
  <p>Now Playing: <strong>
      <span class="songArtist">${event.currentTarget.dataset.artistsource}</span> -
      <span class="songTitle">${event.currentTarget.dataset.titlesource}</span>
  </strong></p>`;

  $(".nowPlaying").html(nowPlay);
};

export {listSongs, playSong};
