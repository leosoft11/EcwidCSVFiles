// Получаем кнопку из HTML
let pressBtn = document.getElementById('btn');
let inp = document.querySelector('.count');

// Если она есть, то выполняем код
if(pressBtn != null) {
  // Вешаем обработчик события
  pressBtn.onclick = function(el) {
    // Обращаемся к текущей вкладке
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
      // Выполняем скрипт
      chrome.tabs.executeScript(
        tabs[0].id, // Указываем эту вкладку
        // Указываем код, что сработает на этой странице
        {
          file:'name.js',
        }
      );
    })
  }
}
