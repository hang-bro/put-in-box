
export default (element: HTMLElement) => {
  function handleScroll(event: WheelEvent) {
    element.scrollBy({
      left: event.deltaY, // 根据垂直滚轮方向进行水平滚动
      behavior: 'smooth'
    })
  }
  element.addEventListener('mouseenter', () => {
    // 鼠标进入元素时添加滚动事件监听器
    element.addEventListener('wheel', handleScroll)
  })

  element.addEventListener('mouseleave', () => {
    // 鼠标离开元素时移除滚动事件监听器
    element.removeEventListener('wheel', handleScroll)
  })
}
