import { Component } from 'react';
import styles from '../../app/page.module.css'
import Stone from '../stone/stone.js'


export default class Player extends Component {
    get_count_componets() {
        return 9;
    }

    render() {
        const stones = [];
        for (let i = 0; i < this.get_count_componets(); i++) {
            stones.push(<div className={styles.stone}/>);
        }

        return (
        <div>
            {stones}
        </div>
        )
    }
  }
  