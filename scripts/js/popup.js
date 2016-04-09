// refs - http://stackoverflow.com/questions/11996053/detect-a-button-click-in-the-browser-action-form-of-a-google-chrome-extension

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-click":
		var btnInOut = document.getElementById("pu_in_out");
		btnInOut.value = "foo";
            break;
        default:
        }
    }
);
