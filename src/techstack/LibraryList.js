import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount() {
    this.dataSource = this.createDataSource();
  }

  createDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (left, right) => (left !== right)
    });
    return ds.cloneWithRows(this.props.libraries);
  }

  renderRow(element) {
    return <ListItem data={element} />;
  }

  render() {
    return (<ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />);
  }

}

const mapStateToProps = (state) => ({ libraries: state.libraries });

export default connect(mapStateToProps, null)(LibraryList);
