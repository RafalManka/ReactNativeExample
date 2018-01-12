import axios from 'axios';

class AlbumService {

  constructor(config) {
    this.config = config;
  }

  getAlbums() {
    return axios.get(this.config.urlAlbums);
  }

}

export default AlbumService;
