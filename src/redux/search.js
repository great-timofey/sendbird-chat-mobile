export default async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4493befd452f5d5eeea5c9d2de1306a8&query=${title}`);
    const data = await response.json();
    return data;
};