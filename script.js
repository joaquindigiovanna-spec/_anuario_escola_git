const book = document.getElementById("book");

const scene = document.querySelector(".scene");

const cover = document.getElementById("cover");

const nextPageBtn = document.getElementById("nextPage");

const prevPageBtn = document.getElementById("prevPage");

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2")
];

let state = 0;

/*
0 = pequeño
1 = agrandado
2 = abierto
*/

let currentPage = 0;

/* CLICK LIBRO */

book.addEventListener("click", () => {

    /* AGRANDAR */

    if(state === 0){

        scene.classList.add("expanded");

        state = 1;

        return;
    }

    /* ABRIR */

    if(state === 1){

        cover.classList.add("opened");

        scene.classList.add("opened");

        /* TAPA SIEMPRE VISIBLE */

        cover.style.zIndex = "5";

        state = 2;

        return;
    }

});

/* SIGUIENTE */

nextPageBtn.addEventListener("click", () => {

    if(state !== 2) return;

    if(currentPage < pages.length){

        pages[currentPage].classList.add("flipped");

        /* BAJAR PAGINA */

        pages[currentPage].style.zIndex = "3";

        currentPage++;
    }

});

/* ANTERIOR */

prevPageBtn.addEventListener("click", () => {

    if(state !== 2) return;

    if(currentPage > 0){

        currentPage--;

        pages[currentPage].classList.remove("flipped");

        /* SUBIR PAGINA */

        pages[currentPage].style.zIndex =
            pages.length - currentPage + 5;
    }

});
