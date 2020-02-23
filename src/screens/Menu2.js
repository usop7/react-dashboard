import React from 'react';
import News from '../components/News';

export default class Menu1 extends React.Component {

  state = {
    news: [],
  }

  componentDidMount() {
    // fetch econoomy news data
    fetch('https://content.guardianapis.com/search?q=economy&api-key=test')
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

  render() {
    return (
      <div>
        <p><b>Economy</b></p>
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