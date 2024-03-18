const fetch = require('node-fetch')
const fs = require('fs')

fetch('https://www.unicode.org/Public/security/revision-03/confusablesSummary.txt')
  .then((response) => response.text())
  .then((data) => {
    const lines = data.split('\n').filter((line) => line.trim().startsWith('#'))
    const map = {}
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const [_, real, ...confuse] = line.split('	')
      map[real] = confuse
    }
    fs.writeFileSync('output.json', JSON.stringify(map, null, 2))
  })
