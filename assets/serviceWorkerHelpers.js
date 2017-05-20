const cacheAssets = (assets) =>
  new Promise((resolve, reject) => {
    caches
      .open("assets")
      .then((cache) => {
        cache
          .addAll(assets)
          .then(() => {
            console.log("All assets added to cache 🤓");
            resolve();
          })
          .catch((err) => {
            console.log("Error while syncing assets 😭… | ", err);
            reject();
          });
      })
      .catch((err) => {
        console.log("Error while opening cache 😭… | ", err);
        reject();
      });
  });

const registerServiceWorker = () => {
  navigator.serviceWorker
    .register("/sw.js")
    .then(navigator.serviceWorker.ready)
    .then(() => {
      console.log("Service worker registered 🎉");
    })
    .catch((error) => {
      console.log("Error while registering service worker 😭… | ", error);
    });
};

export { cacheAssets, registerServiceWorker };
