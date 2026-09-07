<?php
/**
 * All-in-one site helpers.
 * Every page lives in this same folder, so links are relative.
 * Works as:
 *   /godaddy-site/
 *   /Revamped_Site/
 *   domain root
 * with zero path configuration.
 */

function url($path = '') {
  $path = ltrim((string) $path, '/');
  if ($path === '' || $path === 'index.php') {
    return 'index.php';
  }
  return $path;
}

function hero_href($href) {
  $href = (string) $href;
  if (strpos($href, '/services/') === 0) {
    return url('/service.php?slug=' . basename(rtrim($href, '/')));
  }
  return url($href);
}

function asset_version($relativePath) {
  $full = __DIR__ . '/../' . ltrim((string) $relativePath, '/');
  if (function_exists('file_exists') && file_exists($full)) {
    return (string) filemtime($full);
  }
  return '1';
}

function asset($path) {
  $path = ltrim((string) $path, '/');
  $rel = 'assets/' . $path;
  $v = asset_version($rel);
  return $rel . '?v=' . $v;
}

function img($file) {
  $file = ltrim(str_replace('\\', '/', (string) $file), '/');
  $parts = explode('/', $file);
  $encoded = implode('/', array_map('rawurlencode', $parts));
  $rel = 'images/' . $encoded;
  $v = asset_version('images/' . $file);
  return $rel . '?v=' . $v;
}

function logo_src() {
  return img('logo.png');
}

function gallery_images() {
  return array(
    'AI.png',
    'IT.jpg',
    'D.jpg',
    'Cloud.jpg',
    'Cloud1.jpg',
    'WebDevelopment.png',
    'MobileDevelopment.png',
    'Mob&Web.jpg',
    'Staff.png',
    'Business_Intelligence.png',
    'MSP Services.png',
  );
}

function offering_image($title) {
  $map = array(
    'AI & Engineering' => 'AI.png',
    'Cyber' => 'IT.jpg',
    'Customer' => 'D.jpg',
    'Enterprise Performance' => 'Cloud.jpg',
    'Strategy & Transactions' => 'Business_Intelligence.png',
    'Finance Transformation' => 'Cloud1.jpg',
    'Human Capital' => 'Staff.png',
    'Operate' => 'MSP Services.png',
  );
  return isset($map[$title]) ? $map[$title] : 'IT.jpg';
}

function service_image($slug) {
  $map = array(
    'ai-engineering' => 'AI.png',
    'cyber' => 'IT.jpg',
    'customer' => 'D.jpg',
    'enterprise-performance' => 'Cloud.jpg',
    'operate' => 'MSP Services.png',
    'business-process-solutions' => 'MSP Services.png',
    'human-capital' => 'Staff.png',
    'global-employer-services' => 'Staff.png',
    'finance' => 'Business_Intelligence.png',
    'strategy-transactions' => 'Business_Intelligence.png',
    'tax-transformation' => 'Business_Intelligence.png',
    'direct-tax' => 'Business_Intelligence.png',
    'indirect-tax' => 'Business_Intelligence.png',
    'blockchain-digital-assets' => 'AI.png',
    'sustainability' => 'Cloud1.jpg',
    'vertex-private' => 'Staff.png',
  );
  if (isset($map[$slug])) {
    return $map[$slug];
  }
  $all = gallery_images();
  $i = abs(crc32($slug)) % count($all);
  return $all[$i];
}

function industry_image($index) {
  $all = gallery_images();
  return $all[$index % count($all)];
}

function page_hero_photo($file) {
  echo '<div class="page-hero-photo" style="background-image:url(\'' . e(img($file)) . '\')"></div>';
}

function e($str) {
  return htmlspecialchars((string) $str, ENT_QUOTES, 'UTF-8');
}

function load_data() {
  static $data = null;
  if ($data === null) {
    $json = file_get_contents(__DIR__ . '/data.json');
    $data = json_decode($json, true);
  }
  return $data;
}

function get_service($slug) {
  $data = load_data();
  foreach ($data['services'] as $s) {
    if ($s['slug'] === $slug) {
      return $s;
    }
  }
  return null;
}
