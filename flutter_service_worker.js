'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4b4d4a17b9afa8415b6819d72a0069fa",
"version.json": "cef7ca268a5641c2d638b41b5dd2cef3",
"index.html": "ccef15635503e542e8954430c6a464f5",
"/": "ccef15635503e542e8954430c6a464f5",
"main.dart.js": "4757558cfcef488fa3571f1fa691145d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ff2d08cde31b5913f2900dc7795296f",
"assets/AssetManifest.json": "eb868035e7da8197b285a712be405767",
"assets/NOTICES": "7d160771a48e23c274c220539cb3c0ac",
"assets/FontManifest.json": "41bd5f39ba27c819bbd850be073e831c",
"assets/AssetManifest.bin.json": "095f07ba4137aece39053be59842abcc",
"assets/packages/corpay_flutter_design_system/fonts/TT%2520Plugsurfing/TT%2520Plugsurfing%2520Regular.ttf": "89f04670fa5d31e47e7e1264d610d54f",
"assets/packages/corpay_flutter_design_system/fonts/TT%2520Plugsurfing/TT%2520Plugsurfing%2520Italic.ttf": "8e05aa46479b96428a29ac8092794940",
"assets/packages/corpay_flutter_design_system/fonts/TT%2520Plugsurfing/TT%2520Plugsurfing%2520Light.ttf": "380b294f2494eec8f79cd794af7e0650",
"assets/packages/corpay_flutter_design_system/fonts/TT%2520Plugsurfing/TT%2520Plugsurfing%2520Bold.ttf": "794a9a82387c9fd6560aff0a40a674e1",
"assets/packages/corpay_flutter_design_system/fonts/TT%2520Plugsurfing/TT%2520Plugsurfing%2520Medium.ttf": "278479333978290dfc9466e23a2ec9bf",
"assets/packages/corpay_flutter_design_system/fonts/TT%2520Plugsurfing/TT%2520Plugsurfing%2520DemiBold.ttf": "13503f1658e75bff134cb5ef81c991f2",
"assets/packages/corpay_flutter_design_system/fonts/Foundry%2520Context/FOUCONRG.otf": "fbf083173c290833a6105f433253043f",
"assets/packages/corpay_flutter_design_system/fonts/Foundry%2520Context/FOUCONDM.otf": "944e41a2e163f5049e1df1c233caacb4",
"assets/packages/corpay_flutter_design_system/fonts/Foundry%2520Context/FOUCONMD.otf": "beca33de013362a335dcbd1cdfc63076",
"assets/packages/corpay_flutter_design_system/fonts/Foundry%2520Context/FOUCONBD.otf": "6743228f5c4bc81f8a098ae21ad6f255",
"assets/packages/corpay_flutter_design_system/fonts/Foundry%2520Context/FOUCONRI.otf": "d0b2ee99a4c508c67ddc12e507ff6d6d",
"assets/packages/corpay_flutter_design_system/fonts/Foundry%2520Context/FOUCONEB.otf": "8e7a7e9ffe5df236b9a93dcf75701377",
"assets/packages/corpay_flutter_design_system/assets/search.svg": "7899e5e8578bb86c3d28c5c375718d9c",
"assets/packages/corpay_flutter_design_system/assets/circle_icon.svg": "3a09b8f00c683ba595d25cb29ea73473",
"assets/packages/corpay_flutter_design_system/assets/clear_circle.svg": "6e127f911592596bfef61991a070ea7a",
"assets/packages/corpay_flutter_design_system/assets/arrow_right.svg": "050eae145e4f0735053ca5e206968974",
"assets/packages/corpay_flutter_design_system/assets/warning.svg": "66cc2f9a939b615daad577e8b637cb5d",
"assets/packages/corpay_flutter_design_system/assets/pubspec.yaml": "fc82689b3e857cf7c758c65f014a0337",
"assets/packages/corpay_flutter_design_system/assets/success.svg": "8d5aec5d0013b1bf1dfed7e3701fba93",
"assets/packages/corpay_flutter_design_system/assets/blocked.svg": "e7c8af9410c5d6728cb7a33c608ed106",
"assets/packages/corpay_flutter_design_system/assets/error.svg": "a7a1004cfe3a174381b2a2ebc85d4c88",
"assets/packages/corpay_flutter_design_system/assets/check_small.svg": "d2f116bc175c726ee87510973c1f9083",
"assets/packages/corpay_flutter_design_system/assets/placeholder.svg": "e7aee479d0ff46b49d5ff9639224327a",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/assets/search.svg": "7899e5e8578bb86c3d28c5c375718d9c",
"assets/packages/assets/circle_icon.svg": "3a09b8f00c683ba595d25cb29ea73473",
"assets/packages/assets/clear_circle.svg": "6e127f911592596bfef61991a070ea7a",
"assets/packages/assets/arrow_right.svg": "050eae145e4f0735053ca5e206968974",
"assets/packages/assets/warning.svg": "66cc2f9a939b615daad577e8b637cb5d",
"assets/packages/assets/pubspec.yaml": "fc82689b3e857cf7c758c65f014a0337",
"assets/packages/assets/success.svg": "8d5aec5d0013b1bf1dfed7e3701fba93",
"assets/packages/assets/blocked.svg": "e7c8af9410c5d6728cb7a33c608ed106",
"assets/packages/assets/error.svg": "a7a1004cfe3a174381b2a2ebc85d4c88",
"assets/packages/assets/check_small.svg": "d2f116bc175c726ee87510973c1f9083",
"assets/packages/assets/placeholder.svg": "e7aee479d0ff46b49d5ff9639224327a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9dd009e0559b41d3cfd8cb3e28778844",
"assets/fonts/MaterialIcons-Regular.otf": "7c576237a8b0cefc75238e2d17fbcbe9",
"assets/assets/circle_icon.svg": "3a09b8f00c683ba595d25cb29ea73473",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
