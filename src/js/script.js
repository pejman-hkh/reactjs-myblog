import React, { useLayoutEffect } from 'react';
import {useScript, useCss, LazyLoad} from "../components/useScript.jsx";

export default function scripts() {

    let textareas = document.querySelectorAll("textarea[name='note']");
    let codes = document.querySelectorAll('pre code');


    LazyLoad(textareas, function() {
      useCss('https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.css');
      const mde = useScript('https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.js');
      mde.then(function() {
        textareas.forEach((el) => {
          if( el && ! el.getAttribute('mde') ) {
            el.setAttribute('mde', 1);
            new SimpleMDE({ element:  el });
          }
        });

      });
    });

    LazyLoad(codes, function() {
      if( codes ) {
        useCss('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css');
        const highligh = useScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js');

        highligh.then(function() {
            codes.forEach((el) => {
              hljs.highlightElement(el);
            });
        });
     
      }
    });
}