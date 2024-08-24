console.log("Content script is running!");

fetch(window.location.href)
  .then(response => {
    console.log("Actual response headers", [...response.headers.entries()]);
  }); 


// // Fetch the current page's content & passing it to background.js
// fetch(window.location.href)
//   .then(response => response.text())
//   .then(body => {
//     console.log('Response Body:', body);

//     chrome.runtime.sendMessage({type: "logResponseBody", body: body});
//   })
//   .catch(error => console.error('Fetch error:', error));
