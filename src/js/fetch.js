import { axios } from 'axios';

export async function fetchImages({ inputValue, page, limitpage }) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: '36218238-9f9ebba5e408fb2e6d1a3e335',
    q: inputValue,
    page: page,
    per_page: limitpage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const options = new URLSearchParams(params);

  const url = `${BASE_URL}/?${options}`;
  console.log(url);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.status);
  }
  return await res.json();
}
