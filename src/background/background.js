listenAndRespondToContentScript();

function listenAndRespondToContentScript() {
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            console.log('request ', request)
            if (request.type == "Match Url?") {
                console.log(request);
                let regex = localStorage.getItem("regex") || new RegExp(/.*/);
                console.log(regex)
                let isMatch = !!request.url.match(regex);
                console.log(`${request.url} is${isMatch ? '' : ' not'} a match for ${regex}`);
                sendResponse({ isMatch: isMatch });
            }
            sendResponse({ isMatch: false });
        });
}