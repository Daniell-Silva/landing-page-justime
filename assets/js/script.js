/*let modalVideo = document.querySelector('#modal-video');

function openVideo() {
    if (modalVideo.classList.contains('play-video') == true) {
        modalVideo.classList.remove('play-video');
    } else {
        modalVideo.classList.add('play-video');
    }
}*/

let modalVideo = document.getElementById("modalVideo"); 
let btnVideo = document.getElementById("openVideo");

btnVideo.onclick = function() {
    modalVideo.style.display = "block";
  } 

  window.onclick = function(event) {
    if (event.target == modalVideo) {
        modalVideo.style.display = "none";
    }
  }


//BOTÃO SCROLL TOP

const botaoTop = document.querySelector('.scrollButton');
botaoTop.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
})

  function animacroll() {
    if(window.scrollY === 0) {
        botaoTop.style.marginBottom = '-50px';

    } else {
        botaoTop.style.marginBottom = '70px';
 
    }
}
window.addEventListener('scroll', animacroll);
//BOTÃO SCROLL TOP