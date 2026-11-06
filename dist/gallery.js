const gallery = document.querySelector("#gallery");
const template = document.querySelector("#card-template");
const cards = document.createDocumentFragment();
const shuffledSites = [...portfolioSites];

for (let lastIndex = shuffledSites.length - 1; lastIndex > 0; lastIndex--) {
  const randomIndex = Math.floor(Math.random() * (lastIndex + 1));
  [shuffledSites[lastIndex], shuffledSites[randomIndex]] = [shuffledSites[randomIndex], shuffledSites[lastIndex]];
}

shuffledSites.forEach(({ title, url, image }, index) => {
  const card = template.content.cloneNode(true);
  const link = card.querySelector(".card");
  const preview = card.querySelector(".preview");
  const thumbnail = preview.querySelector(".preview-image");
  const status = preview.querySelector(".preview-status");

  link.href = url;
  card.querySelector(".title").textContent = title;
  if (index >= 3) thumbnail.loading = "lazy";

  const showUnavailable = () => {
    status.hidden = false;
  };
  thumbnail.addEventListener("error", showUnavailable, { once: true });
  thumbnail.addEventListener("load", () => {
    thumbnail.decode().then(() => preview.classList.add("is-loaded"), showUnavailable);
  }, { once: true });
  thumbnail.src = image;

  cards.append(card);
});

gallery.append(cards);
