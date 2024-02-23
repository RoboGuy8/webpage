document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile-card');

    profileCards.forEach(card => {
        card.style.display = 'none'; // Initially hide all cards
    });

    document.getElementById('student-menu').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const selectedCardId = event.target.getAttribute('href').substring(1);
            profileCards.forEach(card => {
                card.style.display = card.id === selectedCardId ? 'block' : 'none';
            });
        }
    });
});