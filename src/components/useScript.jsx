import { useEffect } from 'react';


export function LazyLoad( nodelists, callback ) {
  let lazyElements = [].slice.call(nodelists);
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyElements.forEach(function(lazyElement) {
          if ((lazyElement.getBoundingClientRect().top <= window.innerHeight && lazyElement.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyElement).display !== "none") {
            callback(lazyElement);
            lazyElement.classList.remove("lazy");
            lazyElements = lazyElements.filter(function(image) {
              return image !== lazyElement;
            });

            if (lazyElements.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
  lazyLoad();
}

let loadedScripts = {};
let loadedCss = {};
export function useScript( url ) {
  if( loadedScripts[url] )
    return loadedScripts[url];

  let pm = new Promise( async (resolve, reject) => {

      const script = document.createElement('script');

      script.src = url;
      script.defer = true;
      script.addEventListener('load', () => {
        resolve(script)
      });

      script.addEventListener('error', () => {
        reject(new Error(`${url} failed to load.`))
      });

      document.body.appendChild(script);

  });
  loadedScripts[url] = pm;
  return pm;
}

export function useCss(url) {
  if( loadedCss[url] )
    return loadedCss[url];

  let pm = new Promise( async (resolve, reject) => {

    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    link.defer = true;

    link.addEventListener('load', () => {
      resolve(link)
    });

    link.addEventListener('error', () => {
      reject(new Error(`${url} failed to load.`))
    });

    document.head.appendChild(link);
  });
  loadedCss[url] = pm;

  return pm;
}

export default useScript;