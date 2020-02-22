import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css';


export default class SideNav extends React.Component {
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
            },
          ],
        },
      ]
    })
  }

  render() {
    return (
      <TreeMenu
        data={this.state.menuData}
        debounceTime={125}
        disableKeyboard={false}
        hasSearch={false}
        onClickItem={function noRefCheck(){}}
        resetOpenNodesOnDataUpdate={false}
      />
    )
  }
}