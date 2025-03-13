document.addEventListener("DOMContentLoaded", () => {
  let noteList = document.getElementById("noteList");
  let clearBtn = document.getElementById("clearBtn");
  let downloadBtn = document.getElementById("download");

  chrome.storage.local.get({ notes: [] }, (data) => {
    noteList.innerHTML = data.notes.map(note => `<li>${note}</li>`).join("");
  });

  clearBtn.addEventListener("click", () => {
    chrome.storage.local.set({ notes: [] }, () => {
      noteList.innerHTML = ""; // Clear UI
    });
  });

  downloadBtn.addEventListener("click", () => {
    chrome.storage.local.get({ notes: [] }, (data) => {
      if (data.notes.length === 0) {
        alert("No notes to download!"); // Prevent empty downloads
        return;
      }

      const textContent = data.notes.join("\n");
      const blob = new Blob([textContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      // Use Chrome's download API
      chrome.downloads.download({
        url: url,
        filename: "notes.txt",
        saveAs: true // Prompts user for save location
      });

      URL.revokeObjectURL(url);
    });
  });
});