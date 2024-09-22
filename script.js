function setrandomcolor() {
    let randomcolor = getRandomColor();
    const div = document.querySelector('*');

    div.style.backgroundColor = randomcolor;
}

youtubepaste('https://www.youtube.com/watch?v=BjC93HVuBYM', document.body, 500, 500);

log(YoutubeSearch('hello'));