async function fetchData() {
    let userInput = document.getElementById("input").value
    let responseGigphy = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=AbSNfVKiCVf9GMPAnAsNGuG4QlhrnIAo&q=${userInput}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    let dataGiphy = await responseGigphy.json()

    let arrayGigphy = dataGiphy.data
    console.log(arrayGigphy)

    arrayGigphy.forEach(element => {
        let newGIF = document.createElement ("img")
        newGIF.src = element.images.original.url 
        document.getElementById("giphy-container").appendChild(newGIF)   
    });
}

function clearData() {
    document.getElementById("giphy-container").textContent = ""
}


