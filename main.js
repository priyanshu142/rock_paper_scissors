function computerplay(num) {
  if (num == 0) {
    return 'rock'
  } else if (num == 1) {
    return 'scissors'
  } else {
    return 'paper'
  }
}

function playground(playerselection, computerselection) {
  if (playerselection == 'rock' && computerselection == 'scissors') {
    return console.log('you win')
  } else if (playerselection == 'paper' && computerselection == 'rock') {
    return console.log('you win')
  } else if (playerselection == 'scissors' && computerselection == 'paper') {
    return console.log('you win')
  } else if (playerselection == 'rock' && computerselection == 'paper') {
    return console.log('you lose')
  } else if (playerselection == 'scissors' && computerselection == 'rock') {
    return console.log('you lose')
  } else if (playerselection == 'paper' && computerselection == 'scissors') {
    return console.log('you lose')
  } else {
    return console.log('you lose')
  }
}
function case_insensitive(inputval) {
  return (insensitive = inputval.toLowerCase())
}

let i
for (i = 1; i <= 5; i++) {
  let inputval = prompt('enter you choice')

  let value_of = case_insensitive(inputval)
  let ans = playground(value_of, computerplay(Math.floor(Math.random() * 3)))
  console.log(ans)
}
