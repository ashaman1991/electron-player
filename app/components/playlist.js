import React from 'react';
import {List, ListItem} from 'material-ui/List';
import More from 'material-ui/svg-icons/navigation/more-vert';

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    return this.props.list.map((item, index) => {
      return <ListItem key={index} primaryText={`${index+1}. ${item}`} rightIcon={<More />} />
    });
  }
  
  render() {
    return <List style={{ 'backgroundColor': 'rgb(232, 232, 232)' }}>
      { this.getItems() }
    </List>
  }
}