import React from 'react';
import 'App.css';

import testImage from './image.jpeg';

const App = () => (
    <div>
        <h1 className="wow">Hello react</h1>
        <img src={testImage} alt=""/>
    </div>
);

export default App;