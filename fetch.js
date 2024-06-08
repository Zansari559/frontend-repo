fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
returnresponse.json
})
.then((data)=> {
console.log(data)
})
.catch((error)=> console.log(error));
