import React from 'react';
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
          label: 'Menu 1',
          nodes: [
            {
              key: 'second-level-node-1',
              label: 'Menu 1-1',
              url: '/menu1',
            },
          ],
        },
        {
          key: 'first-level-node-2',
          label: 'Menu 2',
          nodes: [
            {
              key: 'second-level-node-1',
              label: 'Menu 2-1',
              url: '/menu2',
            },
          ],
        },
      ]
    })
  }

  render() {
    return (
      <div>
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