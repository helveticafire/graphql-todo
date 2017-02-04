import React from 'react';
import Relay from 'react-relay';
import {
  Col,
  Row,
  PageHeader,
  ListGroup
} from 'react-bootstrap';
import TodoItem from './TodoItem';
import TaskEntryForm from './TaskEntryForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Col xs={8} xsOffset={2}>
          <Row className="show-grid">
            <PageHeader>{this.props.viewer.todos.edges.length} Tasks</PageHeader>
            <ListGroup>
              {this.props.viewer.todos.edges.map(edge =>
                <TodoItem key={edge.node.id} edge={edge} />
              )}
            </ListGroup>
            <TaskEntryForm value=""/>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        todos(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});
