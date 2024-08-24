chrome.webRequest.onHeadersReceived.addListener(
  function(details){
    console.log("All Response Headers", details.responseHeaders);
  },
  {urls: ["https://www.booking.com/*"]},
  ["responseHeaders"]
);

//logic for injecting content script in the webpage
// chrome.webRequest.onCompleted.addListener(
//   function(details) {
//     // Check if the request URL is under https://www.booking.com/
//     if (details.url.startsWith("https://www.booking.com/")) {
//       console.log("Request URL:", details.url);
//       console.log("Status Code:", details.statusCode);
//       console.log("Response Headers:", details.responseHeaders);

//       // Inject the content script to fetch the response body
//       chrome.scripting.executeScript({
//         target: {tabId: details.tabId},
//         files: ['content.js']
//       }).then(() => {
//         console.log("Content script injected successfully.");
//       }).catch(err => {
//         console.error("Failed to inject content script: ", err);
//       });
//     }
//   },
//   { urls: ["https://www.booking.com/*"] },
//   ["responseHeaders"]
// );

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === "logResponseBody") {
//     console.log("Response Body received from content script:", message.body);
//   }
// });



// chrome.webRequest.onCompleted.addListener(
//   function(details) {
//     console.log("Request URL:", details.url);
//     console.log("Status Code:", details.statusCode);
//     console.log("Response Headers:", details.responseHeaders);

//     // Attempt to log the response body (Note: This is not possible in MV3)
//     console.log("Response Body:", "Not accessible via chrome.webRequest in MV3");

//     // Inject the content script
//     chrome.scripting.executeScript({
//       target: {tabId: details.tabId},
//       files: ['content.js']
//     });
//   },
//   { urls: ["<all_urls>"] },
//   ["responseHeaders"]
// );

// // let targetPage = "https://useragentstring.com/*";

// // let ua =
// //   "Opera/9.80 (X11; LinuxDestros i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

// // function rewriteUserAgentHeader(e) {
// //   e.requestHeaders.forEach((header) => {
// //     if (header.name.toLowerCase() === "user-agent") {
// //       header.value = ua;
// //     }
// //   });
// //   return { requestHeaders: e.requestHeaders };
// // }

// // chrome.webRequest.onBeforeSendHeaders.addListener(
// //   rewriteUserAgentHeader,
// //   { urls: [targetPage] },
// //   ["blocking", "requestHeaders"],
// // );

// const targetUrl =
// "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

// chrome.declarativeNetRequest.updateDynamicRules({
// addRules: [{
//   "id": 1,
//   "priority": 1,
//   "action": {
//     "type": "redirect",
//     "redirect": { "url": targetUrl }
//   },
//   "condition": {
//     "urlFilter": "https://developer.mozilla.org/*",
//     "resourceTypes": ["image"]
//   }
// }],
// removeRuleIds: [1]
// }, function() {
// if (chrome.runtime.lastError) {
//   console.error(chrome.runtime.lastError.message);
// } else {
//   console.log("Redirection rule added successfully!");
// }
// });
