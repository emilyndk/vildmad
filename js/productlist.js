// definer hvor dataen kommer fra
const supabaseURL = "https://yetkfhqjsmqjnluzjxmn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldGtmaHFqc21xam5sdXpqeG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTcwOTMsImV4cCI6MjAyMzMzMzA5M30.IG9539I2rD_1xYUORhw44Y_-8HTJDZnjL-tAzDjFQok";

const urlParams = new URLSearchParams(window.location.search);
const locationID = urlParams.get("location_id");

fetch(`${supabaseURL}/rest/v1/products?location_id=eq.${locationID}`, {
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

  document.querySelector(".info_category").textContent = products[0].headers;

  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#productlist_template").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  console.log("product", product);
  copy.querySelector("h3").textContent = product.title;
  copy.querySelector("img").src = product.product_image;
  copy.querySelector(".pl_category").textContent = "Category: " + product.categories;
  copy.querySelector(".pl_season").textContent = "Season:" + product.season;
  copy.querySelector("a").href = `products.html?id=${product.id}`;

  // appende
  document.querySelector("#product_container").appendChild(copy);
}
