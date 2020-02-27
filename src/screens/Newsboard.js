import React from 'react';
import News from '../components/News';

export default class Newsboard extends React.Component {

  state = {
    news: [],
  }

  componentDidMount() {
    // fetch news data for a given section parameter
    fetch(`https://content.guardianapis.com/search?q=${this.props.section}&api-key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const results = data.response.results;
      let temp = [];
      for (const news of results) {
        temp.push(news);
      }
      this.setState({news: temp});
    })
    .catch(err => console.log(err));
  }

  // If a prop is changed (new route), should fetch a new data and re-render
  componentDidUpdate(prevProps) {
    if (this.props.section !== prevProps.section) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div className='contentDiv'>
        <h2>{this.props.section}</h2>
        {
          this.state.news.map( (news, index) => 
            <News 
              key={index} 
              section={news.sectionId}
              title={news.webTitle}
              date={news.webPublicationDate}
              url={news.webUrl}
            />)
        }
      </div>
    )
  }
}