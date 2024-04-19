axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failureFunction);

function successFunction(response){
    console.log(response)
}

function failureFunction(error){
    console.log("error: ", error)
}