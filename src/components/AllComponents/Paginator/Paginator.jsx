import React from 'react';
import style from './Paginator.module.css'

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, ...props }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span style={{ cursor: 'pointer' }}
                    onClick={(e) => { onPageChanged(p) }}
                    className={(currentPage === p) ? style.selectedPage : ''}> {p}</span>
            })}
        </div>
    )
}

export default Paginator;
