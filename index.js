const express = require("express");
const path = require('path');
const app = express();

const dynamic_routes = [
    "/course",
    "/dashboar/editCourse",
]

app.use(function (req, res, next) {

    if(req.url == "/"){

        req.url+="index.html";

    }else if(urlMatchesDynamics(req.url)){

        req.url = urlMatchesDynamics(req.url);

    }else{

        let array1 = req.url.split("/");
        let file_name = array1[array1.length-1];

        let array2 = file_name.split(".");
        //let ext = array2[array2.length-1];

        if(array2.length == 1){
            req.url+=".html";
        }
    }
    
    next();
});

app.use(express.static(path.join(__dirname, 'public')));


app.listen("4060", ()=>{
    console.log("listening on 4060");
});

function urlMatchesDynamics(url){

    let dynamic_file_url;

    dynamic_routes.forEach((r)=>{

        let index = url.search(r);

        if(index == 0){

            dynamic_file_url = r+".html"
        }
    });

    return dynamic_file_url;
}