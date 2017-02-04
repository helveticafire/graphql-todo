import React from 'react';
import {
  ListGroupItem,
  Glyphicon
} from 'react-bootstrap';

export default class TodoItemView extends React.Component {
  render() {
    return (
        <ListGroupItem key={this.props.edge.node.id}>
          {this.props.edge.node.name} (ID: {this.props.edge.node.id})

          <Glyphicon glyph="pencil" onClick={this.props.handleEdit}/>
          <Glyphicon glyph="remove" onClick={this.props.handleDelete}/>
        </ListGroupItem>
      );
  }
}
