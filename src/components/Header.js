import React from 'react';
import { Image } from 'semantic-ui-react';
import photo01 from '../images/photo01.jpg';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
      <h5 className='subtitle'>Subtitle</h5>
      <h1>Title of the section</h1>
      <Image className='photo1' src={photo01} size='large' centered />
      </div>
    );
  }
}

export default Header;