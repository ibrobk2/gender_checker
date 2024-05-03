var btn = document.getElementById('btn');
var result =  document.getElementById('result');


let gender = {
    // username: document.getElementById('in').value,
    // url: "https://api.genderize.io?name="+username,
    getData: function(username){
        var url = "https://api.genderize.io?name="+username;
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>this.displayData(data));
    },


    displayData: (data)=>{
        // const {name, gender} = data;
       result.innerHTML = data.name+" your gender is "+data.gender;
    }
}


btn.addEventListener('click', function(){
   var username = document.getElementById('in').value;
//     var url = "https://api.genderize.io?name="+username;


        return gender.getData(username);
}
);



document.getElementById("in").addEventListener('keyup', function(event){
    event.preventDefault;
    if(event.key == "Enter"){
        var username = document.getElementById('in').value;

      gender.getData(username);


    }
    
});