var menu = document.getElementById('menu-button') ;
menu.addEventListener('click', openMenu);
var expandedMenu = document.getElementById('expanded-menu') ;

// Функция открытия/закрытия меню
function openMenu() {
var expandedMenu = document.getElementById('expanded-menu') ;
var rolledUpMenu = document.getElementById('rolled-up-menu') ;
var articles = document.getElementById('articles');
  if (expandedMenu.style.display !== 'none'){
    expandedMenu.style.display = "none";
    rolledUpMenu.style.display = "block";
    articles.style.gridTemplateColumns = "345px 345px 345px 345px 345px";
    articles.style.marginLeft = "100px";
  } else {
    expandedMenu.style.display ="block";
    rolledUpMenu.style.display ="none";
    articles.style.gridTemplateColumns = "360px 360px 360px 360px";
    articles.style.marginLeft = "280px";
  }
};



let elements = document.querySelectorAll(".expanded-menu-item");

// Клик на элемент развернутого меню
expandedMenu.addEventListener('click', e => {
let target = e.target;
target = target.closest('span');
 
    if (target) {
        const parentTarget = target.parentElement;
        expandedMenu.querySelectorAll('li').forEach(elem => {
            if( elem === parentTarget) { 
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        } )
    }

})


// Функция создания карточки
function createCard(i) {

    var card = document.createElement('article');
    var avatarImg = data[i].avatarImg;
    var imgSrc = data[i].imgSrc;
    var videoTime = data[i].videoTime;
    var videoClock = data[i].videoClock;
    var videoPlaylist = data[i].videoPlaylist;
    var videoName = data[i].videoName;
    var chanelName = data[i].chanelName;
    var videoViews = data[i].videoViews;
    var videoLoad = data[i].videoLoad;
    var videoSettings = data[i].videoSettings;
    var wrapper = document.getElementById('articles');
    card.innerHTML = `
    <div class='preview'  data-youtuber = 'r3zFLufqh2w'>
            <img src="${imgSrc}" alt="Изображение" title="Изображение">
        <div class="videoClock">
           <img src="${videoClock}" alt="Изображение" title="Изображение">
        </div>
        <div class="videoPlaylist">
            <img src="${videoPlaylist}" alt="Изображение" title="Изображение">
        </div>
        <div class="videoTime">
            ${videoTime}
        </div>     
    </div>
    
    <div class="description">
    <div class="avatar">
        <img src="${avatarImg}" alt="Изображение" title="Изображение">
    </div> 
    <div id="videoName"> 
        ${videoName} 
    </div>
    <div id="videoSettings">
        <img src="${videoSettings}" alt="Изображение" title="Изображение">
    </div>
    </div>
    <div class="videoInfo">
        <div class="chanelName"> 
            ${chanelName}
        </div>
        <div class="viewsInfo">
            <div class="videoViews">
                ${videoViews}
            </div>
            <div class="videoLoad">
                ${videoLoad}
            </div>
        </div> 
        
    </div>`;
    wrapper.appendChild(card);
}

for (i = 0; i < 30; i++) {
    createCard(i);
}


//Экранная клавиатура
{
    const keyboardButton = document.querySelector('.keyboardBtn');
    const keyboardBox = document.querySelector('.keyboard-box');
    const keyboardClosed = document.querySelector('.keyClosedBtn');
    const searchInput = document.getElementById('filter-input');
    keyboardButton.addEventListener('click', () => {
        if (keyboardBox.style.display != 'block') {
            keyboardBox.style.display = 'block'
        } else {
            keyboardBox.style.display = 'none'
        }
    })
    
    keyboardClosed.addEventListener('click', () => {
        if (keyboardBox.style.display != 'block') {
            keyboardBox.style.display = 'block'
        } else {
            keyboardBox.style.display = 'none'
        }
    })

    const changeLang = (btn, lang) => {
        const langRu = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '←',
        'й','ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 
        'х', 'ъ', '/' , 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '▲' ,
        'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'en', ' ', 'en'];
        const langEn = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '←' ,'q', 'w', 'e', 'r',
        't', 'y', 'u', 'i', 'o' , 'p', '[', ']', '/' , 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        ';', '"', '▲' , 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?','▲' , 'ru', ' ', 'ru'];

        if (lang === 'en') {
            btn.forEach((elem,i) => {
                elem.textContent = langEn[i];
            }) 
        } else {
            btn.forEach((elem,i) => {
                elem.textContent = langRu[i];
            }) 
        }
    }

    const typing = event => {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'button') {
            const buttons = [...keyboardBox.querySelectorAll('button')]
            .filter(elem => elem.style.visibility !== 'hidden');
            const contentButton =target.textContent.trim();
            if ((target.className === "k8-btn" || target.className === 'backspace'))  {
                console.log(target.className);
                searchInput.value = searchInput.value.slice(0, length - 1)
            } else if (! target.textContent.trim()){
                searchInput.value += ' ';
            } else if (contentButton === 'en' || contentButton === 'ru') {
                changeLang(buttons, contentButton);
            } else { 
                searchInput.value += target.textContent.trim();
            }
        }
    }

    keyboardBox.addEventListener('click', typing)
}


//Модальное окно

{   
    document.body.insertAdjacentHTML('beforeend' , 
    `<div class='youTuberModal'>
        <div id='youTuberClose'>&#215;</div>
        <div id='youtuberContainer'></div>
    </div>`
    );

    const sizeVideo = () => {
        let ww = document.documentElement.clientWidth;
        let wh = document.documentElement.clientHeight;
        
        const qw = [3840, 2560, 1920, 1280, 854, 640, 426, 256];
        const qh = [2160, 1440, 1080, 720, 480, 360, 246, 144];

        for(let i = 0; i < qw.length; i++) {
            if  (ww > qw[i]) {
                youtuberContainer.querySelector('iframe').style.cssText = `
                    width: ${qw[i]}px;
                    height: ${qh[i]}px;
                `;
                youtuberContainer.style.cssText = `
                    width: ${qw[i]}px;
                    height: ${qh[i]}px;
                    top: ${(wh - qh[i]) / 2}px;
                    left: ${(ww - qw[i]) / 2}px;
                `; 
                break;
            }
        }
    }
    
    const youtuberItems =  document.querySelectorAll('[data-youtuber]');
    const youTuberModal = document.querySelector('.youTuberModal');
    const youtuberContainer = document.getElementById('youtuberContainer');

    

     
    youtuberItems.forEach( elem => {
        elem.addEventListener('click', () => {
            const idVideo = elem.dataset.youtuber;  
            youTuberModal.style.display = 'block';

            const youTuberFrame = document.createElement('iframe');
            youTuberFrame.src = `https://www.youtube.com/embed/${idVideo}`;
            youtuberContainer.insertAdjacentElement('beforeend', youTuberFrame);

            window.addEventListener('resize', sizeVideo);

            sizeVideo();
            
            
            document.documentElement.clientHeight = '890';
            console.log(
                document.documentElement.clientHeight)
            // document.body.style.overflow = 'hidden';

        })
    })

    youTuberModal.addEventListener('click', () => {
        youTuberModal.style.display = '';
        youtuberContainer.textContent = ' '; 
        
        window.removeEventListener('resize', sizeVideo);
        
        document.body.style.overflow = '';

    })

    
}