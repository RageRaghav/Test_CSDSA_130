
let ul = document.getElementById('list');
async function fetchdata(){
    try{
        let response= await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        
        for(i=0;i<10;i++){
            let a= document.createElement('a');
            let li = document.createElement('li');
            a.textContent = data[i]["login"]
            a.setAttribute('href', data[i]["html_url"]);
            li.appendChild(a);
            ul.appendChild(li);
        }  
    }
    catch(error ){
        console.log(error)

    }
    function sortlist(){
        let option = document.getElementById('option');
        if(option.value=='Alphabetical'){
            ul.sort()
        } 
    }
    let username = document.getElementById('username');
    let h = document.getElementById('h1');
    h.appendChild(username);
}