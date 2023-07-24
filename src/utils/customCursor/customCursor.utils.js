export const followMouse = (event,referenceElement) => {
    if(!referenceElement.current) return
      
      const element = referenceElement.current
      let x = (event.pageX - element.offsetLeft) - 50
      let y = (event.pageY - element.offsetTop) - 120
  
      if(y >= ((element.clientHeight) - 100)) y = element.clientHeight - 100
      
      console.log(`x=>${x}, y=>${y}`)
      console.log(`offset: ${element.offsetHeight}`)
      return {
        x,y
    }
}