import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import injections from '../app/injection/Injections';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor() {
    super();
    this.state = { airports: [], albums: [] };
    this.airportService = injections.provideAirportService();
    this.albumService = injections.provideAlbumService();
  }

  componentWillMount() {
    this.albumService
      .getAlbums()
      // .filter((elem, index, self) => index === this.firstIndex(self, elem))
      .then((response) => {
        this.setState({ albums: response.data });
      });
  }

  firstIndex(airports, airport) {
    for (let i = 0; i < airports.length; i++) {
      if (airports[i].iata === airport.iata) {
        return i;
      }
    }
  }

  renderAlbums() {
    return this.state.albums
        .map((album) => (
          <AlbumDetail
            key={album.title}
            album={album}
          />
        ));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }

}

export default AlbumList;
