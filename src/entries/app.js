import React from 'react';
import { render } from 'react-dom';
import App from '../pages/containers/app';

//React-router
import { BrowserRouter } from 'react-router-dom';

const homeContainer = document.getElementById('home-container');

render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>, homeContainer
);
