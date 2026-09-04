document.addEventListener("DOMContentLoaded", () => {
  
  /* --- 0. Injection automatique du Footer centralisé et stylisé --- */
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    const isInSubfolder = window.location.pathname.includes('/projets/') || window.location.pathname.includes('/legales/');
    const p = isInSubfolder ? '../' : '';
    // Correction ici : gestion propre du préfixe des pages légales selon le dossier actuel
    const legalPrefix = window.location.pathname.includes('/legales/') ? '' : (window.location.pathname.includes('/projets/') ? '../legales/' : 'legales/');

    footerPlaceholder.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            
            <!-- Colonne 1 : Logo, Nom & Bio -->
            <div class="footer-col">
              <a href="${p}index.html" class="footer-logo-link">
                <img src="${p}assets/icons/favicon.ico.png" alt="Logo BVM" class="footer-logo-img">
                <span class="footer-author-name">Bastian Vivier-Merle</span>
              </a>
              <p class="footer-desc">
                Designer UI/UX & Développeur Front-End basé à Oullins (Métropole de Lyon). 
                <br></br>
                Conception d'interfaces ergonomiques et intégration web moderne.
              </p>
            </div>

            <!-- Colonne 2 : Navigation -->
            <div class="footer-col">
              <h4 class="footer-title">Navigation</h4>
              <ul class="footer-links-list">
                <li><a href="${p}presentation.html">Présentation</a></li>
                <li><a href="${p}projets.html">Projets</a></li>
                <li><a href="${p}competences.html">Compétences</a></li>
                <li><a href="${p}stage.html">Stages</a></li>
                <li><a href="${p}contact.html">Contact</a></li>
              </ul>
            </div>

            <!-- Colonne 3 : Pages Légales -->
            <div class="footer-col">
              <h4 class="footer-title">Légal</h4>
              <ul class="footer-links-list">
                <li><a href="${legalPrefix}mentions-legales.html">Mentions légales</a></li>
                <li><a href="${legalPrefix}politique-confidentialite.html">Politique de confidentialité</a></li>
                <li><a href="${legalPrefix}cookies.html">Gestion des cookies</a></li>
              </ul>
            </div>

            <!-- Colonne 4 : Contact & Réseaux avec Logos -->
            <div class="footer-col">
              <h4 class="footer-title">Contact</h4>
              <ul class="footer-links-list">
                <li><a href="mailto:bastian.viviermerle@gmail.com" class="footer-email">bastian.viviermerle@gmail.com</a></li>
                <li class="footer-social-btns">
                  <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-social-btn" title="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener" class="footer-social-btn" title="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>GitHub</span>
                  </a>
                </li>
                <li class="footer-location">📍 Oullins, Lyon (France)</li>
              </ul>
            </div>

          </div>

          <!-- Copyright en dessous, centré -->
          <div class="footer-bottom-centered">
            <p>&copy; 2026 Bastian Vivier-Merle. Tous droits réservés.</p>
          </div>

        </div>
      </footer>

      <style>
        .site-footer {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--glass-border);
          padding: 5rem 0 2rem 0;
          margin-top: 6rem;
          color: var(--text-main);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.02);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 3rem;
          align-items: start;
          margin-bottom: 3.5rem;
        }
        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 1rem;
        }
        .footer-logo-img {
          height: 32px;
          width: auto;
          display: block;
        }
        .footer-author-name {
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--text-main);
          letter-spacing: -0.3px;
        }
        .footer-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .footer-title {
          font-size: 1.05rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          color: var(--text-main);
          letter-spacing: -0.3px;
        }
        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links-list a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .footer-links-list a:hover {
          color: var(--primary);
          transform: translateX(3px);
        }
        .footer-email {
          word-break: break-all;
        }
        .footer-social-btns {
          display: flex;
          gap: 10px;
          margin-top: 0.2rem;
          flex-wrap: wrap;
        }
        .footer-social-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(24, 31, 42, 0.05);
          border: 1px solid var(--glass-border);
          padding: 6px 12px;
          border-radius: 9999px;
          color: var(--text-main) !important;
          font-size: 0.85rem !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }
        .footer-social-btn:hover {
          background: var(--primary) !important;
          color: #fff !important;
          border-color: var(--primary) !important;
          transform: translateY(-2px) !important;
        }
        .footer-location {
          color: var(--text-muted);
          font-size: 0.92rem;
          margin-top: 0.4rem;
          font-weight: 500;
        }
        .footer-bottom-centered {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        @media screen and (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media screen and (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      </style>
    `;
  }

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  } else {
    console.error("GSAP ou ScrollTrigger manquant.");
    return;
  }

  /* 1. Animation d'entrée Hero & Bulle de discussion */
  window.scrollTo(0, 0);
  gsap.fromTo(".hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 });
  gsap.fromTo(".hero-tagline", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 });

  const speechBubble = document.getElementById("typingSpeech");
  if (speechBubble) {
    gsap.to(speechBubble, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 1.0
    });
  }

  /* 2. Traînée de photos aléatoires optimisée (anti-lag) */
  const hero = document.getElementById("hero");
  const cursorContainer = document.getElementById("cursor-trail");
  const thumbnails = [
    "assets/images/projet-1.jpg", "assets/images/projet-2.jpg", "assets/images/projet-3.jpg",
    "assets/images/projet-4.jpg", "assets/images/projet-5.jpg", "assets/images/projet-6.jpg",
    "assets/images/projet-7.jpg", "assets/images/projet-8.jpg"
  ];

  if (hero && cursorContainer) {
    let lastX = 0, lastY = 0;
    let lastIndex = -1;
    let throttleTimeout = false;

    hero.addEventListener("mousemove", (e) => {
      if (throttleTimeout) return;
      
      throttleTimeout = setTimeout(() => {
        throttleTimeout = false;
      }, 50);

      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      if (Math.hypot(x - lastX, y - lastY) > 220) {
        lastX = x; lastY = y;
        spawnTrailImage(x, y);
      }
    });

    function spawnTrailImage(x, y) {
      const img = document.createElement("img");
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * thumbnails.length);
      } while (randomIndex === lastIndex && thumbnails.length > 1);
      
      lastIndex = randomIndex;
      img.src = thumbnails[randomIndex];

      img.className = "trail-image";
      img.style.left = `${x}px`; img.style.top = `${y}px`;
      cursorContainer.appendChild(img);

      gsap.fromTo(img, 
        { scale: 0.2, opacity: 0, rotation: (Math.random() - 0.5) * 40 },
        { scale: 1, opacity: 1, rotation: (Math.random() - 0.5) * 15, duration: 0.4, ease: "power2.out" }
      );

      setTimeout(() => {
        gsap.to(img, {
          opacity: 0, scale: 0.8, duration: 0.4,
          onComplete: () => { if (cursorContainer.contains(img)) cursorContainer.removeChild(img); }
        });
      }, 700);
    }
  }

  /* 3. Animations d'affichage au scroll */
  const revealContainers = document.querySelectorAll(".reveal-container");
  revealContainers.forEach((container) => {
    const items = container.querySelectorAll(".reveal-item");
    
    gsap.fromTo(items, 
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  /* 4. Navigation fluide */
  document.querySelectorAll('.glass-navbar a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
      }
    });
  });
});