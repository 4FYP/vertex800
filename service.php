<?php
require_once __DIR__ . '/includes/config.php';
$slug = isset($_GET['slug']) ? preg_replace('/[^a-z0-9\-]/', '', strtolower($_GET['slug'])) : '';
$service = get_service($slug);
if (!$service) {
  http_response_code(404);
  $pageTitle = 'Service Not Found';
  require __DIR__ . '/includes/header.php';
  echo '<section class="page-hero"><div class="container"><h1>Service not found</h1><p><a class="btn btn-primary gradient-bg" href="' . e(url('/services.php')) . '">View all services</a></p></div></section>';
  require __DIR__ . '/includes/footer.php';
  exit;
}
$pageTitle = $service['title'];
$pageDesc = $service['overview'];
require __DIR__ . '/includes/header.php';
$d = load_data();
$others = array();
foreach ($d['services'] as $s) {
  if ($s['slug'] !== $service['slug']) $others[] = $s;
}
$others = array_slice($others, 0, 8);
?>

<section class="page-hero">
  <?php page_hero_photo(service_image($service['slug'])); ?>
  <div class="container fade-up">
    <p class="eyebrow">Services</p>
    <h1><?= e($service['title']) ?></h1>
    <p><?= e($service['tagline']) ?></p>
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Start Your Project →</a>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="section-head fade-up" style="margin:0;">
      <p class="eyebrow" style="color:var(--accent-blue)">Overview</p>
      <h2>How we deliver <?= e($service['shortTitle']) ?></h2>
      <p><?= e($service['overview']) ?></p>
    </div>
    <div class="fade-up photo-frame">
      <img src="<?= e(img(service_image($service['slug']))) ?>" alt="<?= e($service['title']) ?>">
    </div>
  </div>
  <div class="container fade-up" style="margin-top:2.5rem;">
    <h3 style="margin-top:0;">Capabilities</h3>
    <ul class="cap-list">
      <?php foreach ($service['capabilities'] as $cap): ?>
        <li><?= e($cap) ?></li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>

<?php if (!empty($service['subAreas'])): ?>
<section class="section section-surface">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Sub-areas</p>
      <h2>Where we focus</h2>
    </div>
    <div class="grid-3">
      <?php foreach ($service['subAreas'] as $sub): ?>
        <div class="card fade-up" style="border-top:2px solid var(--accent);">
          <h3><?= e($sub['title']) ?></h3>
          <p><?= e($sub['description']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<?php endif; ?>

<section class="section">
  <div class="container split">
    <div>
      <div class="section-head fade-up">
        <p class="eyebrow" style="color:var(--accent-blue)">Industries</p>
        <h2>Where this creates impact</h2>
      </div>
      <div class="grid-2">
        <?php foreach (array_slice($d['industries'], 0, 6) as $ind): ?>
          <a class="card fade-up" href="<?= e(url('/industries.php#' . $ind['slug'])) ?>" style="padding:1rem;">
            <h3 style="margin:0;font-size:1rem;"><?= e($ind['name']) ?></h3>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
    <div>
      <div class="section-head fade-up">
        <p class="eyebrow" style="color:var(--accent-blue)">Alliances</p>
        <h2>Technology partners</h2>
      </div>
      <div class="fade-up">
        <?php foreach ($d['alliances'] as $a): ?>
          <a class="tag" href="<?= e(url('/alliances.php#' . $a['slug'])) ?>"><?= e($a['name']) ?></a>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<section class="section section-navy" style="text-align:center;">
  <div class="container fade-up">
    <h2 style="font-size:clamp(1.8rem,4vw,2.5rem);">Ready to explore <?= e($service['shortTitle']) ?>?</h2>
    <p style="color:rgba(255,255,255,.6);max-width:32rem;margin:1rem auto;">Tell us about your goals. We'll respond with a clear path to value.</p>
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Contact Us →</a>
  </div>
</section>

<section class="section section-surface">
  <div class="container">
    <p class="eyebrow" style="color:var(--accent-blue)">More Services</p>
    <div style="margin-top:1rem;">
      <?php foreach ($others as $s): ?>
        <a class="tag" href="<?= e(url('/service.php?slug=' . urlencode($s['slug']))) ?>"><?= e($s['shortTitle']) ?></a>
      <?php endforeach; ?>
      <a class="tag" href="<?= e(url('/services.php')) ?>" style="color:var(--accent-blue);">View all →</a>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
