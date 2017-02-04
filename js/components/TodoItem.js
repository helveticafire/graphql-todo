import React from 'react';
import TodoItemView from './TodoItemView';
import TodoItemEdit from './TodoItemEdit';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deleted: false, editMode: false};
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(e) {
   // Transmit to Server and then set state
   this.setState({ editMode: !this.state.editMode });
  }

  handleDelete(e) {
    // Transmit to Server and then set state
    console.log("going to delete")
   this.setState({ deleted: true });
  }

  render() {
    if (this.state.editMode) {
      return <TodoItemEdit edge={this.props.edge} handleEdit={this.handleEdit}/>
    }
    return <TodoItemView edge={this.props.edge} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
  }
}
