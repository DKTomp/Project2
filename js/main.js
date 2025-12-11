async function fetchData() {
    try {
        document.getElementById("giphy-container").textContent = ""
        let userInput = document.getElementById("input-search").value
        let userNumber = document.getElementById("input-number").value

        inputChecks(userNumber, userInput)

        let responseGigphy = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=gjhOAzG5MmkQGczS2c1t5a3JMfrIwrG5&q=${userInput}=&limit=${userNumber}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        let dataGiphy = await responseGigphy.json()
        let arrayGigphy = dataGiphy.data

        arrayGigphy.forEach(element => {
            let newGIF = document.createElement ("img")
            newGIF.src = element.images.original.url 
            document.getElementById("giphy-container").appendChild(newGIF)   
        })
    } catch (error) {
        console.log("fetch error")
    }
}

function inputChecks(Number, input) {
    if (Number > 30 || Number === "") {
            return userNumber = 30
        }

        if (input === "") {
            let errorMessage = document.createElement("p")
            errorMessage.innerText = "Please enter a search term in the search box"
            document.getElementById("giphy-container").appendChild(errorMessage)
            return;
        }
}

function clearData() {
    document.getElementById("giphy-container").textContent = ""
    document.getElementById("input-search").value = ""
    document.getElementById("input-number").value = ""    
}


