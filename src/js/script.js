import {useScript, useCss} from "../components/useScript.jsx";

useCss('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css');
const highligh = useScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js');
useCss('https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.css');
const mde = useScript('https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.js');

export default function scripts() {
    mde.then(function() {
        new SimpleMDE({ element: document.querySelector("textarea[name='note']") });
    });
  

    highligh.then(function() {
        document.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el);
        });
    });

/*    let interval1 = setInterval(function() {
      if(typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el);
        });
        clearInterval(interval1);
      }

    }, 6000 );*/

}