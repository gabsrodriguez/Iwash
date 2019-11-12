import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './presentation.module.css';

import geek from '../../img/presentation/4geeks.png';
import bootstrap from '../../img/presentation/bootstrap.png';
import js from '../../img/presentation/js.png';
import python from '../../img/presentation/python.png';
import react from '../../img/presentation/react.png';

const Presentation = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <section className={styles.section}>
            <div id="one" className={styles.firstPage} style={{height: windowHeight}}>
                <div className={styles.headerPage1}>
                    <div className={styles.icon4geeks}>
                        <img src={geek} width="100px" alt="mm"/>
                    </div>
                    <h1><i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash Smart Laundromat</h1>
                </div>
                <h2 className="text-center pt-4">Laundry services web application</h2>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#two" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
            <div id="two" style={{height: windowHeight}}>
                <div className={styles.header}>
                    <img src={geek} width="50px" alt="mm"/>
                    <h1>Page 2</h1>
                </div>
                <img src={bootstrap} alt="b" width="200px" />
                <img src={js} alt="b" width="100px" />
                <img src={python} alt="b" width="200px" />
                <img src={react} alt="b" width="100px" />
                hey two
                <br/>
                <a href="#one">previous</a>
                <a href="#three">next</a>
            </div>
            <div id="three" style={{height: windowHeight}}>
                <div className={styles.header}>
                    <img src={geek} width="50px" alt="mm"/>
                    <h1>Page 3</h1>
                </div>
                hey three
                <br/>
                <a href="#two">previous</a>
                <a href="#four">next</a>
            </div>
            <div id="four" style={{height: windowHeight}}>
                <div className={styles.header}>
                    <img src={geek} width="50px" alt="mm"/>
                    <h1>Page 4</h1>
                </div>
                hey four
                <br/>
                <a href="#three">previous</a>
                <a href="#five">next</a>
            </div>
            <div id="five" style={{height: windowHeight}}>
                <div className={styles.header}>
                    <img src={geek} width="50px" alt="mm"/>
                    <h1>Page 5</h1>
                </div>
                hey five
                <br/>
                <a href="#four">previous</a>
            </div>
        </section>
    );
};

export default Presentation;