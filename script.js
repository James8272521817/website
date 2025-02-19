function openLesson(title, videoUrl) {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('lesson-section').classList.remove('hidden');

    document.getElementById('lesson-title').innerText = title;
    document.getElementById('lesson-video').src = videoUrl;
}

function goBackToHome() {
    document.getElementById('lesson-section').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');

    document.getElementById('lesson-video').src = "";
}