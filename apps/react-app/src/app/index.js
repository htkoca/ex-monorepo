import React from 'react';
import img from './react.png';
import s from './style.module.less';
import MyButton from 'my-button';

import FontTest from 'font-test/';
const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div><MyButton>Hello</MyButton> </div>
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <FontTest />
  </div>
);

export default App;
