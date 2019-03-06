import React from 'react';
import { render } from 'react-dom';
import App from '../pages/containers/app';

//React-router
import { BrowserRouter } from 'react-router-dom';

const homeContainer = document.getElementById('home-container');

// Alt + 0191 es para signo de interrogacion, 164,165 para la Ñ, 130 para la é, 160 - 163 para las de mas vocales

render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>, homeContainer
);