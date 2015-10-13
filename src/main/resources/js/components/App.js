import React from 'react';

import Editor from './Editor';
import FilePanel from './FilePanel';

class App extends React.Component {

  render() {
    return (
      <div>
        <FilePanel />
        <Editor />
      </div>
    );
  }

}

export default App;
