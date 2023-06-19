import { Component } from 'react';


export default class Stone extends Component {
    // constructor(props) {
    //     super(props);
        // console.log("create")
        // this.state = { left: 10, top: 10 };
        // this.handleDragStart = this.handleDragStart.bind(this);
        // this.handleDrag = this.handleDrag.bind(this);
        // this.handleDragEnd = this.handleDragEnd.bind(this);
        // this.handleMouseDown = this.handleMouseDown.bind(this);
        // this.handleMouseMove = this.handleMouseMove.bind(this);
    // }

    // handleDragStart(event) {
    //   // This method runs when the dragging starts
    //     console.log("Started")
    //     return false
    // }

    // handleDrag(event) {
    //     // This method runs when the component is being dragged
    //     console.log("Dragging...")
    //     this.setState({
    //       left: event.clientX,
    //       top: event.clientY,
    //     })
    // }
  
    // handleDragEnd(event) {
    //     // This method runs when the dragging stops
    //     console.log("Ended")
    //     this.setState({
    //       left: event.clientX - 50,
    //       top: event.clientY - 50,
    //     })
    // }

    // handleMouseDown (event) {
    //   console.log("MouseDown")
    // }

    // handleMouseMove(event) {
    //   console.log("MouseMove")
    // }

    render() {
      const style = {
          height: "50px",
          width: "50px",
          // position: "absolute",
          // left: this.state.left,
          // top: this.state.top,
          margin: "20px",
          backgroundColor: "red",
      };

      // const dragStart = (e) => {
      //   console.log(e.pageX);
      // };

      // const dragEnter = (e) => {
      //   console.log(e.pageX);
      // };

      // const mouseDown = (e) => {
      //     let shiftX = e.clientX - this.state.left;
      //     let shiftY = e.clientY - this.state.top;
  
      //   style.zIndex = 1000;
    
      // moveAt(e.pageX, e.pageY);
    
      // function moveAt(pageX, pageY) {
      //   ball.style.left = pageX - shiftX + 'px';
      //   ball.style.top = pageY - shiftY + 'px';
      // }

      // function dragMouseDown(e) {
      //   // console.log(e.clientX)
      //   // e = e || window.event;
      //   // e.preventDefault();
      //   // // get the mouse cursor position at startup:
      //   // pos3 = e.clientX;
      //   // pos4 = e.clientY;
      //   // document.onmouseup = closeDragElement;
      //   // // call a function whenever the cursor moves:
      //   // document.onmousemove = elementDrag;
      // }
      this.props.provided.draggableProps.style = {...this.props.provided.draggableProps.style, ...style}
      return (
        // <div style={style} onDragStart={(e) => dragStart(e)} onDragEnter={(e) => dragEnter(e, index)} draggable></div>
        // <div style={style} onDragStart={(e) => false} onMouseDown={(e) => mouseDown(e)}></div>
        // <div style={style} onMouseDown={dragMouseDown} draggable></div>
        
        <div {...this.props.provided.draggableProps} {...this.props.provided.dragHandleProps}></div>
        // ref={this.props.provided.innerRef} 
        // {...provided.draggableProps} {...provided.draggableProps} =>
// {...provided.draggableProps} {...provided.dragHandleProps}
        
        // onDragStart={this.handleDragStart}
          // onDrag={this.handleDrag}
          // onDragEnd={this.handleDragEnd}
        //   onMouseDown={this.handleMouseDown}
        //   onMouseMove={this.handleMouseMove}
        //   draggable
        // ></div>
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