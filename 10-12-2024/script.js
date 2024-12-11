async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let response = await data.json()
    console.log(response)
    return response
}

fetchData().then(value=>{
    // console.log(value.title)
    let h = document.getElementById("heading")
    h.innerText = value.title
})


