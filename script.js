// JavaScript functionality
let originalLink;

function shortenLink() {
    originalLink = document.getElementById('original-link').value.trim();
    if (originalLink) {
        const shortLinkId = Math.random().toString(36).substr(2, 6);
        const shortLink = `${window.location.href}?id=${shortLinkId}&url=${encodeURIComponent(originalLink)}`;
        document.getElementById('shortened-link').href = shortLink;
        document.getElementById('shortened-link').innerText = shortLink;
        document.getElementById('shortened-link-container').style.display = 'block';
    } else {
        alert("Please enter a valid link!");
    }
}

// Check if the page was opened with a shortened link
const urlParams = new URLSearchParams(window.location.search);
const adId = urlParams.get('id');
const targetLink = urlParams.get('url');

if (adId && targetLink) {
    document.body.innerHTML = `
        <div id="ad-page" class="ad-page">
            <!-- Ad Space 1 -->
            <div class="ad-space">
                <a href="https://www.example.com" target="_blank">
                    <img src="https://via.placeholder.com/728x90.png?text=Ad+Banner+1" alt="Ad Banner 1">
                </a>
            </div>
            <!-- Ad Space 2 -->
            <div class="ad-space">
                <a href="https://www.example.com" target="_blank">
                    <img src="https://via.placeholder.com/728x90.png?text=Ad+Banner+2" alt="Ad Banner 2">
                </a>
            </div>
            <!-- Ad Space 3 -->
            <div class="ad-space">
                <a href="https://www.example.com" target="_blank">
                    <img src="https://via.placeholder.com/728x90.png?text=Ad+Banner+3" alt="Ad Banner 3">
                </a>
            </div>
            <!-- Ad Space 4 -->
            <div class="ad-space">
                <a href="https://www.example.com" target="_blank">
                    <img src="https://via.placeholder.com/728x90.png?text=Ad+Banner+4" alt="Ad Banner 4">
                </a>
            </div>
            <p>Redirecting in <span id="timer">10</span> seconds...</p>
        </div>
    `;

    let timer = 10;
    const interval = setInterval(() => {
        timer--;
        document.getElementById('timer').innerText = timer;
        if (timer === 0) {
            clearInterval(interval);
            window.location.href = decodeURIComponent(targetLink);
        }
    }, 1000);
}
