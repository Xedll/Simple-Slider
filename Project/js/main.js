// @ts-nocheck
const info = ['<div class="red"></div>', '<div class="blue"></div>', '<div class="yellow"></div>', '<div class="green"></div>']

let count = 0

console.log(info[count])

window.onload = () => {
   document.querySelector('.item').innerHTML = `${info[count]}`
}

document.querySelectorAll('button').forEach((item) => {
   if (item.getAttribute('class') == 'next') {
      item.onclick = () => {
         if (count > info.length - 2) {
            count = 0
            console.log(count)
         }
         else {
            count += 1
            console.log(count)
         }
         document.querySelector('.item').innerHTML = `${info[count]}`
      }
   }
   else if (item.getAttribute('class') == 'previous') {
      item.onclick = () => {
         if (count < 1) {
            count = info.length - 1
            console.log(count)
         }
         else {
            count -= 1
            console.log(count)
         }
         document.querySelector('.item').innerHTML = `${info[count]}`
      }
   }
})