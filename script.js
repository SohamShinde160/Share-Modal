const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// modal open function
const openmodal = () => {
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
};

// modal close function
const closemodal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}

