<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle . ' | Daniel Bamford' : 'Daniel Bamford'; ?></title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Inter Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="/assets/css/style.css" rel="stylesheet">
    
    <!-- Schema.org markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Daniel Bamford",
        "jobTitle": "Director (APAC - Technology)",
        "worksFor": {
            "@type": "Organization",
            "name": "Robert Half Japan"
        }
    }
    </script>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <main class="container">
        <?php include $content; ?>
    </main>
    
    <?php include 'includes/footer.php'; ?>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- ApexCharts -->
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <!-- Custom JS -->
    <script src="/assets/js/main.js"></script>
</body>
</html> 