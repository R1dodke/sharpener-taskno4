function test(){
    var username=document.getElementById('name').value;
    var email=document.getElementById('Email').value;

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

    if(user_records.some((v)=>{return v.email==email}))
    {
        alert("duplicate data");
    }
    else{
        user_records.push({
            "username":username,
            "email":email,
        })
    
        localStorage.setItem("user",JSON.stringify(user_records));

    }

   
    

}

