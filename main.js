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
        data: '1 hour ago',
        postText: 'look how cutie is my picciPucci!',
        pImg: 'https://picsum.photos/1025/1/200/300',
        likes: 33,
    },
    {
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/77/7717c0f435207763c19bb945273e44e8c3339f96_full.jpg',
        userName: 'I\'m so Kate',
        data: '1 hour ago',
        postText: 'look how cutie is my picciPucci!',
        pImg: 'https://picsum.photos/1025/1/200/300',
        likes: 33,
    },
    {
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/77/7717c0f435207763c19bb945273e44e8c3339f96_full.jpg',
        userName: 'I\'m so Kate',
        data: '1 hour ago',
        postText: 'look how cutie is my picciPucci!',
        pImg: 'https://picsum.photos/1025/1/200/300',
        likes: 33,
    },
    {
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/77/7717c0f435207763c19bb945273e44e8c3339f96_full.jpg',
        userName: 'I\'m so Kate',
        data: '1 hour ago',
        postText: 'look how cutie is my picciPucci!',
        pImg: 'https://picsum.photos/1025/1/200/300',
        likes: 33,
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
                <img src="${}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
}

// selezionare sequenzialmente ad ogni iterazione del loop, un oggetto dell'array e ottenere i valori delle sue propretà

