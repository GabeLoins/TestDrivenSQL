import React from 'react';

import PanelConstants from '../constants/PanelConstants';

import PanelStore from '../stores/PanelStore';
import PanelActions from '../actions/PanelActions';

import TextPanel from './TextPanel';
import TestPanel from './TestPanel';
import PanelDivider from './PanelDivider';

class Editor extends React.Component {

  componentDidMount() {
    const width = React.findDOMNode(this).offsetWidth;
    const height = React.findDOMNode(this).offsetHeight;

    PanelActions.setPanelWidth('text', 
        (width / 2) - (PanelConstants.DIVIDER_WIDTH / 2));
    PanelActions.setPanelWidth('test', 
        (width / 2) - (PanelConstants.DIVIDER_WIDTH / 2));
    PanelActions.setPanelHeight(height);
  }

  render() {
    return (
      <div className="editor">
        <TextPanel />
        <PanelDivider />
        <TestPanel />
      </div>
    );
  }
}

export default Editor;
