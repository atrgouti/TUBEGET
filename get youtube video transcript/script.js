const input = document.getElementById('text')
const btn = document.getElementById('btn')
const outPut = document.querySelector('.output')

btn.addEventListener('click', () => {
    let inputValue = input.value
    let x = inputValue
  .replace(/[0-9]/g, "")
  .replace(/[:]/g, "")
  .split(
    `

`
  )
  .join(" ");

console.log(x);
input.value = ''
    const paragraph = document.createElement('p')
    paragraph.innerHTML = x
    outPut.appendChild(paragraph)
})