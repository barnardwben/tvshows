const form = document.querySelector('.tv-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  document.querySelector('.shows-container').innerHTML = '';
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } }
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = '';
})

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.querySelector('.shows-container').append(img)
    }
  }
}