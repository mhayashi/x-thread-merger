chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'extractText') {
    const tweetTextElements = document.querySelectorAll('[datatestid="tweetText"] *');
    const extractedText = Array.from(tweetTextElements).map(element => element.textContent.trim()).join('\n');
    sendResponse({ text: extractedText });
  }
});
