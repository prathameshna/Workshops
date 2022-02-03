
    function searchVeggie(){
        var val = document.querySelector("input").value;
        console.log(val);
        if(val=='Celery Root'||'Spaghetti Squash'||'Mushrooms'){
            document.getElementById("alert").innerHTML="Vegitable found.";
        }
        else{
            document.getElementById("alert").innerHTML="Vegitable not found.";
        }
    }
