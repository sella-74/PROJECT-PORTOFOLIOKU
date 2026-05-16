// Mengambil semua elemen link di dalam sidebar
const navItems = document.querySelectorAll('.nav-item');

// Menambahkan event listener ke setiap link
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Hapus class 'active' dari semua ikon terlebih dahulu
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Tambahkan class 'active' ke ikon yang baru saja di-klik
        this.classList.add('active');
    });
});