// definer hvor dataen kommer fra

const supabaseURL = "https://yetkfhqjsmqjnluzjxmn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldGtmaHFqc21xam5sdXpqeG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTcwOTMsImV4cCI6MjAyMzMzMzA5M30.IG9539I2rD_1xYUORhw44Y_-8HTJDZnjL-tAzDjFQok";

fetch(`${supabaseURL}/rest/v1/locations`, {
  method: "GET",
  headers: {
    apikey: supabaseKey,
  },
})
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  // looper og kalder showCategory
  categories.forEach(showCategory);
}

function showCategory(cat) {
  console.log(cat);

  //fang template
  const template = document.querySelector("#landscape_template").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h2").textContent = cat.location;
  //copy.querySelector("img").src = product.product_image;
  copy.querySelector("a").href = `productlist.html?location_id=${cat.id}`;

  if (cat.id == 1) {
    copy.querySelector("article").classList.add("city");
  } else if (cat.id == 2) {
    copy.querySelector("article").classList.add("forest");
  } else if (cat.id == 3) {
    copy.querySelector("article").classList.add("bythewater");
  } else if (cat.id == 4) {
    copy.querySelector("article").classList.add("outintheopen");
  }

  // appende
  document.querySelector(".landscapes_grid").appendChild(copy);
}
