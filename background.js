// Create the context menu
chrome.runtime.onInstalled.addListener(function() {
  for (let key of Object.keys(websites)) {
    chrome.contextMenus.create({
      id: key,
      title: websites[key],
      type: 'normal',
      contexts: ['selection']
    });
  }
});

// Search Kanji on the website on click
chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url = item.menuItemId + item.selectionText;
  chrome.tabs.create({ url: url, index: tab.index + 1 });
});
