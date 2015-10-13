import alt from '../alt';
import PanelConstants from '../constants/PanelConstants';
import PanelStore from './PanelStore';
import TextPadActions from '../actions/TextPadActions'

class TextPadStore {

  constructor() {
    this.bindListeners({
      createPad: TextPadActions.openPad,
      deletePad: TextPadActions.deletePad,
    });

    this.exportPublicMethods({
      getOrderedIds: this.getOrderedIds,
      getTotalHeight: this.getTotalHeight,
    });

    this.state = {
      padWidths: [],
      padHeights: [],
      padX: [],
      padY: [],
      padOrdering: [],
      nextId: 0,
    };

  }

  getOrderedIds() {
    return this.state.padOrdering;
  }

  getNextId() {
    const ret = this.state.nextId + 1;
    this.setState({
      nextId: this.state.nextId + 1
    });
    return ret;
  }

  createPad(location_) {
    if (location_ === -1) {
      location_ = this.state.padOrdering.length;
    }
    const id = this.getNextId();
    this.state.padWidths[id] = 
      PanelStore.getWidth('text') - 2 * PanelConstants.PAD_WIDTH_PADDING;
    this.state.padHeights[id] = PanelConstants.PAD_DEFAULT_HEIGHT;
    this.state.padX[id] = PanelConstants.PAD_WIDTH_PADDING;
    this.state.padY[id] = this.findY(location_);
    
    this.state.padOrdering.splice(location_, 0, id)
    this.setState({
      padWidths: this.state.padWidths,
      padHeights: this.state.padHeights,
      padX: this.state.padX,
      padY: this.state.padY,
      padOrdering: this.state.padOrdering,
    })
    console.log(this.state.padOrdering);
  }

  getTotalHeight() {
    return this.state.padOrdering.reduce((function(sum, id) {
      return sum + this.state.padHeights[id] + 2 * PanelConstants.PAD_HEIGHT_PADDING; 
    }).bind(this), PanelConstants.PAD_HEIGHT_PADDING)
  }

  findY(location_) {
    let acc = PanelConstants.PAD_HEIGHT_PADDING;
    for (let i = 0; i < location_; i++) {
      acc += PanelConstants.PAD_HEIGHT_PADDING * 2; 
      acc += this.state.padHeights[this.state.padOrdering[i]];
    }
    return acc;
  }

  deletePad(id) {
    // TODO
    // fill this in later 
  }
}

export default alt.createStore(TextPadStore);
