const app = require('./src/app');
// import 'dotenv/config';

const port = 3005;



app.listen(port, () => {
    console.log('Application Port Connected', port);
})