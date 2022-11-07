function createGame(player1, hour, player2) {
  return `
    <li>
      <img
        src="assets/ico_${player1}.svg"
        alt="Imagem da bandeira do ${player1}."
      />
      <strong>${hour}</strong>
      <img
        src="assets/ico_${player2}.svg"
        alt="Imagem da bandeira da ${player2}."
      />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta", createGame("brasil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brasil", "13:00", "switzerland") +
      createGame("portugal", "18:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brasil"))
