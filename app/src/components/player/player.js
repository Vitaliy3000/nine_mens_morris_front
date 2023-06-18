import { Component } from 'react';
import Stone from '../stone/stone.js'


export default class Player extends Component {
    get_count_componets() {
        return 9;
    }

    render() {
        const style = {
            height: "100%",
            width: "100px",
            backgroundColor: "aqua",
        };

        // const stones = [];
        // for (let i = 0; i < this.get_count_componets(); i++) {
        //     stones.push(<Stone/>);
        // }

        return (
        <div style={style}>
            {/* {stones} */}
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
            <Stone></Stone>
        </div>
        )
    }
  }
  