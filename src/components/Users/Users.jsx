import React from 'react';
import style from './Users.module.css'
import axios from 'axios';

class User extends React.Component {


    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span style={{ cursor: 'pointer' }} onClick={(e) => { this.onPageChanged(p) }} className={(this.props.currentPage === p) ? style.selectedPage : ''}> {p}</span>
                    })}
                </div>
                <button onClick={this.getUsers}>Get users</button>
                {this.props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div className={style.box}>
                                <img src={u.photos.small || u.photos.large === null ? 'img/avatar.png' : u.photos.small} alt='' />
                            </div>
                            <div>
                                {u.followed
                                    ? (<button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>)
                                    : (<button onClick={() => { this.props.follow(u.id) }}>Follow</button>)}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>)}
            </div>
        )
    }
}

export default User;
