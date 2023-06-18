import { Component } from 'react';
import Place from '../place/place.js'


export default class Board extends Component {
    render() {
        const style = {
            height: "700px",
            width: "700px",
            margin: "20px",
            padding: "20px",
            backgroundColor: "red",
            backgroundImage: "url(/board.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "center",
        };

        return (
            <div style={style}>
                {/* <Place left={"0px"} top={"0px"}></Place> */}
                {/* <Place left={"300px"} top={"30px"}></Place>
                <Place left={"300px"} top={"250px"}></Place>
                <Place left={"300px"} top={"500px"}></Place>
                <Place left={"500px"} top={"30px"}></Place>
                <Place left={"500px"} top={"250px"}></Place>
                <Place left={"500px"} top={"500px"}></Place>
                <Place left={"700px"} top={"30px"}></Place>
                <Place left={"700px"} top={"250px"}></Place>
                <Place left={"700px"} top={"500px"}></Place> */}
            </div>
        )
    }
  }
