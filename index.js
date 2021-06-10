/** JavaScript */

// Simule l'information du beau temps.
function isGoodWeather () {
  return Math.random() < 0.20
}
let goodDays = 0

for (let i = 0; i < 365; i++) {
  if (isGoodWeather()) {
    goodDays++
    console.log('Jour ' + i + ': il fait beau')
  } else {
    console.log('Jour ' + i + ': il fait moche')
  }
}

const percent = Math.round(goodDays / 365 * 100)
console.log('Pourcentage de jours beaux dans l\'année: ' + percent + '%')
let goodDay = false
let i = 0

while (!goodDay) {
  goodDay = isGoodWeather()
  if (goodDay) {
    console.log('Jour ' + i + ': il fait beau je sors!')
  } else {
    console.log('Jour ' + i + ': je sortirai demain...')
  }
  i++
}
for (let i = 1; i < 53; i++) {
  // Début de la semaine i
  let goodDay = false
  let weekday = 1

  // Tant qu'aucun beau jour n'est trouvé et que la semaine n'est pas terminée
  while (!goodDay && weekday <= 7) {
    goodDay = isGoodWeather()

    if (goodDay) {
      console.log('Je suis sorti cette semaine ' + i + ', le jour ' + weekday)
    }
    weekday++
  }
}
