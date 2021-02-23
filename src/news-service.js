export default class NewsService {
    getData = async (length) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
        const data = await res.json();
        return data;
    }
    getComment = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        const data = await res.json();
        return data;
    }
}