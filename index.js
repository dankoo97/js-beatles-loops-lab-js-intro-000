// add solution here

function theBeatlesPlay(musicians, instruments) {
  var theyPlay = []

  for (let i = 0; i < musicians.length; i++) {
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return theyPlay
}

function johnLennonFacts(facts) {
  let i = 0

  while (i < facts.length) {
    facts[i] += "!!!"
  }
}
