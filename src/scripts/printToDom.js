function print (brewName){
const printBrew= document.querySelector("#outputBreweries")
printBrew.innerHTML+=`<p>
${brewName.name}
</p>
<button id="brewSaveBTN">Save</button>
`}

function print (genreName){

    const printConcert = document.querySelector("#outputConcerts")
    printConcert.innerHTML+=`
    <p>
    ${genreName.name}<br>
    ${genreName.classifications[0].genre.name}
    </p>
    <button id="concertSaveBTN">Save</button>`
//     }
};
//array
// [""0""].classifications[""0""].genre.name