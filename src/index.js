/* const express = require('express'); */
/* import express from 'express'; */
import express from 'express';
import graphqlHTTP from 'express-graphql';
console.log('testing');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});
app.use('/graphql', graphqlHTTP);
app.listen(3000, () => console.log('Server on port 3000'));
