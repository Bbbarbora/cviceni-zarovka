console.log('funguju!');



const spinacZiarovky = () => {
    const ziarovka = document.querySelector('.bulb');
    ziarovka.classList.toggle('bulb--on');
}


document.addEventListener('keydown', spinacZiarovky)