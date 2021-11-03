import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import { BrowserRouter } from 'react-router-dom';
function Example() {
    return (
        <div>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
