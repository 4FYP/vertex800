<?php
require_once __DIR__ . '/config.php';
$data = load_data();
$company = $data['company'];
$services = $data['services'];
$serviceGroups = $data['serviceGroups'];
$industries = $data['industries'];
$alliances = $data['alliances'];
$pageTitle = isset($pageTitle) ? $pageTitle . ' | Vertex800' : 'Vertex800 | Digital Innovation Partner';
$pageDesc = isset($pageDesc) ? $pageDesc : 'Global consulting and technology firm helping organizations scale with intelligent talent and cutting-edge solutions.';
$bodyClass = isset($bodyClass) ? $bodyClass : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= e($pageTitle) ?></title>
  <meta name="description" content="<?= e($pageDesc) ?>">
  <link rel="stylesheet" href="<?= e(asset('css/styles.css')) ?>">
  <link rel="icon" href="<?= e(logo_src()) ?>" type="image/png">
</head>
<body class="<?= e($bodyClass) ?>">
<header class="site-header">
  <div class="container nav">
    <a class="logo" href="<?= e(url('/')) ?>">
      <img src="<?= e(logo_src()) ?>" alt="Vertex800 AI Digital Agency">
    </a>

    <nav class="nav-links" aria-label="Primary">
      <a href="<?= e(url('/about.php')) ?>">About</a>
      <button type="button" class="nav-btn" data-mega="services" aria-haspopup="true">Services ▾</button>
      <button type="button" class="nav-btn" data-mega="industries" aria-haspopup="true">Industries ▾</button>
      <a href="<?= e(url('/alliances.php')) ?>">Alliances</a>
      <a href="<?= e(url('/insights.php')) ?>">Insights</a>
      <a href="<?= e(url('/careers.php')) ?>">Careers</a>
      <a href="<?= e(url('/contact.php')) ?>">Contact</a>
    </nav>

    <div class="nav-cta">
      <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Start Your Project →</a>
    </div>

    <button type="button" class="menu-toggle" aria-label="Open menu">☰</button>
  </div>

  <div class="mega" data-panel="services">
    <div class="container">
      <div class="mega-top">
        <div>
          <p class="mega-label">Our Services</p>
          <p>Vast capabilities. Deep expertise. Real results.</p>
        </div>
        <a class="mega-all" href="<?= e(url('/services.php')) ?>">View all services →</a>
      </div>
      <div class="mega-grid">
        <?php foreach ($serviceGroups as $group): ?>
          <div class="mega-col">
            <h4><?= e($group['label']) ?></h4>
            <?php foreach ($services as $s): if ($s['group'] !== $group['id']) continue; ?>
              <a href="<?= e(url('/service.php?slug=' . urlencode($s['slug']))) ?>"><?= e($s['shortTitle']) ?></a>
            <?php endforeach; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <div class="mega" data-panel="industries">
    <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:2rem;">
      <div>
        <p class="mega-label">Industries</p>
        <div class="mega-grid" style="grid-template-columns:repeat(2,1fr);margin-top:1rem;">
          <?php foreach ($industries as $ind): ?>
            <a href="<?= e(url('/industries.php#' . $ind['slug'])) ?>" style="color:rgba(255,255,255,.75);padding:.4rem 0;"><?= e($ind['name']) ?></a>
          <?php endforeach; ?>
        </div>
      </div>
      <div style="border-left:1px solid rgba(255,255,255,.1);padding-left:2rem;">
        <p class="mega-label">Alliances</p>
        <div style="margin-top:1rem;">
          <?php foreach ($alliances as $a): ?>
            <a href="<?= e(url('/alliances.php#' . $a['slug'])) ?>" style="display:block;color:rgba(255,255,255,.75);padding:.35rem 0;"><?= e($a['name']) ?></a>
          <?php endforeach; ?>
        </div>
        <a class="mega-all" href="<?= e(url('/alliances.php')) ?>" style="display:inline-block;margin-top:1rem;">All alliances →</a>
      </div>
    </div>
  </div>
</header>

<div class="mobile-drawer" aria-hidden="true">
  <a class="logo" href="<?= e(url('/')) ?>" style="margin-bottom:1rem;">
    <img src="<?= e(logo_src()) ?>" alt="Vertex800 AI Digital Agency">
  </a>
  <a href="<?= e(url('/about.php')) ?>">About</a>
  <details>
    <summary>Services</summary>
    <div class="sub">
      <a href="<?= e(url('/services.php')) ?>">All services</a>
      <?php foreach ($services as $s): ?>
        <a href="<?= e(url('/service.php?slug=' . urlencode($s['slug']))) ?>"><?= e($s['shortTitle']) ?></a>
      <?php endforeach; ?>
    </div>
  </details>
  <details>
    <summary>Industries</summary>
    <div class="sub">
      <?php foreach ($industries as $ind): ?>
        <a href="<?= e(url('/industries.php#' . $ind['slug'])) ?>"><?= e($ind['name']) ?></a>
      <?php endforeach; ?>
    </div>
  </details>
  <a href="<?= e(url('/alliances.php')) ?>">Alliances</a>
  <a href="<?= e(url('/insights.php')) ?>">Insights</a>
  <a href="<?= e(url('/careers.php')) ?>">Careers</a>
  <a href="<?= e(url('/contact.php')) ?>">Contact</a>
  <p style="margin-top:1.5rem;">
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Start Your Project →</a>
  </p>
</div>

<main>
