const quotes = [
  {
    name: 'Who',
    quote: 'Who sucked, who just only preparing to suck?'
  },
  {
    name: 'Bruce Lee',
    quote: 'Пока не доказано – не ебёт, что сказано!'
  },
  {
    name: 'Кто-то',
    quote: 'Иди своей дорогой, сталкер.'
  },
  {
    name: 'Самый Прекрасный Человек В Этом Мире',
    quote: 'Хочется чего-то безумного. Уехать куда-то подальше и потеряться, чтоб никто не знал где ты. И жить бы на каком-нибудь острове.'
  },
  {
    name: 'Тот Же Легендарный Человек',
    quote: 'Меня уже ничего не спасёт, а вот тебя спасёт..'
  },
  {
    name: 'Денис Измайлов',
    quote: 'Бурдж-Халифа'
  },
  {
    name: 'Эта Женщина (отсылка к Шерлоку, да и в Шерлоке её имя такое же)',
    quote: 'Одна я без места в этом мире.'
  },
  {
    name: 'Рандом из чата',
    quote: 'Кто сосал +, кто собирается ++'
  },
  {
    name: 'Она',
    quote: 'Просто я – человек или нечто, что иногда достаёт всех подряд и нервирует, напоминая о своём существовании.'
  },
  {
    name: 'Соник',
    quote: 'Но зато я знаю, что у тебя улыкба, как тёплый ветер.'
  },
  {
    name: 'Соник',
    quote: 'Особенно, когда мне отвечаешь +9999 в степени 9999 к радости.'
  },
]

// const simpleQuotes = [
//   {
//     name: 'Author Number 1',
//     quote: 'Quote Number 1'
//   }
// ]

const quoteBtn = document.querySelector('#quoteBtn')
const quoteAuthor = document.querySelector('#quoteAuthor')
const quote = document.querySelector('#quote')

quoteBtn.addEventListener('click', displayQuote)

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length)
  quoteAuthor.innerHTML = quotes[number].name
  quote.innerHTML = quotes[number].quote
}