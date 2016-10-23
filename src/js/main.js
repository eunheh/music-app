import $ from 'jquery';

import {getRepoData} from './soundcloud';
import {listSongs, playSong} from './template';

function searchedSongs (songs) {
  var html = songs.map(listSongs);
  $(".results").html(html);
  $(".song").click(playSong);
};

function getAPIdata (event) {
  event.preventDefault();
  var searchTracks = $("#search").val();
  var result = getRepoData(searchTracks).then(searchedSongs);
  // console.log(result)
}

$("#search-button").click(getAPIdata);
