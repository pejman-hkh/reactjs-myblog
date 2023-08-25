import {useScript, useCss} from "../components/useScript.jsx";

useCss('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css');
const highligh = useScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js');
useCss('https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.css');
const mde = useScript('https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.js');

export default function scripts() {
  mde.then(function() {
    const textarea = document.querySelector("textarea[name='note']");
    if( textarea && ! textarea.getAttribute('mde') ) {    
      textarea.setAttribute('mde', 1);
      new SimpleMDE({ element:  textarea });
    }
  });

  highligh.then(function() {
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
      });
  });
}