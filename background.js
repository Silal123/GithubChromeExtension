chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes('github.com') && changeInfo.url.includes('/settings')) {
        console.log("changed" + changeInfo.url);
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['scripts/fill_confirm.js']
        });
    }
});