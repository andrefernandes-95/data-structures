/**
 🧪 8️⃣ Debounce
🧪 Exercise: Implement debounce

Function should only execute after user stops calling it for 500ms.
 */

function helloworld() {
  console.log("hello world");
}

let currenHandler = null;

const debounce = (fn) => {
  if (currenHandler) {
    clearTimeout(currenHandler);
  }

  currenHandler = setTimeout(() => {
    fn();
  }, 500);
};

debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);
debounce(helloworld);

/**
 Issues:
 - Global currenHandler
 - Doesn’t return a debounced function
 - No arguments forwarding

 Better:

 function debounce(fn, delay = 500) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
 */
