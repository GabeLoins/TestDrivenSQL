import React from 'react';

import PanelConstants from '../constants/PanelConstants';
import TextPadActions from '../actions/TextPadActions';
import TextPadStore from '../stores/TextPadStore';

class AddPad extends React.Component {

  render() {
    return (
      <button 
        onClick={this.handleClick}
        style={this.getStyle()}
        type="button" 
        className="add-btn btn btn-default">
        <span 
          className="glyphicon add-glyph glyphicon-plus" 
          aria-hidden="true">
        </span>
        New Query 
      </button>
    );
  }

  handleClick() {
    TextPadActions.openPad(-1);
  }
  
  getStyle() {
    return {
      left: PanelConstants.PAD_WIDTH_PADDING,
      top: this.state.totalHeight,
    };
  }

  componentDidMount() {
    TextPadStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TextPadStore.unlisten(this.onChange);
  }

  onChange() {
    console.log('NEW TOTAL HEIGHT', TextPadStore.getTotalHeight());
    this.setState({
      totalHeight: TextPadStore.getTotalHeight(),
    });
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      totalHeight: TextPadStore.getTotalHeight(),
    };
  }
}

AddPad.propTypes = { id : React.PropTypes.number };

/**
 * looks like we'll have to make add pad buttons part of the 
 * TextPadStore state so that TextPad store can move them around
 */

export default AddPad;
