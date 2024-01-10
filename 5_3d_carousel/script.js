;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const cellCount = 6 // 셀의 갯수
  let selectedIndex = 0 // 선택된 셀의 인덱스

  const prevButton = get('.prev_button')
  const nextButton = get('.next_button')
  const carousel = get('.carousel')

  const rotateCarousel = () => {
    const angle = (selectedIndex / cellCount) * -360 // 회전각도 계산
    carousel.style.transform = `translateZ(-288px) rotateY(${angle}deg)` // carousel style 변경
  }

  prevButton.addEventListener('click', () => {
    selectedIndex--
    rotateCarousel()
  })

  nextButton.addEventListener('click', () => {
    selectedIndex++
    rotateCarousel()
  })
  
})()
