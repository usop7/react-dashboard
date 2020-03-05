import React from 'react';
import { Accordion, Card, Button, Table } from 'react-bootstrap';

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

                {this.props.showSaveBtn ?
                  <Button 
                    variant="warning" 
                    className="marginBottom newsBtn"
                    onClick={this.saveNews.bind(this, data)} >
                    save
                  </Button> : null
                }

                {this.props.showEditBtn ?
                  <Button 
                    variant="warning" 
                    className="marginBottom newsBtn"
                    onClick={this.props.onEdit.bind(this, data.id)} >
                    edit
                  </Button> : null
                }

                {this.props.showDeleteBtn ?
                  <Button 
                    variant="secondary" 
                    className="marginBottom newsBtn"
                    onClick={this.props.onDelete.bind(this, data.id)} >
                    delete
                  </Button> : null
                }

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

  // save a news object to a local storage
  saveNews(newsObj) {
    let newsList = [];
    if (localStorage.getItem('newsList') !== null) {
      newsList = JSON.parse(localStorage.getItem('newsList'));
    }
    newsList.push(newsObj);
    const str = JSON.stringify(newsList);
    localStorage.setItem('newsList', str);
  }

}