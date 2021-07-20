'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "15ed2b6d229d386266f3ca686ce26d1f",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/LICENSE": "c4d98d67ad66c558c6cb17f1377b62bc",
"/assets/images/pre-page-hover.png": "6e53f2a4a4480248702229dfe910e955",
"/assets/images/pre-page-normal.png": "c15d14aba2666fc184f77b0a86b3d1df",
"/assets/images/git.png": "f3290ad6438ac90017a1bab5a1f3a5bc",
"/assets/images/favicon.ico": "698d73d6f98be94c220d7dc05919b202",
"/assets/images/enter-icon.svg": "87e43f3a8b3c05c47a3d79e1ed4bd066",
"/assets/images/no-data.png": "711933a4d4c81aa7ca53827ec3d146fc",
"/assets/images/github.png": "8ca96f40001448c7e9f6fc33f3f28102",
"/assets/images/next-page-hover.png": "6031acd94dd3165318558cb23aa3e8fc",
"/assets/images/next-page-normal.png": "855393996f46465df71eb43a078d0151",
"/assets/images/qq-group.png": "095681adbf39d16467765a53a6067d90",
"/main.dart.js": "bdea1f10b0a7dfb0d9cd924a0fabb7dd",
"/index.html": "fac7e18fea8a40f3fb369b72d65dd7b0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
