document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu mobile
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Tutup menu saat klik link
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

  // Fungsi kirim form (simulasi)
  const form = document.getElementById("formKontak");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ambil nilai input
      const nama = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const pesan = form.querySelector("textarea").value;

      if (nama && email && pesan) {
        alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.`);
        form.reset();
      } else {
        alert("Mohon lengkapi semua bidang sebelum mengirim.");
      }
    });
  }

  // Modal Portofolio
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

  // Animasi scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.profil-content, .about-content, .portfolio-item, form, .contact-info');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  document.querySelectorAll('.profil-content, .about-content, .portfolio-item, form, .contact-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Trigger animation on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});