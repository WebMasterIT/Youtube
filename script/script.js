
var menu = document.getElementById('menu-button') ;
menu.addEventListener('click', OpenMenu);


function OpenMenu() {
var submenu = document.getElementById('submenu') ;
var closedMenu = document.getElementById('closed-menu') ;
  if (submenu.style.display !== 'none'){
  	submenu.style.display="none";
	closedMenu.style.display="block";
  }else{
  	submenu.style.display="block";
  	closedMenu.style.display="none";
  }
  
};


var data = [{
    imgSrc: 'img/articles/10.png',
    avatarImg: 'img/articles/10.png',
    videoName: '«Мы все стали заложниками системы». Что делают с нами ставки на успешность учеников и другие шаблоны',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/11.png',
    avatarImg: 'img/articles/10.png',
    videoName: 'Без бесполезных физры и ОБЖ: как семейное обучение экономит время детей',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/12.jpg',
    avatarImg: 'img/articles/10.png',
    videoName: '5 приключенческих книг, от которых невозможно оторваться',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/13.jpg',
    avatarImg: 'img/articles/10.png',
    videoName: 'Получить образование в США и не разориться: как сэкономить на учёбе $40 000',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/14.jpg',
    avatarImg: 'img/articles/10.png',
    videoName: 'Мама почти ничего мне не запрещала": чего ждут от нас дети',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/15.jpg',
    avatarImg: 'img/articles/10.png',
    videoName: 'Как мы учились этим летом: дни самоуправления, неделя Испании и уроки',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/16.jpg',
    avatarImg: 'img/articles/10.png',
    videoName: 'Почему школе пора отказаться от «выканья»',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/18.jpg',
    avatarImg: 'img/articles/10.png',
    videoName: '«В нашей школе прогулы стали массовыми»: кто и как прогуливает школу',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/19.jpg',
    videoName: '12 книг-бестселлеров для детей и подростков',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/20.jpg',
    videoName: 'Как мы учились этим летом: дни самоуправления, неделя Испании и уроки',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/21.jpg',
    videoName: '7 признаков классного учителя',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/22.png',
    videoName: 'Подростковые конфликты: как их решить личным примером',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/23.jpg',
    videoName: 'Почему дети воруют: тревога, принуждение и не только',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/24.png',
    videoName: 'Как мы учились этим летом: дни самоуправления, неделя Испании и уроки',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/25.jpg',
    videoName: '5 правил хорошего репетитора',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/26.jpg',
    videoName: '«Бьёт — значит любит» и «самадуравиновата»: как семья и общество поддерживают насилие',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/27.jpg',
    videoName: '5 эффективных способов избавиться от языкового барьера',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/28.jpg',
    videoName: '«А ещё кружок по фото»: зачем мы так загружаем детей и кому это выгодно',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/29.jpg',
    videoName: 'Как отпустить ребёнка жить в другом городе: 4 важных фактора',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/30.jpg',
    videoName: 'Как сдать ЕГЭ без репетиторов, регистрации и СМС',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/31.jpg',
    videoName: '6 книг, которые помогут в решении семейных проблем',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/32.jpg',
    videoName: '«Он первый начал!»: как взрослые поощряют маленькое насилие',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/33.jpg',
    videoName: 'От свободы к вседозволенности: как сохранять баланс в воспитании',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/34.jpg',
    videoName: 'Не ругайте ребёнка за лень. Лучше разберитесь, почему он «ленится»',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/35.jpg',
    videoName: 'Что после титров? 5 сериалов по мотивам популярных мультфильмов',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/36.jpg',
    videoName: 'Что такое целевое направление и стоит ли игра свеч',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/37.png',
    videoName: '3 способа помочь ребёнку развить инициативу',
    chanelName: 'Finn',
    iconViews: '3 млн просмотров',
    iconComment: '22',

},
{
    imgSrc: 'img/articles/38.png',
    videoName: '«Ты тупая, потому что в школу не ходишь»: как пугают тех, кто выбирает образование вне школы',
    chanelName: 'Finn',
    iconViews: '2,9 млн просмотров',
    iconComment: '3 месяца назад',
},
{
    imgSrc: 'img/articles/39.jpg',
    videoName: 'Старшеклассник-репетитор: идея, как изменить школу',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/40.jpg',
    videoName: '10 знаменитых мальчиков-сирот в детской литературе',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/41.jpg',
    videoName: '6 книг, которые станут отличным подарком к Новому году',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/42.png',
    videoName: '3 простых совета, как «отлепить» ребёнка от экрана',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/43.jpg',
    videoName: 'Это ваши права: всё про семейное и заочное обучение',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/44.jpg',
    videoName: 'Как мы учились этим летом: дни самоуправления, неделя Испании и уроки',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/45.jpg',
    videoName: '7 причин, почему дети не хотят учиться',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',

},
{
    imgSrc: 'img/articles/46.jpg',
    videoName: '«Ты молодец, но…»: стоит ли критиковать детей',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/47.jpg',
    videoName: 'Как написать план на ЕГЭ по обществознанию на максимальный балл',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/48.jpg',
    videoName: 'День благодарения: индейка, тыквенный пирог и традиции',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
},
{
    imgSrc: 'img/articles/49.jpg',
    videoName: '«Пока, любимый! Мама пойдёт выпьет кофе». Как живёт итальянский детский сад',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',

},
{
    imgSrc: 'img/articles/50.jpg',
    videoName: 'Как не перегореть до начала экзаменов',
    chanelName: 'Finn',
    iconViews: '108 тыс. просмотров',
    iconComment: '10 дней назад',
}
]

// Функция создания карточки
function createCard(i) {

    var card = document.createElement('article');
    var avatarImg = data[i].avatarImg;
    var imgSrc = data[i].imgSrc;
    var text = data[i].videoName;
    var iconViews = data[i].iconViews;
    var iconComment = data[i].iconComment;

    var description = getCardsInfo(data[i])
    var wrapper = document.getElementById('articles');
    card.innerHTML = `
    <img src="${imgSrc}" alt="Изображение" title="Изображение">
    <div class="avatar">
    <img src="${avatarImg}" alt="Изображение" title="Изображение">
    </div>
    <p class="cardsText"> ${text}
    <div class="articleInfo">
    <div class="articleViwes">
    ${description}
    </div>
    </div>`;
    wrapper.appendChild(card);
}

function getCardsInfo(item) {
    if (item.readTimeIcon) {
        return ` <i class="fas fa-clock"></i> Читать: 3 минуты${item.readTimeIcon}`
    } else {
        return `<div class="articleViwes">
        <i class="far fa-eye"></i> ${item.iconViews}
        </div>
        <div class="articleViwes">
        <i class="fas fa-comment-alt"></i> ${item.iconComment}
        </div>`;
    }
}

function pastTemplate() {
    var card = document.querySelector('#tmpl')
    var imgSrc = data[i].imgSrc;
    var text = data[i].videoName;
    var iconViews = data[i].iconViews;
    var iconComment = data[i].iconComment;

    var cardContent = card.content;
    cardContent.querySelector('.cardsText').innerText = `${text}`;
    cardContent.querySelector(".articleInfo").innerHTML = `<i class="far fa-eye"></i> ${iconViews}
    </div>
    <div class="articleViwes">
    <i class="fas fa-comment-alt"></i> ${iconComment}`;

    cardContent.querySelector('.canvas').src = `${imgSrc}`;

    var clone = document.importNode(card.content, true);

    articles.appendChild(clone);
}

for (i = 0; i < 8; i++) {
    createCard(i);
}