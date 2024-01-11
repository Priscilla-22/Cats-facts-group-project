fetch ('https://cat-fact.herokuapp.com/facts')
.then(response => response.json())
.then(facts=> { renderCatsFacts(facts)
})

function renderCatsFacts(facts){
    const catsFactsContainer = document.getElementById("cats-facts-container")
facts.forEach(fact =>{
const factsDiv = document.createElement("div")
factsDiv.classList.add("facts")
factsDiv.textContent = fact.text
catsFactsContainer.appendChild(factsDiv)
})
}