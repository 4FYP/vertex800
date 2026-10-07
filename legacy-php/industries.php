<?php
$pageTitle = 'Industries';
$pageDesc = 'Vertex800 industries: Consumer, Financial Services, Life Sciences, TMT, and more.';
require __DIR__ . '/includes/header.php';
$industries = load_data()['industries'];
?>

<section class="page-hero">
  <?php page_hero_photo('Cloud.jpg'); ?>
  <div class="container fade-up">
    <p class="eyebrow">Industries</p>
    <h1>Domain expertise across the sectors that shape tomorrow</h1>
    <p>We bring technology fluency and industry context to every engagement.</p>
    <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Talk to an Expert →</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <?php foreach ($industries as $i => $ind): ?>
      <article id="<?= e($ind['slug']) ?>" class="fade-up industry-row">
        <div class="industry-row-photo">
          <img src="<?= e(img(industry_image($i))) ?>" alt="<?= e($ind['name']) ?>">
          <h2><?= e($ind['name']) ?></h2>
        </div>
        <div class="industry-row-copy">
          <p class="lead"><?= e($ind['description']) ?></p>
          <p class="note">From strategy through delivery, we help <?= e($ind['name']) ?> organizations adopt AI, modernize platforms, and scale with our global talent network.</p>
          <p><a class="btn btn-outline" href="<?= e(url('/contact.php')) ?>">Discuss your initiative →</a></p>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
