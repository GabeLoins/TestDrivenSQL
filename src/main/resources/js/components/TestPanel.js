import React from 'react';

import PanelStore from '../stores/PanelStore';

class TestPanel extends React.Component {

  render() {
    return (
      <div 
        style={this.getStyle()}
        className="test-panel">
        <p>
          Test Panel!
        </p>
      </div>
    );
  }

  getStyle() {
    return {
      width: this.state.panelWidths['test'] + 'px',
      left: (this.state.panelWidths['text'] + this.state.panelWidths['divider'])
        + 'px',
    };
  }

  componentDidMount() {
    PanelStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PanelStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = PanelStore.getState();
  }

}

export default TestPanel;
