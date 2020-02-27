import React from 'react';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import TreeMenu from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css';


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [],
    }
  }

  componentDidMount() {
    this.setState({
      menuData: [
        {
          key: 'first-level-node-1',
          label: 'Politics',
          url: '/politics',
          nodes: [
            {
              key: 'second-level-node-1',
              label: 'Debates',
              url: '/debates',
            },
          ],
        },
        {
          key: 'first-level-node-2',
          label: 'Business',
          url: '/business',
          nodes: [
            {
              key: 'second-level-node-1',
              label: 'Economy',
              url: '/economy',
            },
            {
              key: 'second-level-node-2',
              label: 'Finance',
              url: '/finance',
            },
          ],
        },
      ]
    })
  }

  render() {
    return (
      <div>
        <a href='/'>
        <Image 
          src={require('../assets/logo_with_text.png')} 
          id='sideLogo'
          className='marginBottom'
        />
        </a>
        <TreeMenu
          data={this.state.menuData}
          debounceTime={125}
          disableKeyboard={false}
          hasSearch={false}
          onClickItem={ props => this.props.history.push(props.url)}
          resetOpenNodesOnDataUpdate={false}
        />
      </div>
    )
  }
}

export default withRouter(SideNav)