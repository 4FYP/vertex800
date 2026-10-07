<?php
$pageTitle = 'About Us';
$pageDesc = 'Learn about Vertex800 - our mission, philosophy, and commitment to intelligent software.';
require __DIR__ . '/includes/header.php';
$d = load_data();
$company = $d['company'];
$pillars = $d['brandPillars'];
$stats = $d['stats'];
?>

<section class="page-hero">
  <?php page_hero_photo('D.jpg'); ?>
  <div class="container fade-up">
    <p class="eyebrow">About Vertex800</p>
    <h1>A digital innovation partner for ambitious enterprises</h1>
    <p>For over a decade, Vertex800 has helped organizations scale with intelligent talent and cutting-edge software - specializing in AI, automation, and full-stack development.</p>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="fade-up photo-frame">
      <img src="<?= e(img('Staff.png')) ?>" alt="Vertex800 people and culture">
    </div>
    <div class="section-head fade-up" style="margin:0;">
      <p class="eyebrow" style="color:var(--accent-blue)">Our Story</p>
      <h2>Built for lasting partnership</h2>
      <p>Vertex800 was founded on a simple conviction: software should be intelligent, beautiful, and built to evolve.</p>
      <p style="color:var(--muted);font-size:1.05rem;">As a global IT consulting and software development company, we embed with client teams as true partners - aligning delivery to business outcomes, not just tickets closed.</p>
      <p style="color:var(--muted);font-size:1.05rem;">Our model blends a curated global talent network of top 5% engineers with AI-native architecture practices, enabling faster go-to-market without compromising quality or governance.</p>
    </div>
  </div>
</section>

<section class="section section-surface">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Mission &amp; Philosophy</p>
      <h2>Modular. Scalable. AI-native.</h2>
      <p>Every engagement is guided by systems thinking - designing for change, intelligence, and long-term maintainability.</p>
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

<section class="section section-navy">
  <div class="container split">
    <div class="fade-up">
      <p class="eyebrow">Leadership</p>
      <h2 style="font-size:clamp(1.8rem,4vw,2.8rem);letter-spacing:-.025em;">Guided by a clear point of view</h2>
      <p style="color:rgba(255,255,255,.65);">Our leadership sets a high bar for craftsmanship, partner accountability, and the responsible application of AI.</p>
    </div>
    <blockquote class="quote fade-up">
      <p>“<?= e($company['founderQuote']) ?>”</p>
      <footer>- <?= e($company['founderTitle']) ?></footer>
    </blockquote>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-center fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Culture &amp; Values</p>
      <h2>How we show up for clients and each other</h2>
    </div>
    <div class="grid-3">
      <div class="fade-up"><h3>Excellence without ego</h3><p style="color:var(--muted);">We hold a high standard for craft while remaining collaborative and curious.</p></div>
      <div class="fade-up"><h3>Outcomes over output</h3><p style="color:var(--muted);">Success is measured in business impact - speed, quality, adoption, and lasting systems.</p></div>
      <div class="fade-up"><h3>Intelligence with integrity</h3><p style="color:var(--muted);">We apply AI thoughtfully, with governance, transparency, and respect for people.</p></div>
    </div>
    <div class="stats" style="margin-top:3rem;border-top:1px solid rgba(11,21,38,.08);padding-top:2.5rem;">
      <?php foreach ($stats as $stat): ?>
        <div class="fade-up">
          <p class="stat-value"><span data-count="<?= (int)$stat['value'] ?>" data-suffix="<?= e($stat['suffix']) ?>">0</span></p>
          <p class="stat-label"><?= e($stat['label']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
