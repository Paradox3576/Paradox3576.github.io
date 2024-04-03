let tg = window.Telegram.WebApp

function sendData() {
    tg.sendData(JSON.stringify({
        game: document.getElementsByTagName('h1')[0].innerText,
        data: modalData
    }));
}