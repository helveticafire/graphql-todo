import React from 'react';
import {
  FormGroup,
  FormControl
} from 'react-bootstrap';

export default class TaskEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
   this.setState({ value: e.target.value });
  }

  submit(e){
  //  var self;
   e.preventDefault();
  //  self = this;

  console.log(this.state);
  if (this.props.handleEdit) {
    this.props.handleEdit();
  }
  this.setState({ value: ''});
 }

 render() {
   return (
     <form onSubmit={this.submit}>
       <FormGroup controlId="formBasicText">
         <FormControl
           type="text"
           value={this.state.value}
           placeholder="Enter your message"
           onChange={this.handleChange}
         />
       </FormGroup>
     </form>
   );
 }
}
