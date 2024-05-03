var btn = document.getElementById('btn');


btn.addEventListener('click', ()=>{
    let gender = {
        username: document.getElementById('in').value,
        url: "https://api.genderize.io?name="+this.username,
        getGender: ()=>{
            fetch(this.url)
            .then((res)=>res.json())
            .then((data)=>this.result(data))
        },
        result: (data)=>{
            document.getElementById('result').innerHTML = data.name+" your gender is "+data.gender;
        }
    }

    return gender.getGender();
})