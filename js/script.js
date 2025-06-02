// Fungsi kirim form (simulasi)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    const nama = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const pesan = form.querySelector("textarea").value;

    if (nama && email && pesan) {
      alert(`Terima kasih, ${nama}! Pesan kamu telah dikirim.`);
      form.reset();
    } else {
      alert("Mohon lengkapi semua bidang sebelum mengirim.");
    }
  });
});


  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });



// Scroll halus untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("btn-modal").addEventListener("click", function () {
    alert("Tombol berhasil diklik!");
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('portfolioModal');
  const closeBtn = document.querySelector('.close-modal');
  
  // Tambahkan event listener ke semua tombol detail
  document.querySelectorAll('.btn-detail').forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const item = this.closest('.portfolio-item');
      const imgSrc = item.querySelector('img').src;
      const title = item.querySelector('h3').textContent;
      const desc = item.querySelector('p').textContent;
      
      // Isi modal
      document.getElementById('modalImage').src = imgSrc;
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDescription').textContent = desc;
      
      // Tampilkan modal
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Tutup modal
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => e.target === modal && closeModal());
  
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});