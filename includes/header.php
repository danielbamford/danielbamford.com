<header class="py-4">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="/">Daniel Bamford</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link <?php echo $currentPage === 'home' ? 'active' : ''; ?>" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo $currentPage === 'about' ? 'active' : ''; ?>" href="/about/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo $currentPage === 'top-1-percent' ? 'active' : ''; ?>" href="/top-1-percent-tech-talent/">Top 1% Tech Talent</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header> 