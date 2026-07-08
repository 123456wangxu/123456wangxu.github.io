(function () {
  var cards = document.querySelectorAll(".article-card, .project-list article, .now-list li");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  cards.forEach(function (card) {
    card.classList.add("reveal");
    observer.observe(card);
  });
}());
