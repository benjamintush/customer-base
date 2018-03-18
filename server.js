const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app =  express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('Server is running in port 3000;');
});