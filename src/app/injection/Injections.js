import AirportService from '../services/AirportService';
import AlbumService from '../services/AlbumService';
import config from '../config/Config';

class Injections {

  provideAlbumService() {
    const configuration = this.provideConfig();
    return new AlbumService(configuration);
  }

  provideAirportService() {
    const configuration = this.provideConfig();
    return new AirportService(configuration);
  }

  provideConfig() {
    return config;
  }

}

const injections = new Injections();

export default injections;
