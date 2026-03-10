const buyButton = document.getElementById("buyID")
const lefisheSound = new Audio('assets/le_fishe.mp3')

// const significa variavel imutavel
// let significa variavel dinamica

// e aparentemente javascript é single thread e nao possui sleeps/wait
// entao é focado em assincronia

const fishText = document.getElementById("fish-text")
const fishImage = document.getElementById("chocolateFish")

// fishText.style.visibility = "hidden"
// fishImage.style.opacity = 0

function showTheFish() {
    let opacity = 0;

    // opacidade 1 = visivel
    // opacidade 0 = invisivel

    // setInterval é assincrono, roda separado da thread principal
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05;
            fishImage.style.opacity = opacity;
        } else {
            clearInterval(interval)

        }
    }, 100)

}

buyButton.addEventListener("click", async function () {
    await lefisheSound.play()
    buyButton.remove()

    fishText.style.visibility = "visible"

    // equivalente ao task.delay
    setTimeout(() => {
        showTheFish()
    }, 3000) // 3000 milis = 3seg

    try {
        const reposta = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        })

        const dados = await reposta.json()

    } catch (error) {
        console.error("erro na conexão: ", error)
    }
})