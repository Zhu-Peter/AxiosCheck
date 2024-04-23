// axios.request({
//     url: `https://jsonplaceholder.typicode.com/posts`
// }).then(successFunction).catch(failureFunction);

// function successFunction(response){
//     console.log(response)
//     insertHtml(response.data)
// }

// function failureFunction(error){
//     console.log("error: ", error)
// }

// function insertHtml(data){
//     for(let i = 0; i<data.length; i++){
//         document.querySelector(`body`).insertAdjacentHTML(`beforeend`, `
//         <h3>${data[i].title}</h3>
//         <p>${data[i].body}</p>
//         `)

//     }
// }

axios
  .request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`,
  })
  .then(successFunction)
  .catch(failureFunction);

function successFunction(request) {
  console.log(request);
  console.log(`The meal is ${request.data.meals[0].strMeal} from ${request.data.meals[0].strArea} cusine\n
You can make it by the following: ${request.data.meals[0].strInstructions}`);
}

function failureFunction(error) {
  console.log(error);
}
