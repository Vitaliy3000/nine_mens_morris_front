import { Component } from 'react';


export default class Stone extends Component {
    constructor(props) {
        super(props);
        this.state = { left: "10px", top: "10px" };
    }

    render() {
      let style = {
          height: "50px",
          width: "50px",
          margin: "20px",
          backgroundColor: "red",
      };

      const dragStart = (e) => {
        console.log(e.pageX);
      };

      const dragEnter = (e) => {
        console.log(e.pageX);
      };

      const mouseDown = (e) => {
          let shiftX = e.clientX - this.state.left;
          let shiftY = e.clientY - this.state.top;
  
        style.zIndex = 1000;
    
      moveAt(e.pageX, e.pageY);
    
      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }
    
  
      }

      return (
        // <div style={style} onDragStart={(e) => dragStart(e)} onDragEnter={(e) => dragEnter(e, index)} draggable></div>
        <div style={style} onDragStart={(e) => false} onMouseDown={(e) => mouseDown(e)}></div>
        // onClick={() => console.log("test")}
      )
    }
  }


  // ball.onmousedown = function(event) {

  //   let shiftX = event.clientX - ball.getBoundingClientRect().left;
  //   let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
  //   ball.style.position = 'absolute';
  //   ball.style.zIndex = 1000;
  //   document.body.append(ball);
  
  //   moveAt(event.pageX, event.pageY);
  
  //   // moves the ball at (pageX, pageY) coordinates
  //   // taking initial shifts into account
  //   function moveAt(pageX, pageY) {
  //     ball.style.left = pageX - shiftX + 'px';
  //     ball.style.top = pageY - shiftY + 'px';
  //   }
  
  //   function onMouseMove(event) {
  //     moveAt(event.pageX, event.pageY);
  //   }
  
  //   // move the ball on mousemove
  //   document.addEventListener('mousemove', onMouseMove);
  
  //   // drop the ball, remove unneeded handlers
  //   ball.onmouseup = function() {
  //     document.removeEventListener('mousemove', onMouseMove);
  //     ball.onmouseup = null;
  //   };
  
  // };
  
  // ball.ondragstart = function() {
  //   return false;
  // };