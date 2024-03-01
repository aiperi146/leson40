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