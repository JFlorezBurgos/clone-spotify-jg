const topBar = document.querySelector(".topbar")

window.addEventListener("scroll", () => {
    if (window.scrollY > 0){
        topBar.classList.add("transparent")
    }
    else{
        topBar.classList.remove("transparent");
    }
});

// Nueva variable para almacenar altura del Topbar

let topbarHeight = topBar.offsetHeight

//Añadis un paddingTop basada en la altura al contenido principal

const mainContent = document.querySelector(".main-content");
mainContent.style.paddingTop = `${topbarHeight + 20}px`;


// BOTON PLAY

const containerPlaylists = document.querySelectorAll(".card-spotify-playlists");

const createButton = card =>{
    //crear boton
    const button = document.createElement("button");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';

    // Agregar boton al element hijo

    card.appendChild(button);

    button.style.display = "none";
    button.classList.add("btn-play");

    card.addEventListener('mouseover', () => {
        button.style.display = 'block';
    });

    card.addEventListener('mouseout', ()=>{
        button.style.display = 'none';
    });
};

containerPlaylists.forEach(card => {
    createButton(card)
})