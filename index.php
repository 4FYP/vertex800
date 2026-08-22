<?php
$pageTitle = 'Vertex800 | Digital Innovation Partner';
$pageDesc = 'Global consulting helping businesses scale with intelligent talent and cutting-edge software.';
require __DIR__ . '/includes/header.php';
$d = load_data();
$hero = $d['heroSlides'];
$offerings = $d['offerings'];
$techCategories = $d['techCategories'];
$techStack = $d['techStack'];
$industries = $d['industries'];
$stats = $d['stats'];
$company = $d['company'];
$heroPhotos = array('AI.png', 'IT.jpg', 'D.jpg', 'Business_Intelligence.png', 'MSP Services.png');
?>

<section class="hero">
  <?php foreach ($hero as $i => $slide): ?>
    <div class="hero-photo <?= $i === 0 ? 'active' : '' ?>" data-hero-photo style="background-image:url('<?= e(img($heroPhotos[$i % count($heroPhotos)])) ?>')"></div>
  <?php endforeach; ?>
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <?php foreach ($hero as $i => $slide): ?>
    <div hidden data-slide
      data-title="<?= e($slide['title']) ?>"
      data-desc="<?= e($slide['description']) ?>"
      data-href="<?= e(url('/service.php?slug=' . basename(rtrim($slide['href'], '/')))) ?>">
    </div>
  <?php endforeach; ?>
  <div class="hero-inner">
    <p class="eyebrow">Digital Innovation Partner</p>
    <h1 data-hero-title><?= e($hero[0]['title']) ?></h1>
    <p class="hero-desc" data-hero-desc><?= e($hero[0]['description']) ?></p>
    <div class="hero-actions">
      <a class="btn btn-primary gradient-bg" href="<?= e(url('/contact.php')) ?>">Start Your Project →</a>
      <a class="link" data-hero-link href="<?= e(url('/service.php?slug=' . basename(rtrim($hero[0]['href'], '/')))) ?>">Explore <?= e($hero[0]['title']) ?></a>
    </div>
    <div class="hero-dots" role="tablist">
      <?php foreach ($hero as $i => $slide): ?>
        <button type="button" data-dot class="<?= $i === 0 ? 'active' : '' ?>" aria-label="<?= e($slide['title']) ?>"></button>
      <?php endforeach; ?>
    </div>
    <div class="hero-labels">
      <?php foreach ($hero as $i => $slide): ?>
        <button type="button" data-label class="<?= $i === 0 ? 'active' : '' ?>"><?= e($slide['title']) ?></button>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section-surface">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">What We Offer</p>
      <h2>Capabilities that scale with ambition</h2>
      <p>From AI-native platforms to elite engineering talent, Vertex800 equips enterprises to move faster with confidence.</p>
    </div>
    <div class="grid-4">
      <?php foreach ($offerings as $i => $item):
        $href = $item['href'];
        if (strpos($href, '/services/') === 0) {
          $slug = basename($href);
          $href = url('/service.php?slug=' . $slug);
        } elseif ($href === '/careers') {
          $href = url('/careers.php');
        } elseif ($href === '/about') {
          $href = url('/about.php');
        } else {
          $href = url(rtrim($href, '/') . '.php');
        }
      ?>
        <a class="card offer-card fade-up" href="<?= e($href) ?>" style="transition-delay:<?= $i * 0.05 ?>s">
          <div class="card-photo">
            <img src="<?= e(img(offering_image($item['title']))) ?>" alt="<?= e($item['title']) ?>">
          </div>
          <span class="card-num"><?= str_pad((string)($i + 1), 2, '0', STR_PAD_LEFT) ?></span>
          <h3><?= e($item['title']) ?></h3>
          <p><?= e($item['description']) ?></p>
          <span class="more">Read More →</span>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow" style="color:var(--accent-blue)">Expertise Across Technologies</p>
      <h2>Built on the stacks that power modern enterprises</h2>
      <p>We engineer with proven platforms and emerging AI capabilities - always with scalability and maintainability in mind.</p>
    </div>
    <div class="grid-3">
      <?php foreach ($techCategories as $cat): ?>
        <div class="border-accent-top fade-up">
          <h3 style="margin:0;font-size:1.35rem;"><?= e($cat['title']) ?></h3>
          <p style="color:var(--muted);"><?= e($cat['description']) ?></p>
          <div style="margin-top:1rem;">
            <?php foreach ($cat['icons'] as $icon): ?>
              <span class="tag"><?= e($icon) ?></span>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
  <div class="marquee-wrap fade-up" style="margin-top:3rem;">
    <div class="marquee">
      <?php
      $chips = array_merge($techStack, $techStack);
      foreach ($chips as $t): ?>
        <span class="chip"><?= e($t) ?></span>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section-navy">
  <div class="container">
    <div class="section-head fade-up">
      <p class="eyebrow">Industries We Serve</p>
      <h2>Deep domain fluency. Cross-industry impact.</h2>
      <p>We partner with leaders across sectors where technology, trust, and transformation intersect.</p>
    </div>
    <div class="grid-4">
      <?php foreach ($industries as $i => $ind): ?>
        <a class="industry-tile fade-up" href="<?= e(url('/industries.php#' . $ind['slug'])) ?>">
          <img class="tile-img" src="<?= e(img(industry_image($i))) ?>" alt="<?= e($ind['name']) ?>">
          <div class="shade"></div>
          <div class="label">
            <h3><?= e($ind['name']) ?></h3>
            <p><?= e($ind['description']) ?></p>
          </div>
        </a>
      <?php endforeach; ?>
    </div>
    <p style="text-align:center;margin-top:2rem;">
      <a href="<?= e(url('/industries.php')) ?>" style="color:var(--accent);font-weight:600;">Explore all industries →</a>
    </p>
  </div>
</section>

<section class="section" style="border-block:1px solid rgba(11,21,38,.08);padding:3.5rem 0;">
  <div class="container">
    <p class="eyebrow fade-up" style="text-align:center;color:var(--accent-blue);">Client Impact</p>
    <div class="stats" style="margin-top:2rem;">
      <?php foreach ($stats as $stat): ?>
        <div class="fade-up">
          <p class="stat-value"><span data-count="<?= (int)$stat['value'] ?>" data-suffix="<?= e($stat['suffix']) ?>">0</span></p>
          <p class="stat-label"><?= e($stat['label']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section-surface">
  <div class="container split">
    <div class="fade-up photo-frame">
      <img src="<?= e(img('Staff.png')) ?>" alt="Vertex800 team and talent network">
    </div>
    <div>
      <div class="section-head" style="margin:0;">
        <p class="eyebrow" style="color:var(--accent-blue)">Our Architecture Philosophy</p>
        <h2>Modular. Scalable. AI-native.</h2>
        <p>We design software systems that compound value over time - intelligent enough to adapt, beautiful enough to inspire trust, and structured to evolve with your business.</p>
      </div>
      <blockquote class="quote" style="margin-top:2rem;">
        <p>“<?= e($company['founderQuote']) ?>”</p>
        <footer>- <?= e($company['founderTitle']) ?></footer>
      </blockquote>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
