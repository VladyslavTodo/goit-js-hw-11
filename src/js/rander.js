export function marcupPictures(hits) {
  const markup = hits
    .map(data => {
      return `
    <div class="photo-card">
      <img src="${data.webformatURL}" alt="${data.tags}" class="gallery__image" loading="lazy" />
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
