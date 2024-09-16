function write(text) {
    // Приводим к строке и вставляем в конец body
    document.body.innerHTML += String(text);
    return true;
}

function writeln(elm, text) {
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

function clear() {
    // Очищаем содержимое body
    document.querySelector("body").innerHTML = "";
    return true;
}

function fuckoff() {
    // Пустая функция, не делающая ничего
    return true;
}
