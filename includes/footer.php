<?php
$company = load_data()['company'];
$services = load_data()['services'];
$featured = ['ai-engineering','cyber','customer','audit','direct-tax','strategy-transactions','operate','human-capital'];
?>
</main>

<footer class="site-footer">
  <div class="container footer-cta">
    <div>
      <h2>Ready to build what's next?</h2>
      <p>Partner with Vertex800 to scale intelligent software, elite talent, and lasting digital advantage.</p>
    </div>
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Start Your Project →</a>
  </div>

  <div class="container footer-grid">
    <div>
      <a class="logo" href="<?= e(url('/')) ?>">
        <img src="<?= e(logo_src()) ?>" alt="Vertex800 AI Digital Agency">
      </a>
      <p style="margin-top:1rem;">A global consulting and technology firm helping organizations scale with intelligent talent and cutting-edge solutions - from AI &amp; Engineering to Cyber, Tax, Audit, and Strategy &amp; Transactions.</p>
      <div class="socials">
        <a href="<?= e($company['social']['linkedin']) ?>" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
        <a href="<?= e($company['social']['instagram']) ?>" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
        <a href="<?= e($company['social']['facebook']) ?>" target="_blank" rel="noopener" aria-label="Facebook">fb</a>
      </div>
    </div>
    <div>
      <h4>Services</h4>
      <?php foreach ($services as $s): if (!in_array($s['slug'], $featured, true)) continue; ?>
        <a href="<?= e(url('/service.php?slug=' . urlencode($s['slug']))) ?>"><?= e($s['shortTitle']) ?></a>
      <?php endforeach; ?>
      <a href="<?= e(url('/services.php')) ?>" style="color:var(--accent);font-weight:600;margin-top:.5rem;">View all services →</a>
    </div>
    <div>
      <h4>Quick Links</h4>
      <a href="<?= e(url('/about.php')) ?>">About</a>
      <a href="<?= e(url('/services.php')) ?>">Services</a>
      <a href="<?= e(url('/industries.php')) ?>">Industries</a>
      <a href="<?= e(url('/alliances.php')) ?>">Alliances</a>
      <a href="<?= e(url('/insights.php')) ?>">Insights</a>
      <a href="<?= e(url('/careers.php')) ?>">Careers</a>
      <a href="<?= e(url('/contact.php')) ?>">Contact</a>
    </div>
    <div>
      <h4>Contact</h4>
      <a href="tel:<?= e(preg_replace('/\D+/', '', $company['phone'])) ?>"><?= e($company['phone']) ?></a>
      <a href="mailto:<?= e($company['email']) ?>"><?= e($company['email']) ?></a>
      <p><?= e($company['address']) ?></p>
      <p style="font-style:italic;opacity:.7;"><?= e($company['appointmentNote']) ?></p>
    </div>
  </div>

  <div class="container footer-bottom">
    <span><?= e($company['copyright']) ?></span>
    <span><?= e($company['tagline']) ?></span>
  </div>
</footer>

<script src="<?= e(asset('js/main.js')) ?>"></script>
</body>
</html>
