document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Close sidebar when clicking outside
document.querySelector('.main-content').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Add active class to menu items when clicked
document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all menu items
        document.querySelectorAll('.menu li a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the clicked item
        this.classList.add('active');
    });
});