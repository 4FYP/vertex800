<?php
$pageTitle = 'Contact Us';
$pageDesc = 'Contact Vertex800 - Oak Creek, WI. Phone 414-253-9080. Meetings with appointments only.';
require_once __DIR__ . '/includes/config.php';
$data = load_data();
$company = $data['company'];

$status = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = trim(isset($_POST['name']) ? $_POST['name'] : '');
  $email = trim(isset($_POST['email']) ? $_POST['email'] : '');
  $comp = trim(isset($_POST['company']) ? $_POST['company'] : '');
  $projectType = trim(isset($_POST['projectType']) ? $_POST['projectType'] : '');
  $message = trim(isset($_POST['message']) ? $_POST['message'] : '');

  if ($name === '' || $email === '' || $projectType === '' || $message === '') {
    $status = 'error';
    $error = 'Please complete all required fields.';
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $status = 'error';
    $error = 'Please provide a valid email address.';
  } else {
    $to = 'info@vertex800.com';
    $subject = '[Vertex800] New inquiry from ' . $name;
    $body = "Name: {$name}\nEmail: {$email}\nCompany: " . ($comp !== '' ? $comp : '-') . "\nProject Type: {$projectType}\n\nMessage:\n{$message}\n";
    $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'vertex800.com';
    $headers = "From: Vertex800 Website <noreply@{$host}>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    if (@mail($to, $subject, $body, $headers)) {
      $status = 'success';
    } else {
      $status = 'error';
      $error = 'Unable to send email right now. Please call us or email info@vertex800.com.';
    }
  }
}

$projectTypes = array(
  'AI & Engineering', 'Cyber', 'Customer / Digital', 'Audit & Assurance', 'Tax',
  'Strategy & Transactions', 'Finance Transformation', 'Human Capital',
  'Enterprise Performance', 'Operate / Managed Services', 'Other'
);

require __DIR__ . '/includes/header.php';
$mapSrc = 'https://maps.google.com/maps?q=' . rawurlencode($company['address']) . '&t=&z=14&ie=UTF8&iwloc=&output=embed';
?>

<section class="page-hero">
  <?php page_hero_photo('Mob&Web.jpg'); ?>
  <div class="container fade-up">
    <p class="eyebrow">Contact</p>
    <h1>Let's build what's next - together</h1>
    <p>Tell us about your project. Meetings with appointments only.</p>
  </div>
</section>

<section class="section">
  <div class="container" style="display:grid;gap:2.5rem;">
    <div style="display:grid;gap:2.5rem;" class="contact-layout">
      <div class="fade-up">
        <h2 style="margin-top:0;font-size:clamp(1.5rem,3vw,2rem);">Start a conversation</h2>
        <form method="post" action="" class="form-grid" style="margin-top:1.5rem;" novalidate>
          <div class="form-grid two">
            <div>
              <label for="name">Name</label>
              <input id="name" name="name" required autocomplete="name">
            </div>
            <div>
              <label for="email">Email</label>
              <input id="email" name="email" type="email" required autocomplete="email">
            </div>
          </div>
          <div class="form-grid two">
            <div>
              <label for="company">Company</label>
              <input id="company" name="company" autocomplete="organization">
            </div>
            <div>
              <label for="projectType">Project Type</label>
              <select id="projectType" name="projectType" required>
                <option value="" disabled selected>Select a type</option>
                <?php foreach ($projectTypes as $t): ?>
                  <option value="<?= e($t) ?>"><?= e($t) ?></option>
                <?php endforeach; ?>
              </select>
            </div>
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Share goals, timelines, and any constraints..."></textarea>
          </div>

          <?php if ($status === 'success'): ?>
            <p class="alert alert-ok" role="status">Thank you. Your message has been sent. We'll be in touch shortly.</p>
          <?php elseif ($status === 'error'): ?>
            <p class="alert alert-err" role="alert"><?= e($error) ?></p>
          <?php endif; ?>

          <div>
            <button type="submit" class="btn btn-primary gradient-bg">Send Message →</button>
          </div>
        </form>
      </div>

      <div class="fade-up">
        <div class="info-box">
          <h3 style="margin:0;">Vertex800</h3>
          <p style="margin:.35rem 0 0;color:var(--muted);font-size:.9rem;"><?= e($company['tagline']) ?></p>
          <div class="info-row"><div><strong>Address</strong><span><?= e($company['address']) ?></span></div></div>
          <div class="info-row"><div><strong>Phone</strong><a href="tel:<?= e(preg_replace('/\D+/', '', $company['phone'])) ?>"><?= e($company['phone']) ?></a></div></div>
          <div class="info-row"><div><strong>Email</strong><a href="mailto:<?= e($company['email']) ?>"><?= e($company['email']) ?></a></div></div>
          <div class="info-row"><div><strong>Appointments</strong><span><?= e($company['appointmentNote']) ?></span></div></div>
          <div class="socials">
            <a href="<?= e($company['social']['linkedin']) ?>" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            <a href="<?= e($company['social']['instagram']) ?>" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
            <a href="<?= e($company['social']['facebook']) ?>" target="_blank" rel="noopener" aria-label="Facebook">fb</a>
          </div>
        </div>
        <div class="map-frame">
          <iframe title="Vertex800 office location" src="<?= e($mapSrc) ?>" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
@media (min-width: 960px) {
  .contact-layout { grid-template-columns: 1.4fr 1fr !important; }
}
</style>

<?php require __DIR__ . '/includes/footer.php'; ?>
