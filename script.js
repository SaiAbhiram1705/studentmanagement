function submitform(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(name && email && password){
        document.getElementById("confirmation").textContent=
        "thankyou"+name+"you have registered successfully"
    }
    else{
        alter("please fill out all fileds");
    }
}