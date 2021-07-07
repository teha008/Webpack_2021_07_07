import { sum } from './math.js'
import './app.css'
import 웹팩이미지 from './webpack.png'

window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#app')
  el.innerHTML = `
  <h1>1 + 2 = ${sum(1, 2)}</h1>
  <img src="${웹팩이미지}" alt="웹팩"/>
  `
})
