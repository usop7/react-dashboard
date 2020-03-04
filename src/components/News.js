import React from 'react';
import { Accordion, Card, Button, Table, Row, Col } from 'react-bootstrap';

export default class News extends React.Component {

  render() {
    const data = this.props.data;
    return (
      <div className='marginBottom'>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Body>
              {data.webTitle}
              <Accordion.Toggle as={Button} variant="link" eventKey={this.props.id}>
                more  
              </Accordion.Toggle>
            </Card.Body>
            
            <Accordion.Collapse eventKey={this.props.id}>
              <Card.Body>
                <Button 
                  variant="secondary" 
                  onClick={this.props.onDelete.bind(this, data.id)} 
                  className="marginBottom">
                  delete
                </Button>
                <Table responsive hover>
                  <tbody>
                    <tr>
                      <td><b>Type</b></td>
                      <td>{data.type}</td>
                    </tr>
                    <tr>
                      <td><b>Date</b></td>
                      <td>{data.webPublicationDate}</td>
                    </tr>
                    <tr>
                      <td><b>Section</b></td>
                      <td>{data.sectionName}</td>
                    </tr>
                    <tr>
                      <td><b>Pillar</b></td>
                      <td>{data.pillarName}</td>
                    </tr>
                    <tr>
                      <td><b>URL</b></td>
                      <td><a href={data.webUrl} target="_blank" rel="noopener noreferrer">{data.webUrl}</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}