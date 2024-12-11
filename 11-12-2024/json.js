async function fetchData() {
    let data = await fetch('https://dummyjson.com/products');
    let response = await data.json()
    return response.products
}
fetchData().then(products => {
    // beauty products
    console.log("Beauty Category")
    let category = products.filter(product=>product.category=="beauty");
    category.forEach(result=> console.log(result.title,"=",result.price))

    let priceTotal = products.reduce((accumulator, product)=>accumulator+product.price,0)
    console.log("Total Price is: ", priceTotal.toFixed(2))
});