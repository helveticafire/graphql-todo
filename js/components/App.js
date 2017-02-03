import React from 'react';
import Relay from 'react-relay';
import { Button,
         Grid,
         Col,
         Row,
         PageHeader,
         ListGroupItem,
         ListGroup }
         from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Col xs={8} xsOffset={2}>
        <Row className="show-grid">
        <PageHeader>Widget list</PageHeader>
          <ListGroup>
            {this.props.viewer.widgets.edges.map(edge =>
              <ListGroupItem key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</ListGroupItem>
            )}
          </ListGroup>
        </Row>
      </Col>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
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
