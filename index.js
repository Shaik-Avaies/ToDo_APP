const express = require('express');
const port = 8000;

app = express();

//setting up routers
app.use('/',require('./routes'));

//set up views
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err,data){
    if(err){
        console.log("Error while Listening ", err);
        return ;
    }
    console.log("Succcussfully connected");
});