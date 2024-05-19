import React from 'react';
// import React, { Component } from 'react';
import style from './OutputPosts.module.css';
import Posts from '../Posts/Posts';
// import PreLoader from '../../../AllComponents/PreLoader/PreLoader';

// window.props = [];

// class OutputPosts extends Component {

//     shouldComponentUpdate(nextProps, nextState) {
//         debugger;
//         console.log("OutputPosts shouldComponentUpdate");
//         // return nextProps != this.props;
//         return nextProps !== this.props || nextState !== this.state;
//         // return false;
//     }

//     render() {
//         console.log("Render OutputPosts");
//         // console.log(this.props);
//         // window.props.push(this.props);
//         let postsElement = this.props.postsData
//             .map(post => (<Posts message={post.text} counterLikes={post.counterLikes} key={post.id} />))

//         return (
//             <div className={style.content} >
//                 <div className={style.item}>
//                     {postsElement}
//                 </div>
//             </div>
//         );
//     }
// }

// export default OutputPosts;

const OutputPosts = React.memo((props) => {
    // console.log("Render OutputPosts");
    // console.log(props);

    let postsElement = props.postsData
        .map(post => (<Posts message={post.text} counterLikes={post.counterLikes} key={Math.random()} />))
    // .map(post => (<Posts message={post.text} counterLikes={post.counterLikes} key={post.id} />))

    return (
        <div className={style.content} >
            <div className={style.item}>
                {postsElement}
            </div>
        </div>
    );
});

export default OutputPosts;