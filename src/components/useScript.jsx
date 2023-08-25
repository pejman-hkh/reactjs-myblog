import { useEffect } from 'react';

export function useScript( url ) {
  return new Promise(async (resolve, reject) => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    script.addEventListener('load', () => {
      resolve(script)
    });

    script.addEventListener('error', () => {
      reject(new Error(`${url} failed to load.`))
    });

    document.body.appendChild(script);
  });
}

export function useCss(url) {
  return new Promise(async (resolve, reject) => {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    link.async = true;

    link.addEventListener('load', () => {
      resolve(link)
    });

    link.addEventListener('error', () => {
      reject(new Error(`${url} failed to load.`))
    });

    document.head.appendChild(link);
  });
}

export default useScript;