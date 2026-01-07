document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll("video");
    let soundEnabled = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                if (soundEnabled) {
                    video.muted = false;
                    video.volume = 1;
                }
                video.play().catch(() => {});
            } else {
                video.pause();
                video.muted = true;
            }
        });
    }, { threshold: 0.6 });

    videos.forEach(video => {
        observer.observe(video);

        video.addEventListener("click", () => {
            soundEnabled = true;   // 🔓 browser unlock
            video.muted = false;
            video.volume = 1;
            video.play();
        });
    });

});