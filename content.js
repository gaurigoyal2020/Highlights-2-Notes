document.addEventListener("mouseup", () => {
  const selectedText = getSelectionText().trim();

  if (selectedText.length > 0) {
    chrome.storage.local.get({ notes: [] }, (data) => {
      let updatedNotes = [...data.notes, selectedText];

      chrome.storage.local.set({ notes: updatedNotes });
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
      /^(?: search|text|password|tel|url)?/i.test(activeEle.type)) &&
    (typeof activeEle.selectionStart == "number")
  ) {
    text = activeEle.value.slice(activeEle.selectionStart, activeEle.selectionEnd);
  } else if (window.getSelection) {
    text = window.getSelection().toString();
  }

  return text;
}