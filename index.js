const express =  require ('express');
const bodyPaser = require('body-parser');

const app = express();

app.use(bodyPaser.json());

app.listen(3000, ()=> {
    console.log("cool");
})