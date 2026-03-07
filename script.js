const buyButton = document.getElementById("buyID")
const lefisheSound = new Audio('assets/le_fishe.mp3')

buyButton.addEventListener("click", async function () {
    try {
        const reposta = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        })

        const dados = await reposta.json()

        lefisheSound.play()
        buyButton.remove()

    } catch (error) {
        console.error("erro na conexão: ", error)
    }
})