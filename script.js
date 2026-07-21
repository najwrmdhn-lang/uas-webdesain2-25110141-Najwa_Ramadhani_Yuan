// ==========================================
// NAVIGASI SPA (Single Page Section) BERBASIS HASH
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function showSection() {
        // Ambil hash URL, jika kosong default ke #home
        let hash = window.location.hash || '#home';

        // Tampilkan section yang sesuai, sembunyikan sisanya
        sections.forEach(function (sec) {
            sec.style.display = ('#' + sec.id === hash) ? 'block' : 'none';
        });

        // Tandai menu navbar yang aktif
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });

        // Tutup menu navbar mobile setelah memilih halaman
        const navCollapse = document.getElementById('menu');
        if (navCollapse && navCollapse.classList.contains('show')) {
            navCollapse.classList.remove('show');
        }
    }

    window.addEventListener('hashchange', showSection);
    showSection(); // jalankan saat pertama kali halaman dimuat

    // ==========================================
    // FORM KONTAK -> KIRIM VIA WHATSAPP
    // ==========================================
    const formKontak = document.getElementById('formKontak');
    const NOMOR_WA = '6282250282898'; // Nomor WhatsApp Nagih Kuliner (format internasional)

    if (formKontak) {
        formKontak.addEventListener('submit', function (e) {
            e.preventDefault();

            const nama = document.getElementById('nama').value.trim();
            const telepon = document.getElementById('telepon').value.trim();
            const email = document.getElementById('email').value.trim();
            const subjek = document.getElementById('subjek').value;
            const pesan = document.getElementById('pesan').value.trim();

            if (!nama || !telepon || !pesan) {
                alert('Mohon lengkapi Nama, No. WhatsApp, dan Pesan terlebih dahulu.');
                return;
            }

            let teks = `Halo Nagih Kuliner, saya ingin menghubungi:\n\n`;
            teks += `Nama: ${nama}\n`;
            teks += `No. WhatsApp: ${telepon}\n`;
            if (email) teks += `Email: ${email}\n`;
            teks += `Subjek: ${subjek}\n`;
            teks += `Pesan: ${pesan}`;

            const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teks)}`;
            window.open(url, '_blank');

            formKontak.reset();
        });
    }
});
