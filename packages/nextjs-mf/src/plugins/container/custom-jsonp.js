// var chunkQueue = [];
// var resport = [];
// var cnn = 'home_app';
// var chunkLoadingGlobal = self['webpackChunk' + cnn] || [];
// var preferredModules = [
//   'react',
//   'react/jsx-runtime',
//   'react/jsx-dev-runtime',
//   'react-dom',
//   'next/dynamic',
//   'styled-jsx',
//   'styled-jsx/style',
//   'next/link',
//   'next/router',
//   'next/script',
//   'next/head',
// ];
// var asyncQueue = [];
// var initialConsumes = [
//   ['next/dynamic', '13.3.0'],
//   ['react/jsx-dev-runtime', '18.2.0'],
//   ['styled-jsx/style', '5.1.1'],
//   ['react', '18.2.0'],
//   ['antd', '4.24.9'],
//   ['next/router', '13.3.0'],
//   ['react-dom', '18.2.0'],
//   ['next/head', '13.3.0'],
//   ['next/link', '13.3.0'],
// ];
export default `
function setEagerLoading(libraryName, version, fromValue) {
  var shareScopeMap = __webpack_require__.S.default;
  var library = shareScopeMap[libraryName];
  if (!library) return;
  var alternativeVersion = Object.keys(library)[0];
  var pickedVersion = library[version] || library[alternativeVersion];
  if (
    pickedVersion &&
    pickedVersion.from === fromValue &&
    preferredModules.has(libraryName)
  ) {
    pickedVersion.eager = true;
  }
}

function loadDependencies(libKeys, cnn) {
  var shareScopeMap = __webpack_require__.S.default;
  libKeys.forEach(function(libKey) {
    var shareKey = libKey[0];
    var shareVersion = libKey[1];
    var library = shareScopeMap[shareKey];
    if (!library) return;
    var alternativeVersion = Object.keys(library)[0];
    var lib =
      preferredModules.has(shareKey) && library[shareVersion]
        ? library[shareVersion]
        : library[alternativeVersion];
    if (!lib.loaded) {
      lib.loaded = 1;
      asyncQueue.push(
        lib.get().then(function(f) {
          lib.get = function() {
            return f;
          };
          lib.loaded = 1;
        })
      );
    }
  });
  return Promise.all(asyncQueue);
}

function shouldDeferLoading(args) {
if (resportSet.size === 0 || chunkQueue.length === 0) return true;
  var matchesOrStartsWith = args[0].some(function (item) {
    return resport.some(function (resportItem) {
      return item === resportItem || item.indexOf(resportItem) === 0;
    });
  });
  console.log('shouldDeferLoading', !matchesOrStartsWith, args[0], resport);
  return !matchesOrStartsWith;
}

function promiseState(p) {
  const t = {};
  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}



function asyncOperation(originalPush) {
  // This is just an example; replace it with your own logic.

  return new Promise(function (resolve) {
   // var prom = __webpack_require__.I('default', []);
    initialConsumes.forEach(function (lib) {
     // setEagerLoading(lib[0], lib[1], cnn);
    });
    Promise.all(__webpack_require__.initConsumes).then(resolve)
    // resolve(true);
  })
    .then(function () {
      console.log('init operation completed');
      console.log(__webpack_require__.S.default);
      // loadDependencies(initialConsumes, cnn);
        for (let q in chunkQueue) {
        console.log('qq',chunkQueue[q][0]);
       __webpack_require__.getEagerSharedForChunkId(chunkQueue[q][0],__webpack_require__.initConsumes)
       __webpack_require__.getEagerRemotesForChunkId(chunkQueue[q][0],__webpack_require__.initRemotes)
      }

      return Promise.all((()=>__webpack_require__.initRemotes)());
    })
    .then(function () {

    __webpack_require__.initRemotes.forEach(function (lib) {

    console.log('promise all', lib);
    });
      console.log('webpack is done negotiating dependency trees', cnn);
      console.log(
        'number of entry points to invert startup',
        chunkQueue.length
      );
      console.log('startup inversion in progress', chunkQueue);


      while (chunkQueue.length > 0) {
        const queueArgs = chunkQueue.shift();

      __webpack_require__.getEagerSharedForChunkId(queueArgs[0],__webpack_require__.initConsumes)
       __webpack_require__.getEagerRemotesForChunkId(queueArgs[0],__webpack_require__.initRemotes)

       Promise.all(__webpack_require__.initConsumes).then(function () {
        console.log('pushing deffered chunk into runtime', queueArgs[0]);
        webpackJsonpCallback.apply(
          null,
          [null].concat(Array.prototype.slice.call([queueArgs]))
        );
        originalPush.apply(originalPush, [queueArgs]);
        });
      }
    });
}
__webpack_require__.getEagerSharedForChunkId('pages/_app',__webpack_require__.initConsumes)

console.log('m',__webpack_require__.m);
console.log('c',__webpack_require__.c);
asyncOperation(chunkLoadingGlobal.push.bind(chunkLoadingGlobal));



chunkLoadingGlobal.push = (function (originalPush) {
  return function () {
  const chunkID = arguments[0][0];
      console.log('original push', chunkID);
   __webpack_require__.getEagerSharedForChunkId(chunkID,__webpack_require__.initConsumes)
   __webpack_require__.getEagerRemotesForChunkId(chunkID,__webpack_require__.initRemotes)
__webpack_require__.O(null, [chunkID], function () {
console.log('clearing resolved', chunkID)
   __webpack_require__.initConsumes.forEach(function (item,index) {
      promiseState(item).then((status)=>{
      console.log(status)
      if(status === 'fulfilled'){
      __webpack_require__.initConsumes.splice(index,1)
      }
    })
    console.log('async chunk load length',__webpack_require__.initConsumes.length)
  })
},2)
__webpack_require__.O(null, ['webpack'], function () {
console.log('webpack runtime loaded freom entry signal;', chunkID)
},0)
__webpack_require__.O(null, [chunkID], function () {
  console.log('init consumes', __webpack_require__.initConsumes);
},1);
    if (!__webpack_require__.S.default) {
      console.log(
        '%cshare is blank: %s',
        'color: red; font-size: 20px;',
        !__webpack_require__.S.default
      );
    }
    console.log('chunk was pushed', arguments[0][0]);
    if (
      arguments[0][0].includes('main') ||
      arguments[0][0].some(function (item) {
        return item.startsWith('pages/');
      })
    ) {
      resport = Array.prototype.concat.apply(resport, arguments[0][0]);
      var pushEvent = Array.prototype.push.apply(chunkQueue, arguments);
      return asyncOperation(originalPush);
    }
    if (!__webpack_require__.S.default) {
      asyncOperation(originalPush);
    }
    console.log('queue size:', chunkQueue.length);
    console.log('pushing chunk into webpack runtime:', arguments[0][0]);
    webpackJsonpCallback.apply(
      null,
      [null].concat(Array.prototype.slice.call(arguments))
    );
    return originalPush.apply(chunkLoadingGlobal, arguments);
  };
})(chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
`;