axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failureFunction);

function successFunction(response){
    console.log(response)
    insertHtml(response.data)
}

function failureFunction(error){
    console.log("error: ", error)
}

function insertHtml(data){
    for(let i = 0; i<data.length; i++){
        document.querySelector(`body`).insertAdjacentHTML(`beforeend`, `
        <h3>${data[i].title}</h3>
        <p>${data[i].body}</p>
        `)

    }
}