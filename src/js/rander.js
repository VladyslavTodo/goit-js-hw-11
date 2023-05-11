export function marcupPictures(hits) {
  const markup = hits
    .map(data => {
      return `
      
    <div class="photo-card">
    <a class='gallery__link' href='${data.largeImageURL}'>
      <img src="${data.webformatURL}" alt="${data.tags}" class="gallery__image" loading="lazy" />
      </a>
        <div class="info">
            <p class="info-item">
                <b>${data.likes} likes</b>
            </p>
            <p class="info-item">
                <b>${data.views} views</b>
            </p>
            <p class="info-item">
                <b>${data.comments} comments</b>
            </p>
            <p class="info-item">
                <b>${data.downloads} downloads</b>
            </p>
        </div>
    </div>
     
          `;
    })
    .join('');
  return markup;
}
