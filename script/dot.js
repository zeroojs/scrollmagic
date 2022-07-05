/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-07-04 10:18:39
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-07-04 10:24:52
 */
const dotBox = document.querySelector('.dot-box')
dotBox.addEventListener('mouseenter', function(e) {
  e.stopPropagation()
  dotBox.classList.toggle('active')
})

document.addEventListener('mouseleave', () => {
  dotBox.classList.toggle('active')
})