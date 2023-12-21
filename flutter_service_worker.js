'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ef8bd7a19a7d2d4c465f78124fdd051a",
".git/config": "e40f196b0f608995da1e3e9125d82055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1ba313ac9ca450a1342fb0c5df5dae5b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "39f469047c4f9dfef8adcfc67b404711",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0cdc36d184341a5a300078dac44fd42",
".git/logs/refs/heads/main": "d0cdc36d184341a5a300078dac44fd42",
".git/logs/refs/remotes/origin/HEAD": "50ad4b4e6d4feee55692bafe5297a38f",
".git/logs/refs/remotes/origin/main": "6d761d43a074fa5c5a4fbdedd26fe321",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/8a03c2f77357c2b636382755f290ce1449eda4": "24471bff4dff94a53b0ac9519b79ebf8",
".git/objects/09/82a4d5c3c680161d8246f64b5d4be87c8d5784": "80f0225156cad187ca0e30f1cf847e1d",
".git/objects/0a/313b140220ad61716186074925b107f068a232": "339eb613867cac8b1df65bbeaefe3ca2",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/14/cea41f99e2df229303df6938bbc080179311e5": "db29bbc2222b3f08071f0bf5abedfa78",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1c/059edc38b6e95460eadee9510de6914e5467ac": "983e2b21da2eed690c57c35eaf5ca27f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/28/0ddeb3d355a0851cb5ad5f128ffa8ad200af6c": "65c2404870de4ec813b6e10b326b84a6",
".git/objects/28/c0d15ba89bd4a32ea76de722e6a6e7951cbad7": "07594d3584714e21f9c14e280add2af7",
".git/objects/2a/77de198005bdf2a573e56b46242154f13232bf": "b36a70d30a71c11f6d1aefaf3c6bd528",
".git/objects/32/407a1852255284b2023210ed1b1fbaf63d2557": "bf27bec879ce3f5764475484b81c685c",
".git/objects/32/720e26cde9452b5bb7056bf76b967dd798bd15": "82a0a73bf0c63a27b21c8bf12c30ddbe",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/588a642cebf20feea100b27df59c1bdcf333b2": "edfae0673d06fa0d2f62ba447e4fabcc",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/20a14e7ece1bbb2e41d44be72928360f1b727a": "944161bdd7e754851d24d70a98a5017e",
".git/objects/3a/4a4d37334921eea22fabc479c447741451974f": "3a035746ac437787f1dd759b27bc08d8",
".git/objects/47/392bf9f82f072802a380ca58c5b498af165520": "b537e3c41c2b4415489ee41a7eb81fc8",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/95695e45aeb3b60adfa01668657f775a9d1ba9": "bdec69f47f766e8359114d34e626c4c8",
".git/objects/53/6407d5da4e5cffb01a4b048564eb3804016046": "52cd08e82feab903dc5a7fd7e6709478",
".git/objects/54/5ee844e1b1deeaf8f891417d8e2aa99492182a": "fc73ce81b3bf8bbdeea15d026d3854cf",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/7e63c58fd6079c6c9a952fb12df73f013e5055": "03321e752280bf465d75b55e3af7bfe3",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6d/68f43d83037fd242a43fb73cf6ad413cef4e29": "ed8bd4d6a3b350632141ec7254357cba",
".git/objects/6e/4935e74e42450087dfe7e07d6fce9a6219d3dd": "26b8fdeaae2b4378eb436447eda6f860",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/965083f67ae63019e503ab7d26335d86c538b9": "e21aac8e23bd3c20ecba0b6a3cbaae6f",
".git/objects/7c/a0a535e87650ffdf100ca72335192501a116dc": "39c58eca7e75ab850e9c950338fc76e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/292f20c96d9cf3a8125f6a0b09a525011c5656": "61c71b76aa63120e07941c2b79db734b",
".git/objects/94/069a5dc45a35a4b08ce1ac265d89e1d1f02244": "8c7a3b5456c4a6edf3aade963f28a241",
".git/objects/a2/cd29e1d79550783710238a42577dc000774d3e": "2af0d60efb5b02c501fbb955270e0597",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/0ab39ccc5bdb29a21bdca361f241d73853a602": "994bee9eefefbf1e49562745ef345973",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/63d6b07f7b05ccc4da9b83df8da830dfb158bc": "dad7a95d10c42a34c0b2cbb87fe7e291",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cc/06154e5d1d5cb11d0cb3ab21c4acc202f33d96": "9d45d606642ac230f41f0314b1c1fc8e",
".git/objects/cf/64ca55dbd90d2a798dd517dab78b9779c6ab90": "d7b83444f5e21e7ab746059d8a16f6e4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/c3dc240bd62f04b28f9ba618ea74ae52617c73": "7671e2c2cb5f60ff6aec210a7e5c0a44",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e2/285231c13d524a9022debb7dfd664c97b44307": "880e0381bf2f9160669b3387e19f3b01",
".git/objects/e3/a8dce5c75a554d7adae89ef21af3ba86617f39": "fc0597c931eefa9a83904fc276ae2f6d",
".git/objects/e6/e027244636dcf977e9351790ea5ed4afd3464f": "b32cab46b017ad16db31bbd5b1c70e22",
".git/objects/e6/e22833e9446bd6b9e3aabaad2f2c53c4ef35e3": "9be138e7be5b1896cc2b032236b49b36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ab01153d6c70e41a861f9dc9c5efcbfc502ccb": "cf298eb23210e2dea59ed04ce96e879f",
".git/objects/ee/ab6e6d0cb1369ed7f04596a71be50227121821": "a8c888e89d38095e922d28d1168cb76d",
".git/objects/fa/d9b54bd5772f0d8566fd4ad8dcffffb06e37cc": "bf7a983470b596d19c0ad125f9236ba6",
".git/refs/heads/main": "efb54e9967606e5364cd3cdf36c10b7b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "efb54e9967606e5364cd3cdf36c10b7b",
"assets/AssetManifest.json": "a7e5cd5a79d034329beda1869fe5d8f5",
"assets/AssetManifest.smcbin": "805675e3a8ba60bf669c881be659b66c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7c5f04ecac3877e3c85a7146a741d26",
"assets/images/no_img.png": "d833c1997ad4e233f81247af372be5bd",
"assets/NOTICES": "82830ebb5f4084f2dc81152e0fa01629",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "07acaaa0501a1a5e44f1ad2a3cc85dbd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "05438cbe50a708c6bfcbe4ed9819665d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7115c7065e517efe65dda050e84bd015",
"/": "7115c7065e517efe65dda050e84bd015",
"main.dart.js": "09db2d7be45a4a4c653c603ab084f6c9",
"manifest.json": "950fa1ef704b271a3ac5b5acf0d6816a",
"version.json": "c3b9e833713145838ccdcde6f3e2c8c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
