var btn = document.getElementById('btn');
var result =  document.getElementById('result');


btn.addEventListener('click', ()=>{
    let username = document.getElementById('in').value;
    let url = "https://api.genderize.io?name="+username;


    let gender = {
        
        getData: function(){
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>this.displayData(data));
        },


        displayData: (data)=>{
            // const {name, gender} = data;
           result.innerHTML = data.name+" your gender is "+data.gender;
        }
    }

    return gender.getData();
})