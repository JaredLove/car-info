const express = require('express');
const PORT = process.env.PORT || 3001;


const app = express();

// to parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// to make files readily available
app.use(express.static('public'));


// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });