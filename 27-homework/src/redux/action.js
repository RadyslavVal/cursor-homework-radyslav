import { ADD_POST } from "./types";

export const addPost = (post) => {
    let { author, content, image, date } = post;
    return {
        type: ADD_POST,
        payload: {
            author: {
                name: author.name,
                avatar: author.avatar,
                nickname: author.nickname,
            },
            content: content,
            image: image,
            date: date,
            postInfo: {
                likes: '0',
                comments: '0',
                reposts: '0',
            }
        },
    }
}

