function test(){
    var username=document.getElementById('name').value;
    var email=document.getElementById('Email').value;

    var uid=localStorage.setItem("username",username);
    var email=localStorage.setItem("email", email)

}

