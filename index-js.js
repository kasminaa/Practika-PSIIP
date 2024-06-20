setTimeout(function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}, 30000); // 30 секунд

function moveCar() {
    const car = document.querySelector('.car');
    car.classList.add('move');
}



function fireworks() {
    const fireworks = document.querySelector('.fireworks');
    fireworks.style.display = 'block';
    fireworks.style.animation = 'explode 1s forwards';

    setTimeout(() => {
        fireworks.style.display = 'none';
    }, 1000);
}



const icons = document.querySelectorAll('.rectangle-14, .flex-row-bab, .rectangle-15, .pic-c');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.classList.add('show'); // Добавляем класс "show" при наведении
    });

    icon.addEventListener('mouseout', () => {
        icon.classList.remove('show'); // Удаляем класс "show" при уходе курсора
    });
});



function subscribe() {
    let emailInput = document.querySelector('.email-input');
    let emailValue = emailInput.value.trim();
    
    // Проверка на пустое поле
    if (emailValue === '') {
        alert('Поле с почтой не должно быть пустым!');
        return;
    }

    // Проверка на наличие русских букв
    let russianLettersRegex = /[а-яА-Я]/;
    if (russianLettersRegex.test(emailValue)) {
        alert('Поле с почтой не должно содержать русские буквы!');
    } else {
        // здесь можно добавить код для отправки данных на сервер или другие действия при корректном вводе данных
        alert('Вы успешно подписались!');
    }
}




const icon = document.querySelector('.double-scale');
let scale = 1;
let growing = true;

setInterval(() => {
    if (growing) {
        scale = 2;
        icon.style.transform = `scale(${scale})`;
        growing = false;
    } else {
        scale = 1;
        icon.style.transform = `scale(${scale})`;
        growing = true;
    }
}, 1000);