import React from 'react';

import PanelStore from '../stores/PanelStore';

class PanelDivider extends React.Component {

  render() {
    return (
      <div 
        style={this.getStyle()}
        className="panel-divider">
          <span 
            style={this.getGlyphStyle()}
            aria-hidden="true"
            className="resize-glyph glyphicon glyphicon-resize-horizontal">
          </span>
      </div>
    );
  }

  getGlyphStyle() {
    return {
      'line-height': this.state.panelHeight,
    };
  }

  getStyle() {
    return {
      width: this.state.panelWidths['divider'] + 'px',
      left: this.state.panelWidths['text'] + 'px',
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

export default PanelDivider;
