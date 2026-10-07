<?php
$pageTitle = 'Careers';
$pageDesc = "Join Vertex800's Global Talent Network - top 5% engineers and consultants.";
require __DIR__ . '/includes/header.php';
$d = load_data();
$careers = $d['careers'];
$pillars = $d['brandPillars'];
?>

<section class="page-hero">
  <?php page_hero_photo('Staff.png'); ?>
  <div class="container fade-up">
    <p class="eyebrow">Careers</p>
    <h1>Join a global talent network of the top 5%</h1>
    <p>Build intelligent software with practitioners who care about craft, partnership, and lasting impact.</p>
    <a class="btn btn-primary gradient-bg" href="#roles">View Open Roles →</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Why Vertex800</p>
      <h2>Culture that compounds excellence</h2>
    </div>
    <div class="grid-3">
      <div class="card fade-up"><h3>Global by design</h3><p>Collaborate across borders with colleagues who set a high bar for engineering and consulting craft.</p></div>
      <div class="card fade-up"><h3>Enterprise impact</h3><p>Ship products and platforms that matter - AI, cloud, and full-stack systems at real scale.</p></div>
      <div class="card fade-up"><h3>Flexible engagement</h3><p>Remote-first opportunities with optional hub presence and client-site engagements when needed.</p></div>
    </div>
  </div>
</section>

<section class="section section-surface">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Brand Pillars</p>
      <h2>What we stand for</h2>
    </div>
    <div class="grid-4">
      <?php foreach ($pillars as $p): ?>
        <div class="card fade-up" style="border-top:2px solid var(--accent);">
          <h3><?= e($p['title']) ?></h3>
          <p><?= e($p['description']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section" id="roles" style="scroll-margin-top:5rem;">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Open Roles</p>
      <h2>Current opportunities</h2>
      <p>Don't see a perfect fit? We're always interested in exceptional talent.</p>
    </div>
    <?php foreach ($careers as $role): ?>
      <div class="role-row fade-up">
        <div>
          <h3 style="margin:0;font-size:1.15rem;"><?= e($role['title']) ?></h3>
          <p class="meta" style="margin:.4rem 0 0;"><?= e($role['team']) ?> · <?= e($role['location']) ?> · <?= e($role['type']) ?></p>
        </div>
        <a class="btn btn-outline" href="<?= e(url('/contact.php')) ?>">Apply →</a>
      </div>
    <?php endforeach; ?>
    <p class="fade-up" style="text-align:center;margin-top:2rem;color:var(--muted);">
      Send your profile to <a href="mailto:info@vertex800.com" style="color:var(--accent-blue);font-weight:600;">info@vertex800.com</a>
    </p>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
