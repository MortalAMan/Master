import React from 'react';
import Header from './Header';
import Body from './Body';
import Video from './Video';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Video />
      </div>
    )
  }
}

export default App;
