import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './WashHistory.module.css';

const WashHistory = () => {

    const {windowHeight} = useContext(UserContext);
    const {historyWashing} = useContext(UserContext); 

    console.log(historyWashing);

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
            <div className="container">
                <h2 className="text-center">Washing History</h2>
                {!historyWashing ? 'Loading...' : historyWashing.map((item,index) => {
                    var timestamp = item.start;
                    // var ts = new Date();
                    // console.log(ts.toDateString());
                    var date = new Date(timestamp);
                    var startDate = date.toDateString();
                    // datevalues = [
                    //    date.getFullYear(),
                    //    date.getMonth()+1,
                    //    date.getDate(),
                    //    date.getHours(),
                    //    date.getMinutes(),
                    //    date.getSeconds(),
                    // ];
                    return (
                        <div key={index} className={["alert", styles.alertBlue].join(' ')} >
                            <div className="row text-center">
                                <div className={["col", styles.cycle].join(' ')}> <span role="img" aria-label="dd">💧</span> {item.cicle}</div>
                                <div className={["col", styles.time].join(' ')}> <span role="img" aria-label="dd">⏱️</span> {item.time}min</div>
                                <div className={["col", styles.number].join(' ')}> <span role="img" aria-label="ds">#️⃣</span> {item.machineNumber}</div>
                                <div className={["col", styles.number].join(' ')}> <span role="img" aria-label="ds">$</span> {item.price}</div>
                                <div className={["col", styles.number].join(' ')}>  {startDate}</div>
                                <div className={["col", styles.number].join(' ')}>  {item.cycleComplete}</div>
                            </div>
                            <br/>
                        </div>
                    )
                })}
            </div>
            <hr/>
            <br/><br/>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>

                <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default WashHistory;