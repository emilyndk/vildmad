// definer hvor dataen kommer fra
const supabaseURL = "https://yetkfhqjsmqjnluzjxmn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldGtmaHFqc21xam5sdXpqeG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTcwOTMsImV4cCI6MjAyMzMzMzA5M30.IG9539I2rD_1xYUORhw44Y_-8HTJDZnjL-tAzDjFQok";

fetch(`${supabaseURL}/rest/v1/products`, {
  method: "GET",
  headers: {
    apikey: supabaseKey,
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // loop og kald showProduct
  console.log(products);
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#productlist_template").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.title;
  copy.querySelector("p").textContent = "Category: " + product.categories;
  copy.querySelector("p").textContent = "Season: " + product.season;

  // appende
  document.querySelector("main").appendChild(copy);
}
