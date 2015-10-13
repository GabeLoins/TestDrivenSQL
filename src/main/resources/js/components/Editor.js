import React from 'react';

import PanelActions from '../actions/PanelActions';
import PanelConstants from '../constants/PanelConstants';
import PanelDivider from './PanelDivider';
import PanelStore from '../stores/PanelStore';
import TestPanel from './TestPanel';
import TextPanel from './TextPanel';

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
