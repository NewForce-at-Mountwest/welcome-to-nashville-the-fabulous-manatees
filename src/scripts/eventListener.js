

const brewSearchBtn = document.querySelector("#brewSearchButton");
// console.log(brewSearchBtn);
brewSearchBtn.addEventListener("click",function(){
    // console.log("brew-button");
    let brewSearch = document.querySelector(".breweries").value
    brewManager.getAllBreweries(brewSearch)



})