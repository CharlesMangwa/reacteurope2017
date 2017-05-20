self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/(.html|.js|.gif|.png|.jpg)$/)) {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => (response ?
        response : fetch(event.request)
      ))
    );
  }
});
