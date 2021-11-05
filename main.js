// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
// Di nuovo buon lavoro!

// identificazione del container in cui iniettare il markup
// analisi del markup e identificazione parti dinamiche
// creazione di un array di oggetti contenenti tutti i dati necessari per la generazione dei nuovi post
// loop che inietti nell'HTML n post per quanti sono gli oggetti nell'array e che dinamicamente inserisca le parti dinamiche differenti per ogni post


const container = document.getElementById('container');
// elementi dinamici
// avatar
// nomeutente
// data di pubblicazione
// testo del post
// immagine
// numero di mipiace

const posts = [
    {
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/77/7717c0f435207763c19bb945273e44e8c3339f96_full.jpg',
        userName: 'I\'m so Kate',
        data: '1 Hour ago',
        postText: 'look how cutie is my picciPucci!',
        pImg: 'https://picsum.photos/id/1025/200/300',
        likes: 33,
    },
    {
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a1/a11ef80eb39a0938e9428b999ece7b06e538fddf_full.jpg',
        userName: 'badAss Kicker',
        data: '3 Days ago',
        postText: 'this was a good dinner!',
        pImg: 'https://picsum.photos/id/1003/200/300',
        likes: -10,
    },
    {
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9f/9fecaebedd5542c5479fc02f2089ab59554f8214_full.jpg',
        userName: 'Miss Kathrine',
        data: '22 Minutes ago',
        postText: 'My new Onlyfan post is out! I\'ve shoot it during my last vacation, Go checkin\' it and don\'t forget to give me a huge tip!',
        pImg: 'https://picsum.photos/id/1083/200/300', 
        likes: '18milaMiliardi',
    },
    {
        avatar: 'https://pbs.twimg.com/profile_images/1432037317/ajeje_400x400.jpg',
        userName: 'Ajeje Brazorf',
        data: '17 Minutes ago',
        postText: 'E\' veramente incredibile! oggi mi hanno fatto la multa sull\'autobus nonostante io avessi un biglietto, pluritimbrato sì, ma solo perché l\'avevo pagato di più!',
        pImg: 'https://img2.liberoquotidiano.it/images/2020/02/21/225810560-6a8f9951-4c40-4161-a5bd-60860a0d9885.jpg',
        likes: '125K',
    },
    {
        avatar: 'https://media-assets.vanityfair.it/photos/614d7cdeec9a331d113d44df/master/pass/image73.jpg',
        userName: 'Paolo Buonolis',
        data: '12 Years ago',
        postText: 'Spettacolare la chiamata che abbiamo registrato oggi per Tira&Molla, non posso darvi troppi dettagli, ma vi dico che ci hanno chiamato due fratelli dalla provincia di caserta, grandi esperti di ippica e arte casearia! Venerdì guardate la puntata, non ve ne pentirete!',
        pImg: 'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.youmovies.it%2F2021%2F04%2F01%2Fpaolo-bonolis-scherzo-video%2F&psig=AOvVaw1G8Gf7PatGkVK2MYDGBSBg&ust=1636205937424000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMi18KGsgfQCFQAAAAAdAAAAABAD',
        likes: 'comunque troppe poche!',
    },
];

// loop che genera n post quanti gli oggetti contenuti nell'array posts e li inietta nel container
for (let i = 0; i < posts.length; i++) {
    const {avatar, userName, data, postText, pImg, likes} = posts[i];
    console.log(avatar, userName, data, postText, pImg, likes);
    container.innerHTML +=
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${avatar}" alt="${userName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${userName}</div>
                        <div class="post-meta__time">${data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src="${pImg}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
}