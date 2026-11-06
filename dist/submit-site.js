const submitSiteButton = document.querySelector("#open-submit-site");
const submitSiteDialog = document.querySelector("#submit-site-dialog");

submitSiteButton.hidden = false;
submitSiteButton.addEventListener("click", () => submitSiteDialog.showModal());

submitSiteDialog.addEventListener("click", (event) => {
  if (event.target === submitSiteDialog) submitSiteDialog.close();
});
