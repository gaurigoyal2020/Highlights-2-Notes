document.addEventListener("DOMContentLoaded", () => {
  let noteList = document.getElementById("noteList");

  chrome.storage.local.get({ notes: [] }, (data) => {
    noteList.innerHTML = data.notes.map(note => `<li>${note}</li>`).join("");
  });

  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", () => {
    chrome.storage.local.set({ notes: [] }, () => {
      noteList.innerHTML = ""; // Clear UI
    });
  });
});