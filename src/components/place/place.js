import { Component } from 'react';
// import Stone from '../stone/stone.js'


export default class Place extends Component {
    constructor(props) {
        super(props);
        this.state = { stone_color: null };
    }

    render() {
        const style = {
            height: "80px",
            width: "80px",
            backgroundColor: "blue",
            borderRadius: "100%",
            // position: "relative",
            position: "absolute"
        };
        style.left = this.props.left;
        style.top = this.props.top;
        console.log(style)

        return (
            <div style={style}></div>
        )

        if (this.state.stone_color === null) {
            return (
                <div className={styles.place} style={{left: this.props.left, top: this.props.top}}></div>
            )
        } else {
            return (
                <div className={styles.place}></div>
            )
        }
    }
  }
