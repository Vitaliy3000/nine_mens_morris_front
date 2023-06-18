import { Component } from 'react';
import styles from '../../app/page.module.css'
import Stone from '../stone/stone.js'


export default class Place extends Component {
    constructor(props) {
        super(props);
        this.state = { stone_color: null };
    }

    render() {
        if (this.state.stone_color === null) {
            return (
                <div className={styles.place}></div>
            )
        } else {
            return (
                <div className={styles.place}></div>
            )
        }
        
    }
  }
