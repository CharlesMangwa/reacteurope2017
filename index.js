import React from "react";
import { render } from "react-dom";

import { cacheAssets, registerServiceWorker } from "./assets/serviceWorkerHelpers";
import Presentation from "./presentation";

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  registerServiceWorker();

  const assets = [ // list of urls to be cached
    "/",
    "/200.html",
    "/index.html",
    "/dist/bundle.js",
    "/dist/04d63387484bf5e2e47bf5ef066f1fcb.gif",
    "/dist/04d63387484bf5e2e47bf5ef066f1fcb.gif",
    "/dist/56aa12171a181c06a24264d64a975efb.png",
    "/dist/069fb145391042f9926fc4549f23518f.jpg",
    "/dist/3835d803d3ecc1301d0bf5636cb38bf5.gif",
    "/dist/9860ae4b5377caea075e38e03bfc0852.gif"
  ];

  // // cache responses of provided urls
  cacheAssets(assets).then(() => {
    console.log("Assets successfully cached 🙌");
  });
}
render(<Presentation/>, document.getElementById("root"));
