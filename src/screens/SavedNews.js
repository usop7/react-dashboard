import React from 'react';
import News from '../components/News';
import Button from 'react-bootstrap/Button';

export default class SavedNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSaved: 0,
      newsList: [],
    }
    this.deleteNews = this.deleteNews.bind(this);
    this.editNews = this.editNews.bind(this);
    this.clearNews = this.clearNews.bind(this);
  }

  componentDidMount() {
    let newsList = [];
    let numSaved = 0;
    if (localStorage.getItem('newsList') !== null) {
      newsList = JSON.parse(localStorage.getItem('newsList'));
      numSaved = newsList.length;
      this.setState({ 
        numSaved: numSaved,
        newsList: newsList 
      });
    }
  }

  render() {
    return (
      <div className='contentDiv'>
        <h2>Saved</h2>
        <p>You have {this.state.numSaved} saved news.</p>
        {
          this.state.numSaved > 0 ?
          <div className='alignRight'>
            <Button 
              variant="outline-secondary" 
              className="marginBottom"
              onClick={this.clearNews} >
              clear all
            </Button>
          </div> : null
        }
          
        <div>
          {
            this.state.newsList.map( (news, index) => 
              <News 
                key={index} 
                id={news.id}
                data={news}
                showSaveBtn={false}
                showDeleteBtn={true}
                showEditBtn={true}
                onDelete={this.deleteNews}
                onEdit={this.editNews}
              />)
          }
        </div>
      </div>
    )
  }

  // edit a News and save it to local storage
  editNews(newsId) {
    const id = newsId.replace(/\//g, "");
    this.props.history.push(`edit/${id}`);
  }

  // delete a News from local storage
  deleteNews(id) {
    let tmp = [];
    for (const obj of this.state.newsList) {
      if (obj.id !== id) {
        tmp.push(obj);
      }
    }
    const str = JSON.stringify(tmp);
    localStorage.setItem('newsList', str);
    this.setState({ 
      numSaved: tmp.length,
      newsList: tmp 
    });
  }

  // clear all news from local storage
  clearNews() {
    localStorage.removeItem('newsList');
    this.setState({ 
      numSaved: 0,
      newsList: [] 
    });
  }

}