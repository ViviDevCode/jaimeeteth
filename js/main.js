document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    });
  });

  // Reveal elements on scroll
  const observerOptions = {
    threshold: 0.18,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach((element) => {
    revealObserver.observe(element);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const expanded = button.classList.toggle('active');

      if (expanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // Typing effect for headline
  const headline = document.querySelector('.hero-title');
  const typePhrase = 'Convierto ideas en vídeos que venden';
  let charIndex = 0;

  if (headline) {
    headline.textContent = '';
    const typeInterval = setInterval(() => {
      const displayedText = typePhrase.substring(0, charIndex);
      headline.textContent = displayedText;

      if (charIndex < typePhrase.length) {
        charIndex += 1;
      } else {
        clearInterval(typeInterval);
      }
    }, 65);
  }
});
