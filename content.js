// Track last saved text and timestamp to prevent duplicates
let lastSavedText = "";
let lastSaveTime = 0;

document.addEventListener("mouseup", () => {
  const selectedText = getSelectionText().trim();
  const currentTime = Date.now();

  // Prevent saving if:
  // 1. Text is empty
  // 2. Same text was saved within last 500ms (double-trigger protection)
  if (selectedText.length > 0 && 
      (selectedText !== lastSavedText || currentTime - lastSaveTime > 500)) {
    
    chrome.storage.local.get({ notes: [] }, (data) => {
      let updatedNotes = [...data.notes, selectedText];
      chrome.storage.local.set({ notes: updatedNotes });
      
      // Update tracking variables
      lastSavedText = selectedText;
      lastSaveTime = currentTime;
    });
  }
});

function getSelectionText() {
  let text = "";
  const activeEle = document.activeElement;
  const activeEleTagName = activeEle ? activeEle.tagName.toLowerCase() : null;

  if (
    (activeEleTagName == "textarea") ||
    (activeEleTagName == "input" &&
      /^(?:search|text|password|tel|url)?$/i.test(activeEle.type)) &&
    (typeof activeEle.selectionStart == "number")
  ) {
    text = activeEle.value.slice(activeEle.selectionStart, activeEle.selectionEnd);
  } else if (window.getSelection) {
    text = window.getSelection().toString();
  }

  return text;
}