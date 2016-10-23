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
      limit: 10,
    }
  });
};
// console.log(getRepoData());

export {getRepoData};
