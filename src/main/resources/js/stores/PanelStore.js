import alt from '../alt';

import PanelConstants from '../constants/PanelConstants';

import PanelActions from '../actions/PanelActions';

class PanelStore {

  constructor() {
    this.bindListeners({
      updatePanelWidth: PanelActions.setPanelWidth,
      updatePanelHeight: PanelActions.setPanelHeight,
    });

    this.exportPublicMethods({
      getWidth: this.getWidth,
    });

    this.state = {
      panelHeight: 0,
      panelWidths: {
        text: 0,
        test: 0,
        divider: PanelConstants.DIVIDER_WIDTH,
      },
    };
  }

  getWidth(panel) {
    return this.state.panelWidths[panel];
  }

  updatePanelWidth(data) {
    const panelWidths = this.state.panelWidths;
    panelWidths[data.panel] = data.size;
    this.setState({ 
      panelWidths: panelWidths,
    });
  }

  updatePanelHeight(size) {
    this.setState({
      panelHeight: size,
    });
  }
}

export default alt.createStore(PanelStore);
