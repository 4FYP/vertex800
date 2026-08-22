<?php
$pageTitle = 'Services';
$pageDesc = 'Explore Vertex800 services - AI & Engineering, Cyber, Audit, Tax, Strategy & Transactions, and more.';
require __DIR__ . '/includes/header.php';
$d = load_data();
?>

<section class="page-hero">
  <?php page_hero_photo('IT.jpg'); ?>
  <div class="container fade-up">
    <p class="eyebrow">Our Services</p>
    <h1>Vast services. Rich experience. Real results.</h1>
    <p>Whether you're scaling a growth company or transforming a global enterprise, tap into our breadth of services to drive progress.</p>
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Start Your Project →</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <?php foreach ($d['serviceGroups'] as $group): ?>
      <h2 class="group-title fade-up"><?= e($group['label']) ?></h2>
      <div class="grid-3" style="margin-bottom:1rem;">
        <?php foreach ($d['services'] as $s): if ($s['group'] !== $group['id']) continue; ?>
          <a class="card fade-up" href="<?= e(url('/service.php?slug=' . urlencode($s['slug']))) ?>">
            <div class="card-photo">
              <img src="<?= e(img(service_image($s['slug']))) ?>" alt="<?= e($s['title']) ?>">
            </div>
            <h3><?= e($s['title']) ?></h3>
            <p><?= e($s['tagline']) ?></p>
            <?php if (!empty($s['subAreas'])): ?>
              <p style="font-size:.75rem;color:var(--muted-light);margin-top:.75rem;">
                <?= e(implode(' · ', array_column($s['subAreas'], 'title'))) ?>
              </p>
            <?php endif; ?>
            <span class="more">Explore →</span>
          </a>
        <?php endforeach; ?>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
