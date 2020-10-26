const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;

process.env.SECRET_KEY="secret";

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require register routes
const registerRoutes = require('./src/routes/register.routes')
const loginRoutes = require('./src/routes/login.routes')
const layananRoutes = require('./src/routes/layanan.routes')
// using as middleware
app.use('/register', registerRoutes)
app.use('/login', loginRoutes)
app.use('/layanan', layananRoutes)
// listen for requests
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
