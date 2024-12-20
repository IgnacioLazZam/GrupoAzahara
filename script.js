function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}


document.querySelectorAll('#navLinks a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});