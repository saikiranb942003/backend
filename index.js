const express = require('express');
const app = express();
const basicAuthMiddleware = require('./middlewares/basicAuthMiddleware');

app.use(express.json());

app.get('/token', basicAuthMiddleware, (req, res) => {
    res.json({
        access_token: 'mocked-access-token',
        token_type: 'Bearer',
        expires_in: 3600
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
