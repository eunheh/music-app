import $ from 'jquery';

import {SC_TOKEN} from './token';

$.ajaxSetup({
  data: {
    client_id: SC_TOKEN
  }
});

function getRepoData (searchTracks) {
  return $.ajax({
    url: "https://api.soundcloud.com/tracks",
    cached: false,
    data: {
      q:`${searchTracks}`,
    }
  });
};
console.log(getRepoData());

function getAPIdata (event) {
  event.preventDefault();
  var searchTracks = $("#search").val();
  var result = getRepoData(searchTracks).then(getSongs);
  // console.log(result)
}
$("#search-button").click(getAPIdata);

function getSongs (songs) {
  for (var i = 0; i < songs.length; i++) {
  var song = songs[i];
  var songsHTML = `
    <div class="song" data-songsource="${song.stream_url}" data-formatsource="${song.original_format}">
      <img class="image" src="${song.artwork_url}">
      <div class="title">${song.title}</div>
      <div class="artist">${song.user.username}</div>
    </div>`;

  $(".results").html(songsHTML);
  };

$(".song").click(playSong);
};

function playSong (event) {
  console.log(event);
  var play = `
  <audio controls="controls" autoplay>
    <source src="${event.currentTarget.dataset.songsource}?client_id=${SC_TOKEN}" type="audio/${event.currentTarget.dataset.formatsource}">
  </audio>`;

  $(".controls").html(play);
}
