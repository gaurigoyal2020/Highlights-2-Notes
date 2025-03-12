chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveText",
    title: "Save to Notes",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveText") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});