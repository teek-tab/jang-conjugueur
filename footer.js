// Gestion du footer
document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();
  const currentUrl = encodeURIComponent(window.location.href);
  
  const footerHTML = `
    <div class="footer-container">
      <!-- Description -->
      <p class="footer-description">
        <strong>JANG</strong> – Conjugueur de verbes en <span class="lang">Pular</span><br>
        Outil créé pour faciliter l'apprentissage et la documentation de cette langue.
      </p>
      
      <!-- Boutons d'action -->
      <div class="footer-actions">
        <a href="https://wa.me/221705113094?text=Bonjour%20Thierno%20!%20%F0%9F%91%8B%0A%0AJe%20vous%20contacte%20%C3%A0%20propos%20du%20conjugueur%20JANG%20:%0A%0A%E2%9C%85%20*Type*%20:%20Signalement%20d'erreur%0A%E2%9C%85%20*Verbe*%20:%20%0A%E2%9C%85%20*Proposition%20de%20correction*%20:%20%0A%E2%9C%85%20*Page%20concern%C3%A9e*%20:%20%0A%0AJe%20vous%20remercie%20pour%20votre%20travail%20%F0%9F%8F%81"
           target="_blank" rel="noopener"
           class="footer-btn footer-btn-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 0 5.496 0 12.05c0 2.454.795 4.727 2.141 6.787l-2.147 7.847 8.046-2.114a11.814 11.814 0 005.074 1.008c6.555 0 11.887-5.332 11.887-11.886 0-3.177-1.274-6.159-3.587-8.4-.993-.992-2.295-1.545-3.686-1.545z"/></svg>
          Signaler une erreur sur WhatsApp
        </a>
        
        <a href="soutenir.html" class="footer-btn footer-btn-support">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          Soutenir le projet
        </a>
      </div>
      
      <!-- Partage -->
      <p class="share-title">Aidez à diffuser JANG autour de vous !</p>
      <div class="share-buttons">
        <a href="https://wa.me/?text=Découvrez%20*JANG*%20%3A%20le%20conjugueur%20complet%20de%20verbes%20en%20Pular%20!%20%F0%9F%93%9A%0A%0ATous%20les%20temps%2C%20tous%20les%20verbes%20%F0%9F%94%97%0A%0A${currentUrl}"
           target="_blank" rel="noopener"
           class="share-btn share-btn-whatsapp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 0 5.496 0 12.05c0 2.454.795 4.727 2.141 6.787l-2.147 7.847 8.046-2.114a11.814 11.814 0 005.074 1.008c6.555 0 11.887-5.332 11.887-11.886 0-3.177-1.274-6.159-3.587-8.4-.993-.992-2.295-1.545-3.686-1.545z"/></svg>
          Partager sur WhatsApp
        </a>

        <a href="https://www.facebook.com/sharer/sharer.php?u=${currentUrl}" target="_blank" rel="noopener"
           class="share-btn share-btn-facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Partager sur Facebook
        </a>
      </div>

      <!-- Liens -->
      <div class="footer-links">
        <div class="links-row">
          
          <a href="https://wa.me/221705113094?text=Bonjour%20Thierno%20!%20Je%20vous%20contacte%20%C3%A0%20propos%20de%20JANG."
             target="_blank" rel="noopener"
             class="footer-link footer-link-whatsapp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 0 5.496 0 12.05c0 2.454.795 4.727 2.141 6.787l-2.147 7.847 8.046-2.114a11.814 11.814 0 005.074 1.008c6.555 0 11.887-5.332 11.887-11.886 0-3.177-1.274-6.159-3.587-8.4-.993-.992-2.295-1.545-3.686-1.545z"/></svg>
            WhatsApp
          </a>
          
          <a href="soutenir.html" class="footer-link footer-link-support">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Soutenir
          </a>
          
          <a href="https://github.com/teek-tab" target="_blank" rel="noopener" 
             class="footer-link footer-link-github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            Code source
          </a>
        </div>
        
        <!-- Copyright -->
        <div class="copyright">
          <p>
            © ${currentYear} • <strong>JANG</strong> – Conjugueur Pular • Projet étudiant par Thierno Amadou BAH<br>
            <a href="mentions-legales.html" class="links-row">Mentions légales</a>
            <a href="politique-confidentialite.html" class="links-row">Politique de confidentialité</a>
            <small>WhatsApp: + 70 511 30 94 • Email: thiernoamadoubah.004@gmail.com</small>
          </p>
        </div>
            
      </div>
    </div>
  `;

  footerContainer.innerHTML = footerHTML;

  // Effets hover
  const footerLinks = footerContainer.querySelectorAll('a');
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.opacity = '0.9';
      this.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
      this.style.transform = 'translateY(0)';
    });
  });
});