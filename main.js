function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
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
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "6:00", "argentina") +
      createGame("germany", "17:00", "uruguay") +
      createGame("italy", "19:00", "venezuela")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("bolivia", "13:00", "england") +
      createGame("portugal", "20:00", "uruguay") +
      createGame("china", "22:00", "austria")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("belgium", "8:00", "france") +
      createGame("canada", "12:00", "iran") +
      createGame("turkey", "16:00", "spain")
  ) +
  createCard(
    "12/12",
    "segunda",
    createGame("brazil", "16:00", "russia") +
      createGame("nigeria", "18:00", "mexico") +
      createGame("greece", "21:00", "ecuador")
  )

