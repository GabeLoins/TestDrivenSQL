import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/sql'
import 'brace/theme/monokai'

import TextPadStore from '../stores/TextPadStore';



function onChange(newValue) {
  console.log('change', newValue)
}

class TextPad extends React.Component {

  render() {
    return (
      <div style={this.getStyle()}>
        <AceEditor
          mode="sql"
          theme="monokai"
          onChange={onChange}
          name={'pad' + this.props.id}
          width={this.state.padWidths[this.props.id] + 'px'}
          height={this.state.padHeights[this.props.id] + 'px'}
          editorProps={{$blockScrolling: true}}
        />
      </div>
    );
  }

  getStyle() {
    return {
      position: 'absolute',
      left: this.state.padX[this.props.id] + 'px',
      top: this.state.padY[this.props.id] + 'px',
    };
 }

  componentDidMount() {
    TextPadStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TextPadStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = TextPadStore.getState();
  }

}

TextPad.propTypes = { id : React.PropTypes.number };

export default TextPad;
