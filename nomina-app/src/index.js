const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//routes
const paymentRoutes = require('./routes/payment');
const settlementRoutes = require('./routes/settlement');


//settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middlewears
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use('/api',paymentRoutes);
app.use('/api',settlementRoutes);

//static files
app.use(express.static(path.join(__dirname,'dist/client')));

//start server
app.listen(app.get('port'), () => {
    console.log('server on port 3000')
});
