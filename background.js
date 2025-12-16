chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveText",
    title: "Save to Notes",
    contexts: ["selection"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveText" && info.selectionText) {
    const selectedText = info.selectionText.trim();
    
    if (selectedText.length > 0) {
      chrome.storage.local.get({ notes: [] }, (data) => {
        let updatedNotes = [...data.notes, selectedText];
        chrome.storage.local.set({ notes: updatedNotes });
      });
    }
  }
});