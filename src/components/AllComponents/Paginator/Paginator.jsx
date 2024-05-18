import React, { useState } from 'react';
import style from './Paginator.module.css'

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10, ...props }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // const portionCount = Math.ceil(totalUsersCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortion = (portionNumber - 1) * portionSize;
    const rightPortion = portionNumber * portionSize;

    let disableLeftButton = (leftPortion > 1) ? true : false;
    let disableRightButton = (rightPortion < pagesCount) ? true : false;

    const decreasingValue = () => {
        setPortionNumber(prevPortionNumber => prevPortionNumber - 1);
        onPageChanged(leftPortion + 1 - portionSize);
    }

    const increaseValue = () => {
        setPortionNumber(prevPortionNumber => prevPortionNumber + 1);
        onPageChanged(rightPortion + 1);
    }

    return (
        <div className={style.content}>
            {!disableLeftButton && <div className={style.fakebox} />}
            {disableLeftButton && <button className={style.button} onClick={decreasingValue}>назад</button>}
            <div className={style.box}>{pages.slice(leftPortion, rightPortion).map(p => {
                // {arrayUsers.map(p => {
                return <span style={{ cursor: 'pointer' }}
                    onClick={(e) => { onPageChanged(p) }}
                    className={(currentPage === p) ? style.selectedPage : ''}> {p}</span>
            })}</div>
            {disableRightButton && <button className={style.button} onClick={increaseValue}>вперед</button>}
        </div>
    )
    // return (
    //     <div>
    //         {pages.map(p => {
    //             return <span style={{ cursor: 'pointer' }}
    //                 onClick={(e) => { onPageChanged(p) }}
    //                 className={(currentPage === p) ? style.selectedPage : ''}> {p}</span>
    //         })}
    //     </div>
    // )
}

export default Paginator;
