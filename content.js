// DEV VARS
const DEBUG = true;

async function waitElement(selector) {
  // This function will keep looking for the requested 
  // element until its found then returns it.
  return new Promise((resolve, reject) => {
    const interval = setInterval(function () {
      const element = document.querySelector(selector);

      if (element) {
        if (DEBUG) {
          // FOR DEBUG ONLY
          console.log("Found element =>", element);
        }
        clearInterval(interval);
        resolve(element);
      }
    }, 50);
  });
}

async function runApp() {
  const body = await waitElement('body');
  console.log('The extension is working !!');
}

runApp();
