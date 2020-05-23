var menu = document.getElementById('menu-button') ;
menu.addEventListener('click', openMenu);

// Функция открытия/закрытия меню
function openMenu() {
var expandedMenu = document.getElementById('expanded-menu') ;
var rolledUpMenu = document.getElementById('rolled-up-menu') ;
var articles = document.getElementById('articles');
var videoName = document.getElementById('videoName');
  if (expandedMenu.style.display !== 'none'){
    expandedMenu.style.display = "none";
    rolledUpMenu.style.display = "block";
    articles.style.gridTemplateColumns = "345px 345px 345px 345px 345px";
    articles.style.marginLeft = "100px";
    videoName.style.width = "300px";
  } else {
    expandedMenu.style.display ="block";
    rolledUpMenu.style.display ="none";
    articles.style.gridTemplateColumns = "360px 360px 360px 360px";
    articles.style.marginLeft = "280px";
    videoName.style.width = "312px";
  }
};

// Функция выделения элемента меню при клике для развернутого меню

var expandedMenu = document.getElementById('expanded-menu');

expandedMenu.addEventListener('click', function(e) {
    const items = document.querySelectorAll('.expanded-menu-item')
    const target = e.target
    Array.from(items).forEach(item => {
    item.classList.remove('active')
  })
  target.classList.add('active');
  target.setAttribute('src','img/complaints.svg')

})


// Функция выделения элемента меню при клике для свернутого меню

var rolledUpMenu = document.getElementById('rolled-up-menu');

rolledUpMenu.addEventListener('click', function(e) {
    const items = document.querySelectorAll('.rolled-up-item')
    const target = e.target
    Array.from(items).forEach(item => {
    item.classList.remove('active')
  })
  target.classList.add('active');
  target.setAttribute('src','img/complaints.svg')

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
    <div class='preview'>
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
        </div>
    </div>`;
    wrapper.appendChild(card);
}

for (i = 0; i < 30; i++) {
    createCard(i);
}



