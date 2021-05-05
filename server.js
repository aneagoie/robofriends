// server.js
import express from 'express';
import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import App from './src/containers/App';

const app = express();

app.use(express.static('/public'));

const robots = JSON.parse(fs.readFileSync('/public/robots.json', 'utf8'));
const robofriendsApp = React.createElement(App);
app.get('/', (request, response) => {
    response.render('index', {
        content: renderToString(robofriendsApp({data: robots})
        )
    })
})