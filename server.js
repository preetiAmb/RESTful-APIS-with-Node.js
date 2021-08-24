const express =require("express");
const mongoose = require('mongoose');
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';


/* const path = require('path'); */
const app = express();
const PORT = 4000;

const dbURI = 'mongodb+srv://node:preeti@node.fqvas.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(( result ) => console.log('connected to db'))
    .catch((err) => console.log(err));

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
   /*  response.sendFile(path.join(__dirname, './static/index.html')); */
   res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT,() => {
    console.log(`Express server listening on port ${PORT}!`);
});