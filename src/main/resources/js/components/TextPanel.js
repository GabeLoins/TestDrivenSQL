import React from 'react';

import AddPad from './AddPad';
import TextPad from './TextPad';

import PanelStore from '../stores/PanelStore';
import TextPadStore from '../stores/TextPadStore';

class TextPanel extends React.Component {

  render() {
    return (
      <div 
        style={this.getStyle()}
        className="text-panel">
        {this.renderTextPads()}
        <AddPad />
      </div>
    );
  }

  getStyle() {
    return {
      width: this.state.panelWidths['text'] + 'px',
      left: '0px',
    };
  }

  renderTextPads() {
    return this.state.orderedPads.map(function (id) {
      return (
        <TextPad id={id} />
      );
    });
  }

  componentDidMount() {
    PanelStore.listen(this.onChange);
    TextPadStore.listen(this.onPadChange);
  }

  componentWillUnmount() {
    PanelStore.unlisten(this.onChange);
    TextPadStore.unlisten(this.onPadChange);
  }

  onChange(state) {
    this.setState(state);
  }

  onPadChange() {
    this.setState({
      orderedPads: TextPadStore.getOrderedIds(),
    });
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onPadChange = this.onPadChange.bind(this);
    this.state = PanelStore.getState();
    this.state.orderedPads = TextPadStore.getOrderedIds();
  }
}

export default TextPanel;
