const express = require("express");
const path = require('path');
const app = express();

const dynamic_routes = [
    {url:"/course", src:"/course/[id]/[title].html"},
    {url:"/help/", src:"/help/[id].html"},
    "/dashboard/editCourse",
    "/dashboard/previewCourse",
    "/dashboard/salesReceipt",
    "/courseInvoice",
    "/store",
]

app.use(function (req, res, next) {

    let url_matches_dynamics = urlMatchesDynamics(req.url) ;

    if(req.url == "/"){

        req.url+="index.html";

    }else if(url_matches_dynamics){

        console.log("yes->"+url_matches_dynamics);
        req.url = url_matches_dynamics;

    }else{

        let url_part = req.url.split("?")[0];

        if(url_part.charAt(url_part.length-1) == "/"){
            url_part = url_part.slice(0, url_part.length-1);
        }

        let slash_array = url_part.split("/");

        let file_name = slash_array[slash_array.length-1];

        let name_array = file_name.split(".");
        
        if(name_array.length == 1){
            url_part+=".html";
        }

        req.url = url_part;
    }
    
    next();
});

app.use(express.static(path.join(__dirname, 'out')));


app.listen("4060", ()=>{
    console.log("listening on 4060");
});

function urlMatchesDynamics(url){

    let dynamic_file_url;

    dynamic_routes.forEach((r)=>{

        if(typeof r == "object"){

            let index = url.search(r.url);
            if(index == 0){
                dynamic_file_url = r.src;
            }

        }else{

            let index = url.search(r);
            if(index == 0){
                dynamic_file_url = r+".html"
            }
        }
    });

    return dynamic_file_url;
}