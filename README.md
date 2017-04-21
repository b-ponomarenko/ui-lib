# UI Lib
Мини-библиотека для управления css классами dom элементов.

## Использование
Скачайте скрипт и добавьте его в теге `script`:
```html
<script src="main.js"></script>
```
После загрузки скрипта появится глобальная переменная `jQ`, которую вы можете использовать в любой части кода.
```js
const elem = jQ('.foo');
elem.addClass('bar');
elem.removeClass('bar');
elem.toggleClass('bar');
elem.hasClass('bar');
```

## Документация
Библиотека содержит 4 метода, работает на основе 2-х нативных методов: `document.querySelectorAll` и `Element.classList`.
```js
jQ(selector).addClass(className); // принимает класс и добавляет его к элементу, если его еще нет
jQ(selector).removeClass(className); // принимает класс и удаляет с элемента, если он есть
jQ(selector).toggleClass(className); // принимает класс и добавляет его к элементу, если его еще нет или удаляет с элемента, если он есть
jQ(selector).addClass(className); // принимает класс и проверяет есть ли данный класс на DOM элементах
```
