<?php
// Basic routing
$url = isset($_GET['url']) ? $_GET['url'] : '';
$url = rtrim($url, '/');
$url = filter_var($url, FILTER_SANITIZE_URL);
$url = explode('/', $url);

// Default page
$page = 'home';

// Determine which page to load
if (!empty($url[0])) {
    switch ($url[0]) {
        case 'about':
            $page = 'about';
            break;
        case 'top-1-percent-tech-talent':
            $page = 'top-1-percent';
            break;
        default:
            // If page not found, redirect to home
            header('Location: /');
            exit;
    }
}

// Set the content file path
$content = __DIR__ . '/pages/' . $page . '.php';

// Check if the content file exists
if (!file_exists($content)) {
    header('Location: /');
    exit;
}

// Include the main layout
include __DIR__ . '/app.php'; 