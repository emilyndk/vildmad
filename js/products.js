// definer hvor dataen kommer fra
const supabaseURL = "https://yetkfhqjsmqjnluzjxmn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldGtmaHFqc21xam5sdXpqeG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTcwOTMsImV4cCI6MjAyMzMzMzA5M30.IG9539I2rD_1xYUORhw44Y_-8HTJDZnjL-tAzDjFQok";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://yetkfhqjsmqjnluzjxmn.supabase.co/rest/v1/products?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: supabaseKey,
  },
})
  .then((res) => res.json())
  .then(showProduct);

function showProduct(product) {
  console.table(product);
  document.querySelector("h1").textContent = product.title;
  document.querySelector(".product_img").src = product.product_image;
  document.querySelector(".infolist_cat").textContent = product.categories;
  document.querySelector(".infolist_szn").textContent = product.season;
  document.querySelector(".infolist_loc").textContent = product.sankelandskab;
}
