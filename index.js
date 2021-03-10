const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('site'));

// process.on('exit', () => app.listen(port, () => console.log(`Server has been started with port ${port}`)));
// process.on('uncaughtException', () => app.listen(port, () => console.log(`Server has been started with port ${port}`)));
// process.on('SIGTERM', () => app.listen(port, () => console.log(`Server has been started with port ${port}`)));
app.listen(port, () => console.log(`Server has been started with port ${port}`));