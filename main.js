// 1. Сделать страницу с дивом, содержащим длинный текст (без дополнительных тегов внутри) и инпутом сверху. Текст можно сгенерить например здесь: https://yandex.ru/referats/?t=gyroscope+marketing+psychology+physics&s=76695
// 2. При вводе текста в инпут (прямо в процессе ввода), если введено 2 и более символов, в тексте ищутся совпадения. Совпадением считаются подряд идущие те же символы, что были указаны в инпуте. Поиск осуществляется регистронезависимо (поиск "мал" работает так же как "мАл" или "МАл") 
const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');
let textToSearch = '';

searchInput.addEventListener('input', function() {
    textToSearch = this.value.trim().toLowerCase(); 

    if (textToSearch.length >= 2) { 
        const text = document.querySelector('.text').innerText.trim().toLowerCase(); 
        const regex = new RegExp(textToSearch, 'g'); 

        
        const highlightedText = text.replace(regex, match => `<b>${match}</b>`);
        searchResult.innerHTML = highlightedText ? highlightedText : 'No matches found'; 
    } else {
        searchResult.innerHTML = ''; 
    }
});

/* 3. Каждое совпадения в выделяется HTML-тегом <mark> (стилизация mark на ваше усмотрение, например жёлтый цвет фона). Например, если мы искали строку "рас", в тексте появятся такие теги:
Отсюда естественно следует, что пере<mark>рас</mark>пределение бюджета начинает ролевой гамма-квант. Центр подвеса, обобщая изложенное, концентрирует эксклюзивный ассоцианизм.

Потребительская культура горизонтальна. <mark>Рас</mark>кручиваясь, абсолютно твёрдое тело трансформирует ускоряющийся показ баннера, исходя из суммы моментов. Проекция недетерминировано интегрирует  колебательный кожух.

Волновая тень, отб<mark>рас</mark>ывая подробности, коаксиально начинает газообразный лазер. */
const searchInput1 = document.getElementById('searchInput');
const searchResult1 = document.getElementById('searchResult');
const text = document.querySelector('.text').innerText.trim().toLowerCase(); 

searchInput.addEventListener('input', function() {
    const textToSearch = this.value.trim().toLowerCase(); 

    if (textToSearch.length >= 2) { 
        const regex = new RegExp(textToSearch, 'g'); 


        const highlightedText = text.replace(regex, match => `<mark>${match}</mark>`);
        searchResult.innerHTML = highlightedText ? highlightedText : 'No matches found';
    } else {
        searchResult.innerHTML = '';
    }
});