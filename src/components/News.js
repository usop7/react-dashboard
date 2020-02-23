import React from 'react';
import Card from 'react-bootstrap/Card';

export default class News extends React.Component {
  render() {
  return (
    <div className='marginBottom'>
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.date}</Card.Subtitle>
          <Card.Text>
            <p>{this.props.section}</p>
          </Card.Text>
          <Card.Link href={this.props.url} target='_blank'>   
            {this.props.url}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
  }
}