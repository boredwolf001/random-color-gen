const genBtn = document.querySelector('#gen-btn')
const colorArea = document.querySelector('#color-area')
const message = document.querySelector('.message')

const chars = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
]
let color = ''

function clearColor() {
  color = '#'
}
function setColor() {
  clearColor()
  for (let i = 1; i <= 6; i++) {
    color += chars[Math.floor(Math.random() * 16)]
  }
  colorArea.style.background = color
  colorArea.innerHTML = color
}

setColor()

genBtn.addEventListener('click', () => {
  setColor()
})

colorArea.addEventListener('click', () => {
  if (!message.classList.contains('show')) {
    message.classList.add('show')
    message.style.background = color
  }
  setTimeout(() => message.classList.remove('show'), 2000)
  navigator.clipboard.writeText(color)
})
