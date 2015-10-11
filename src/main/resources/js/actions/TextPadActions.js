import alt from '../alt';

class TextPadActions {

  openPad(location_) {
    return location_;
  }

  deletePad(id) {
    return id;
  }

}

export default alt.createActions(TextPadActions);
