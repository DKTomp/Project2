async function fetchData() {
    try {
        let userInput = document.getElementById("input-search").value
        let userNumber = document.getElementById("input-number").value

        if (userNumber > 30) {
            userNumber = 30
        }

        let responseGigphy = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=AbSNfVKiCVf9GMPAnAsNGuG4QlhrnIAo&q=${userInput}&limit=${userNumber}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        let dataGiphy = await responseGigphy.json()
        let arrayGigphy = dataGiphy.data

        arrayGigphy.forEach(element => {
            let newGIF = document.createElement ("img")
            newGIF.src = element.images.original.url 
            document.getElementById("giphy-container").appendChild(newGIF)   
        });
    } catch (error) {
        console.log("fetch error")
    }
}

function clearData() {
    document.getElementById("giphy-container").textContent = ""
    document.getElementById("input-search").value = ""
    document.getElementById("input-number").value = ""
    
}


