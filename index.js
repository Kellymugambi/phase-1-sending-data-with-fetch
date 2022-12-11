// Add your code here
// Add your code here

const userObject = {
    name: "Steve",
    email: "steve@steve.com",}


function submitData (name,email){

    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
           name,email
        })
    })
    .then(ResponSe => ResponSe.json())
    .then((Object)=>{ //console.log(Object)
        document.body.innerHTML = Object.id
    })

    
    .catch(function (error) {
        let message = "Unauthorized Access"
        let p = document.createElement("p")
        p.innerHTML= message
        
      })
           .then(user => {
            console.log(user)
        })
    
}

console.log(submitData())
