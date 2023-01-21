const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apiKey = "fgA59EIiLlJdXtCFZ0zFtJaqQTVzakek4XgRXpxg";

const options = {
    method: "GET",
    headers : {
        "X-Api-Key" : apiKey ,
    },
}

const ApiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    
    try {
    
        jokeEl.innerText = "Updating....";

        btnEl.disabled = true;
        btnEl.innerText = "Loading..";

        const reponse = await fetch(ApiUrl, options);
        const data = await reponse.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";

        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An Error Occur , Try After Some Time";

        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";

        console.log(error)
    }

    
}




btnEl.addEventListener("click", getJoke)