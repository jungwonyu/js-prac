document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.searchBtn');
  const contents = document.querySelector('.contents');
  const popContents = document.querySelector('.popContents');
  const background = document.querySelector('.background');

  searchBtn.addEventListener('click', () => {
    const keyWord = document.querySelector('#search').value;
    contents.querySelectorAll('iframe').forEach((iframe) => iframe.remove());
    createIframe(keyWord);
  });

  function createIframe(keyWord) {
    const API_KEY = 'AIzaSyAyufI03p6DYbUgE-RXtnNY9Br97n-7GHo';
    const youtubeAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyWord}&type=video&key=${API_KEY}`;

    fetch(youtubeAPI)
      .then((response) => response.json())
      .then((data) => {
        const items = data.items;
        items.forEach((item) => {
          const videoId = item.id.videoId;
          const thumbnail = item.snippet.thumbnails.medium.url;
          const title = item.snippet.title;
          const channelTitle = item.snippet.channelTitle;

          const img = document.createElement('img');
          const iframe = document.createElement('iframe');

          const div = document.createElement('div');
          const h3 = document.createElement('h3');
          const p = document.createElement('p');
          const p2 = document.createElement('p');

          h3.textContent = title;
          h3.setAttribute('class', 'title');
          if (h3.textContent.length > 40) {
            h3.textContent = h3.textContent.substr(0, 40) + '...';
          }
          p.textContent = channelTitle;
          p.setAttribute('class', 'channelTitle');

          const date = new Date(item.snippet.publishTime);
          const now = new Date();
          const diff = now - date;
          const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
          const diffMonths = Math.floor(diffDays / 30);
          const diffYears = Math.floor(diffMonths / 12);

          if (diffYears > 0) {
            p2.textContent = `${diffYears}년 전`;
          } else if (diffMonths > 0) {
            p2.textContent = `${diffMonths}개월 전`;
          } else if (diffDays > 0) {
            p2.textContent = `${diffDays}일 전`;
          } else {
            p2.textContent = '오늘';
          }

          p2.setAttribute('class', 'date');
          div.setAttribute('class', 'frameBox');

          img.setAttribute('src', thumbnail);
          img.setAttribute('alt', 'thumbnail');
          img.setAttribute('width', '380');
          img.setAttribute('height', '220');
          img.setAttribute('class', 'thumbnail');

          div.appendChild(img);

          div.appendChild(h3);
          div.appendChild(p);
          div.appendChild(p2);
          contents.appendChild(div);

          img.addEventListener('click', () => {
            iframe.setAttribute('id', 'ytplayer');
            iframe.setAttribute('type', 'text/html');
            iframe.setAttribute('width', '560');
            iframe.setAttribute('height', '315');
            iframe.setAttribute(
              'src',
              `https://www.youtube.com/embed/${videoId}`
            );
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');

            popContents.appendChild(iframe);
            popContents.classList.add('on');
            background.classList.add('on');
          });

          background.addEventListener('click', () => {
            resetBackground();
          });
        });
      });
  }

  function resetBackground() {
    popContents.classList.remove('on');
    popContents.querySelectorAll('iframe').forEach((iframe) => iframe.remove());
    background.classList.remove('on');
  }
});
