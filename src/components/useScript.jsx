import { useEffect } from 'react';

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