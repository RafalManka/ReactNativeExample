import axios from 'axios';

class AirportService {

  constructor(config) {
    this.config = config;
  }

  getAirports() {
    return axios.get(this.config.urlAirports);
  }

}

export default AirportService;
