<?php
$pageTitle = 'Insights';
$pageDesc = 'Thought leadership from Vertex800 on AI, cloud, cyber, tax, and digital transformation.';
require __DIR__ . '/includes/header.php';
$d = load_data();
$insights = $d['insights'];
$cats = $d['insightCategories'];
?>

<section class="page-hero">
  <?php page_hero_photo('Business_Intelligence.png'); ?>
  <div class="container fade-up">
    <p class="eyebrow">Insights</p>
    <h1>Perspectives on technology, talent, and transformation</h1>
    <p>Thought leadership from Vertex800 practitioners - practical frameworks for AI, cloud, and digital transformation.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="filter-bar fade-up">
      <?php foreach ($cats as $i => $cat): ?>
        <button type="button" data-filter="<?= e($cat) ?>" class="<?= $i === 0 ? 'active' : '' ?>"><?= e($cat) ?></button>
      <?php endforeach; ?>
    </div>
    <div class="grid-3">
      <?php foreach ($insights as $article): ?>
        <article class="card fade-up" data-category="<?= e($article['category']) ?>">
          <p class="meta">
            <strong style="color:var(--accent-blue);text-transform:uppercase;letter-spacing:.08em;font-size:.7rem;"><?= e($article['category']) ?></strong>
            · <?= e(date('M j, Y', strtotime($article['date']))) ?>
            · <?= e($article['readTime']) ?>
          </p>
          <h3><?= e($article['title']) ?></h3>
          <p><?= e($article['excerpt']) ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
