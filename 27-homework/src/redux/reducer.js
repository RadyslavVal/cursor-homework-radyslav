import { ADD_POST, } from "./types";

const initialState = [
    {
        author: {
            name: "Sheev Palpatine",
            avatar: "https://starwars-visualguide.com//assets/img/characters/21.jpg",
            nickname: "@Darth Sidious",
        },
        content: `Guys, I'm sorry, but she's my granddaughter)`,
        image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/UZcoWB0AIq1flmJP5lxen8fcXStmnD.jpg",
        date: "17.07.2022",
        postInfo: {
            likes: '5',
            comments: '11',
            reposts: '1',
        }
    },
    {
        author: {
            name: "Luke Skywalker",
            avatar: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
            nickname: "@Wormie",
        },
        content: "She was my last Jedi apprentice. And nothing more...",
        image: "https://www.starwarsnewsnet.com/wp-content/uploads/2017/05/Luke-and-Rey.jpg",
        date: "16.07.2022",
        postInfo: {
            likes: '8',
            comments: '17',
            reposts: '4',
        }
    },
    {
        author: {
            name: "Anakin skywalker",
            avatar: "https://starwars-visualguide.com/assets/img/characters/11.jpg",
            nickname: "@dart_vader",
        },
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        date: "15.07.2022",
        postInfo: {
            likes: '23',
            comments: '111',
            reposts: '33',
        }
    },
];

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return [action.payload, ...state]
        default:
            return state
    }
}