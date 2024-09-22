easywrite_stat = {
    "version": "0.0.2",
    "name": "easywrite",
    "author": "David",
    "description": "module для написания кода",
    "license": "none",
    "repository": "https://github.com/dinzic/easywrite.js",
    "bugs": "https://github.com/dinzic/easywrite.js/issues",    
}
console.log(`EasyWrite Version:  ${easywrite_stat.version}`);
console.log(`EasyWrite Author:  ${easywrite_stat.author}`);
console.log(`EasyWrite Repository:  ${easywrite_stat.repository}`);
function write(text) {
    // Приводим к строке и вставляем в конец body
    document.body.innerHTML += String(text);
    return true;
}

function writeIn(elm, text) {
    // Приводим к строке и добавляем в указанный элемент
    document.querySelector(elm).innerHTML += String(text);
    return true;
}

function randomnum(min, max) {
    // Генерация случайного числа в диапазоне [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function log(text) {
    // Логируем любой тип данных в консоль
    console.log(text);
    return true;
}

function error(text) {
    // Выводим ошибку в консоль
    console.error(text);
    return true;
}

function warn(text) {
    // Выводим предупреждение в консоль
    console.warn(text);
    return true;
}

function info(text) {
    // Выводим информацию в консоль
    console.info(text);
    return true;
}

function debug(text) {
    // Выводим отладочную информацию в консоль
    console.debug(text);
    return true;
}

function clearall() {
    // Очищаем содержимое body
    document.querySelector("body").innerHTML = "";
    return true;
}

function remove(elm) {
    // Удаляем указанный элемент
    document.querySelector(elm).remove();
    return true;
}

// Di-Draggable
function style() {
    // default draggable-container styles
    var draggableContainers = document.querySelectorAll(".draggable-style");
    draggableContainers.forEach(function (container) {
      container.style.position = "fixed";
      container.style.backgroundColor = "#D9D9D9";
      container.style.border = "1px black solid";
      container.style.borderRadius = "70px";
      container.style.padding = "1%";
    });
  }
  style()
  // draggable-container
  function dragElement() {
    // Get all the elements with class 'draggable':
    var elements = document.querySelectorAll(".draggable") && document.querySelectorAll(".draggable-style");
  
    // Make each DIV element draggable:
    elements.forEach(function (elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
  
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }
  
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    });
  }
dragElement();

// videos
function video(video) {
    var videoelm = document.createElement('video');
    videoelm.src = video.src;
    videoelm.autoplay = video.autoplay;
    videoelm.loop = video.loop;
    videoelm.muted = video.muted;
    videoelm.width = video.width;
    videoelm.height = video.height;
    videoelm.id = video.id;

    // Append the video element to the DOM
    document.body.appendChild(videoelm);

    // Add custom controls if default controls are disabled
    if (!video.default_controls) {
        let controls = document.createElement('div');
        controls.classList.add('custom-controls');

        // Create play button
        let play = document.createElement('button');
        play.innerHTML = "Play";
        const updatePlayButton = () => {
            play.innerHTML = videoelm.paused ? "Play" : "Pause";
        };
        play.addEventListener('click', () => {
            if (videoelm.paused) {
                videoelm.play();
            } else {
                videoelm.pause();
            }
            updatePlayButton();
        });

        // Create stop button
        let stop = document.createElement('button');
        stop.innerHTML = "Stop";
        stop.addEventListener('click', () => {
            videoelm.pause();
            videoelm.currentTime = 0; // Reset video to the beginning
            updatePlayButton();
        });

        // Create volume slider
        let volume = document.createElement('input');
        volume.type = "range";
        volume.min = 0;
        volume.max = 1;
        volume.step = 0.1;
        volume.value = videoelm.volume;
        volume.addEventListener('input', () => {
            videoelm.volume = volume.value;
        });

        // Create mute button
        let mute = document.createElement('button');
        mute.innerHTML = "Mute";
        mute.addEventListener('click', () => {
            videoelm.muted = !videoelm.muted;
            mute.innerHTML = videoelm.muted ? "Unmute" : "Mute";
        });

        // Create fullscreen button
        let fullscreen = document.createElement('button');
        fullscreen.innerHTML = "Fullscreen";
        fullscreen.addEventListener('click', () => {
            if (videoelm.requestFullscreen) {
                videoelm.requestFullscreen();
            } else if (videoelm.webkitRequestFullscreen) { // Safari
                videoelm.webkitRequestFullscreen();
            } else if (videoelm.msRequestFullscreen) { // IE11
                videoelm.msRequestFullscreen();
            }
        });

        // Append buttons to controls container
        controls.appendChild(play);
        controls.appendChild(stop);
        controls.appendChild(volume);
        controls.appendChild(mute);
        controls.appendChild(fullscreen);

        // Style controls container
        controls.style.display = 'flex';
        controls.style.gap = '10px';
        controls.style.transform = 'translateY(-350%)';
        controls.style.opacity = '0';
        controls.style.transition = 'opacity 0.1s ease-in-out';

        // Show and hide controls on mouseover/mouseout
        let controlTimeout;
        const showControls = () => {
            clearTimeout(controlTimeout);
            controls.style.opacity = '1';
        };
        const hideControls = () => {
            controlTimeout = setTimeout(() => {
                controls.style.opacity = '0';
            }, 1000);
        };

        videoelm.addEventListener('mouseover', showControls);
        videoelm.addEventListener('mouseout', hideControls);
        controls.addEventListener('mouseover', showControls);
        controls.addEventListener('mouseout', hideControls);

        // Handle play/pause on video click
        videoelm.addEventListener('click', () => {
            if (videoelm.paused) {
                videoelm.play();
            } else {
                videoelm.pause();
            }
            updatePlayButton();
        });

        // Make video element focusable and handle key controls
        videoelm.setAttribute('tabindex', '0');
        videoelm.addEventListener('keydown', (event) => {
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(event.key)) {
                event.preventDefault();
            }

            switch (event.key) {
                case 'ArrowLeft':
                    videoelm.currentTime -= 5; // Seek backward 5 seconds
                    break;
                case 'ArrowRight':
                    videoelm.currentTime += 5; // Seek forward 5 seconds
                    break;
                case 'ArrowUp':
                    videoelm.volume = Math.min(videoelm.volume + 0.1, 1); // Increase volume, cap at 1
                    break;
                case 'ArrowDown':
                    videoelm.volume = Math.max(videoelm.volume - 0.1, 0); // Decrease volume, cap at 0
                    break;
                case ' ':
                    if (videoelm.paused) {
                        videoelm.play();
                    } else {
                        videoelm.pause();
                    }
                    updatePlayButton(); // Sync button state with space key
                    break;
            }
        });

        // Focus the video when clicked to allow keyboard controls
        videoelm.addEventListener('click', () => {
            videoelm.focus();
        });

        // Append custom controls after the video element in the DOM
        videoelm.after(controls);
    }

    return videoelm;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
