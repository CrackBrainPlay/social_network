import { render, screen } from '@testing-library/react';
import profileReducer, { addPost, deletePost } from './profileReducer';

let state = {
    postsData: [
        { id: 1, text: 'How are you ?', counterLikes: 15 },
        { id: 2, text: "It's my first post", counterLikes: 4 },
        { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }]
}

// test('lenth of post shold be incremented', () => {
//     // 1. test data
//     let action = addPost("Hello world");

//     // 2. action
//     let newState = profileReducer(state, action);

//     //3. expectation
//     expect(newState.postsData.length).toBe(4);
// });


test('lenth of post shold be incremented', () => {
    // 1. test data
    let action = addPost("Hello world");

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData[3].text).toBe("Hello world");
});

test('after deleting length of messages should be decrementing', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(2);
});

test(`after deleting length shouldn't be decrementing if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(100);

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
});