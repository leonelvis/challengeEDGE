const express =  require('express');
const app = express();
const morgan = require('morgan');
const sequelize = require('./db.js');
var cors = require('cors');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

sequelize.sync().then(()=> console.log('db is ready'));


app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

const swaggerOptions = {
    definition: {
        openapi:'3.0.0',
        info: {
            title:'Movies Management API',
            version: '1.0.0',
            description: 'Movie api for movies management',
            contact:{
                name: 'Leonelvis Garcia',
                url: 'https://www.linkedin.com/in/leonelvis-garcia',
                email: 'leonelvisjgg@gmail.com'
            },
            servers:["http://localhost:3000"]
        },
    },
    apis: ['./src/routes/*.js']
}

const swaggerDocs=swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//middleares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//permite recuperar los valores publicados en un request
app.use(express.json());
app.use(cors());

app.use(require('./routes/routes.js'))


app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocs);
});


// conect db

//starting the server
app.listen(3000,()=>{
    console.log(`server on port 3000`);
});