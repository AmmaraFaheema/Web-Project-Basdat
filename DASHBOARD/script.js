document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

document.querySelector('.main-content').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});