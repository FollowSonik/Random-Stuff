const sendBtn = document.querySelector('#sendBtn')
const messageIn = document.querySelector('#messageIn')
const messageOut = document.querySelector('#messageOut')

sendBtn.addEventListener('click', sendMsg)

function sendMsg() {
  let content = messageIn.value
  if (!content) return alert('Please Enter Valid Value.')

  messageOut.innerHTML = content
  messageIn.value = ''
}