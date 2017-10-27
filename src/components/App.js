import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';

class App extends React.Component {
  render() {
    return (
      <div>
        <ArticleHeader />
        <ArticleBody />
      </div>
    )
  }
}

export default App;
