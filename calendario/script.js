function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon=${player1}.svg" alt="">
            <strong>${hour}</strong>
            <img src="./assets/icon=${player2}.svg" alt="">
        </li>
    `
}

function createCard(date, day, games){
    return `
    <div class="card">
    <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

document.querySelector('#app').innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="">
        <h1>Calendário</h1>
        </header>
    <main id="cards">
        ${createCard('24/11', 'segunda',
            createGame('brazil', '8:00', 'portugal') +
            createGame('paraguay', '12:00', 'germany') +
            createGame('peru', '16:00', 'england')
        )}
        ${createCard('28/11', 'quinta', 
            createGame('uruguay', '13:00', 'argentina') +
            createGame('andorra', '15:00', 'belgium') +
            createGame('albania', '20:00', 'angola')
        )}
        ${createCard('10/12', 'sábado',
            createGame('italy', '16:00', 'chile') + 
            createGame('armenia', '18:00', 'austria') +
            createGame('aruba', '22:00', 'australia')
        )}
    </main>`