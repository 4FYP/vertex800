<?php
$pageTitle = 'Alliances';
$pageDesc = 'Vertex800 alliances with AWS, Google, Oracle, Salesforce, SAP, ServiceNow, and Workday.';
require __DIR__ . '/includes/header.php';
$alliances = load_data()['alliances'];
?>

<section class="page-hero">
  <?php page_hero_photo('Cloud1.jpg'); ?>
  <div class="container fade-up">
    <p class="eyebrow">Alliances</p>
    <h1>Technology alliances that accelerate outcomes</h1>
    <p>We combine Vertex800 expertise with leading platforms so you get certified depth and faster delivery.</p>
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Partner with Us →</a>
  </div>
</section>

<section class="section">
  <div class="container grid-3">
    <?php foreach ($alliances as $a): ?>
      <article id="<?= e($a['slug']) ?>" class="card fade-up" style="scroll-margin-top:6rem;">
        <p class="eyebrow" style="color:var(--accent-blue);margin:0;">Alliance</p>
        <h2 style="font-size:1.6rem;margin:.75rem 0 0;"><?= e($a['name']) ?></h2>
        <p><?= e($a['description']) ?></p>
        <a class="more" href="<?= e(url('/contact.php')) ?>">Discuss <?= e($a['name']) ?> initiatives →</a>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
