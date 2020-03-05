import React from 'react';
import News from '../components/News';
import PieChart from 'react-minimal-pie-chart';
import { FaSquare } from 'react-icons/fa';

export default class Newsboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      chartData: [],
    }
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
      this.setState({newsList: temp}, () => this.calculateStats());
    })
    .catch(err => console.log(err));
  }

  // If a prop is changed (new route), should fetch a new data and re-render
  componentDidUpdate(prevProps) {
    if (this.props.section !== prevProps.section) {
      this.componentDidMount();
    }
  }

  // populate basic stats data that can be passed into a chart
  calculateStats() {
    const newsList = this.state.newsList;
    let counter = {};
    let chartData = [];

    // count number of articles for each section
    for (const news of newsList) {
      counter[news.sectionName] = counter[news.sectionName] === undefined ? 1 : counter[news.sectionName] + 1;
    }
    
    // create a list of data entry for each section
    const colors = ['#87c0c4', '#ffc74f', '#5cb85c', '#5bc0de', '#FC7367', '#817E9F', '#DD6E42', '#F8BDC4'];
    let cIndex = 0;
    for (const section of Object.keys(counter)) {
      chartData.push(
        {
          title: section,
          value: counter[section],
          color: colors[cIndex++ % colors.length],
        }
      );
    }

    this.setState({ chartData: chartData });

  }

  render() {
    return (
      <div className='contentDiv'>
        <h2>{this.props.section}</h2>

        <div className='verticalMargin alignCenter'>

          <PieChart
            data={this.state.chartData}
            style={{ height: '230px' }}
            label={({ data, dataIndex }) => data[dataIndex].title}
            labelPosition={70}
            labelStyle={{ fill: '#000', fontSize: '7px'}}
          />

          <div className='alignLeft verticalMargin'>
          {
            this.state.chartData.map( (section, index) => 
            <div key={index}>
              <span style={{ color: section.color}}><FaSquare /></span> {section.title} ({section.value})
            </div>)
          }
          </div>
        </div>

        {
          this.state.newsList.map( (news, index) => 
            <News 
              key={index} 
              id={news.id}
              data={news}
              onDelete={this.deleteNews}
              showSaveBtn={true}
              showDeleteBtn={false}
              showEditBtn={false}
            />)
        }
      </div>
    )
  }

}