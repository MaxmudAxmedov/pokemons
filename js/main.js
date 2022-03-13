var container = document.querySelector(".container");
var row = document.createElement("div");
row.classList.add("row","g-5","mt-5");
var result = 0;

for(var i of pokemons){
  result =
  `
    <div class="col-3 pt-5">
      <div class="card text-center p-1 h-100">
        <img src="${i.img}" class="card-img img-fluid" alt="pokemon">
        <div class="card-body d-flex flex-column justify-content-end">
          <h3 class="card-title">${i.name}</h3>
          <p class="card-text>${i.num}</p>
          <p class="card-text>${i.candy}</p>
        </div>
    </div>
  `
  row.innerHTML += result;
  container.appendChild(row);
}

var elInput = document.querySelector("#search");
var elBtn = document.querySelector(".btn");

elInput.addEventListener("keypress", function (e) {
  var inputValue = e.target.value.toLocaleLowerCase();

  var filterVal= pokemons.filter(function (names) {
  return names.name.toLocaleLowerCase().includes(inputValue);
  });

  row.innerHTML = " ";

  filterVal.forEach(function(type) {
    
    result =
    `
      <div class="col-3 pt-5">
        <div class="card text-center p-1 h-100">
          <img src="${type.img}" class="card-img img-fluid" alt="pokemon">
          <div class="card-body d-flex flex-column justify-content-end">
            <h3 class="card-title">${type.name}</h3>
            <p class="card-text>${type.num}</p>
            <p class="card-text>${type.candy}</p>   
          </div>
      </div>
    `   
    row.innerHTML += result;
    container.appendChild(row);
  });

});















