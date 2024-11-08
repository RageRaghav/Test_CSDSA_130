function validate(){
    let flag=true
    let username = document.getElementById('username').value;
    let password  = document.getElementById('password').value;
    
    if(username.length<6 || username==''){
        flag=false
    }
    if(password.length<6 || password==''){
        flag=false
    }
    if(flag==false){
        alert('Invalid Credentials')
    }
    else{
        let form = document.getElementById('form');
        form.setAttribute('target')= document.getElementById('f1'); 
    }
}