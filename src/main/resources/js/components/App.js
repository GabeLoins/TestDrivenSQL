import React from 'react';

import FilePanel from './FilePanel';
import Editor from './Editor';

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
