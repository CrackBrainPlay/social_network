// import React, { PureComponent } from 'react';
import React from 'react';
import style from './MyPosts.module.css';
import AddPostContainer from './AddPost/AddPostContainer';
import OutputPostsContainer from './OutputPosts/OutputPostsContainer';

const MyPosts = React.memo((props) => {
    console.log("Render MyPosts");
    // debugger;
    return (
        <div className={style.content} >
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                <AddPostContainer />
                <OutputPostsContainer />
            </div>
        </div>
    );
});

export default MyPosts;


// class MyPosts extends PureComponent {

//     render() {
//         console.log("MyPosts render");
//         return (
//             <div className={style.content} >
//                 <div className={style.item}>
//                     My posts
//                     <div className={style.item}>
//                         New post
//                     </div>
//                     <AddPostContainer />
//                     <OutputPostsContainer />
//                 </div>
//             </div>
//         );
//     }
// }

// export default MyPosts;

