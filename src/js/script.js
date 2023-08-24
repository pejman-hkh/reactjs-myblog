import hljs from "highlight.js";
//import SimpleMDE from "SimpleMDE";

export default function scripts() {
  //document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
 // });

  //new SimpleMDE({ element: document.querySelector("textarea[name='note']") });
}