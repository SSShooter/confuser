import map from './map.js'
const testStr = 'hello world, how are you? what is your name?'

export default function confuser(str = testStr) {
  let confusedArr = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const confusedMap = map[char]
    if (char !== ' ' && confusedMap) {
      confusedArr.push(
        confusedMap[Math.floor(Math.random() * confusedMap.length)]
      )
    } else {
      confusedArr.push(char)
    }
  }
  return confusedArr
}
