import alt from '../alt';

class PanelActions {
  setPanelWidth(panel, size) {
    return { panel, size };
  }
  
  setPanelHeight(size) {
    return size;
  }
}

export default alt.createActions(PanelActions);
