import { Component } from 'react';
import styles from '../../app/page.module.css'
import Place from '../place/place.js'


export default class Board extends Component {
    render() {
        return (
            <div className={styles.board}>
                <Place left></Place>
                <Place></Place>
                <Place></Place>
            </div>
        )
    }
  }
