import React from 'react';
import express from 'express';
const app = express();

import { StaticRouter } from 'react-router';
import reactDOMServer from 'react-dom/server';
import App from '../../dist/ssr/app';

app.use(express.static('dist'))
app.use('/images', express.static('images'))

app.get('*', (req, res) => {
    const html = reactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{name: 'Sergui'}}>
            <App></App>
        </StaticRouter>
    )

    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Platzi-video</title>
            <link rel="stylesheet" href="/css/app.44b6e303b28d63803b6b.css">
        </head>
        <body>
            <div id="home-container">${html}</div>
            <div id="modal-container"></div>
            <script src="/js/app.44b6e303b28d63803b6b.js"></script>
        </body>
        </html>
    `)

    res.end()
})

app.listen('3000', () => {
    console.log('Server listening on port 3000')
})