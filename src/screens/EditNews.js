import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class EditNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      type: '',
      date: '',
      section: '',
      pillar: '',
      url: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    
    let newsList = [];
    if (localStorage.getItem('newsList') !== null) {
      newsList = JSON.parse(localStorage.getItem('newsList'));
    }
    
    // find a news object whose id is same as the given id
    for (const news of newsList) {
      const newsId = news.id.replace(/\//g, "");
      if (newsId === id) {
        this.setState({ 
          id: news.id,
          title: news.webTitle,
          type: news.type,
          date: news.webPublicationDate,
          section: news.sectionName,
          pillar: news.pillarName,
          url: news.webUrl,
        });
      }
    }
  }

  render() {
    return (
      <div className='contentDiv'>
        <h2>Edit</h2>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control 
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control 
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Section</Form.Label>
            <Form.Control 
              type="text"
              name="section"
              value={this.state.section}
              onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Pillar</Form.Label>
            <Form.Control 
              type="text"
              name="pillar"
              value={this.state.pillar}
              onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control 
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange} />
          </Form.Group>

          <Button variant="warning" onClick={this.saveChanges} className="newsBtn">Save</Button>
        </Form>
        
      </div>
    )
  }

  handleInputChange(event) {
    // To keep the event object from being “pooled”
    event.persist();

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  // save changes to the local storage and go back to saved list
  saveChanges() {

    // load current data
    let newsList = [];
    if (localStorage.getItem('newsList') !== null) {
      newsList = JSON.parse(localStorage.getItem('newsList'));
    }

    // change the news object
    for (const news of newsList) {
      if (news.id === this.state.id) {
        news.webTitle = this.state.title;
        news.type = this.state.type;
        news.webPublicationDate = this.state.date;
        news.sectionName = this.state.section;
        news.pillarName = this.state.pillar;
        news.webUrl = this.state.url;
      }
    }

    // save new list
    const str = JSON.stringify(newsList);
    localStorage.setItem('newsList', str);

    this.props.history.push('/saved');

  }

}