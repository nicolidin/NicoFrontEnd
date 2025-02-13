//middleware/i18nRedirect.server.ts
export default defineNuxtRouteMiddleware((to) => {
  console.log("middleware called !");
  const localeCookie = useCookie("i18n_redirected").value || "fr";
  const browserLang =
    useRequestHeaders()["accept-language"]?.split(",")[0].slice(0, 2) || "fr";
  const preferredLang = localeCookie || (browserLang === "en" ? "en" : "fr");

  console.log("preferredLang: ", preferredLang);
  if (to.path === "/" && preferredLang === "en") {
    console.log("if if do we navigate?");
    return navigateTo("/en");
  }
});
