document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'batman',
      img: '/heroes/batman.png'
    },
    {
      name: 'captain_america',
      img: '/heroes/captain_america.png'
    },  
    {
      name: 'flash',
      img: '/heroes/flash.png'
    }, 
    {
      name: 'girl_spider',
      img: '/heroes/girl_spider.png'
    }, 
    {
      name: 'hulk',
      img: '/heroes/hulk.png'
    }, 
    {
      name: 'iron_man',
      img: '/heroes/iron_man.png'
    }, 
    {
      name: 'spider_man',
      img: '/heroes/spider_man.png'
    }, 
    {
      name: 'superman',
      img: '/heroes/superman.png'
    }, 
    {
      name: 'thor',
      img: '/heroes/thor.png'
    }, 
    {
      name: 'wonder_woman',
      img: '/heroes/wonder_woman.png'
    }, 
    {
      name: 'batman',
      img: '/heroes/batman.png'
    },
    {
      name: 'captain_america',
      img: '/heroes/captain_america.png'
    },  
    {
      name: 'flash',
      img: '/heroes/flash.png'
    }, 
    {
      name: 'girl_spider',
      img: '/heroes/girl_spider.png'
    }, 
    {
      name: 'hulk',
      img: '/heroes/hulk.png'
    }, 
    {
      name: 'iron_man',
      img: '/heroes/iron_man.png'
    }, 
    {
      name: 'spider_man',
      img: '/heroes/spider_man.png'
    }, 
    {
      name: 'superman',
      img: '/heroes/superman.png'
    }, 
    {
      name: 'thor',
      img: '/heroes/thor.png'
    }, 
    {
      name: 'wonder_woman',
      img: '/heroes/wonder_woman.png'
    }, 

  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', '/heroes/back.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '/heroes/back.png')
      cards[optionTwoId].setAttribute('src', '/heroes/back.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', '/heroes/match.gif')
      cards[optionTwoId].setAttribute('src', '/heroes/match.gif')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '/heroes/back.png')
      cards[optionTwoId].setAttribute('src', '/heroes/back.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
