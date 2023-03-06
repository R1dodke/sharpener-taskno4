function test(){
    var username=document.getElementById('name').value;
    var email=document.getElementById('Email').value;

    var uid=JSON.stringify(localStorage.setItem("username",username));
    var email=JSON.stringify(localStorage.setItem("email", email));

}

