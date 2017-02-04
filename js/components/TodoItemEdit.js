import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import TaskEntryForm from './TaskEntryForm';

export default class TodoItemEdit extends React.Component {
  render() {
    return (
        <ListGroupItem key={this.props.edge.node.id}>
          <TaskEntryForm value={this.props.edge.node.name} handleEdit={this.props.handleEdit}/>
        </ListGroupItem>
      );
  }
}
