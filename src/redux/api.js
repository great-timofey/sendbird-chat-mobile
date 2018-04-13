export default async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4493befd452f5d5eeea5c9d2de1306a8');
  const data = await response.json();
  return data;
};
