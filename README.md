# 📝 Highlights-2-Notes

A lightweight Chrome extension that lets you quickly save selected text from any webpage and manage your collected notes with ease.

## ✨ Features

- **Right-click to Save**: Simply select text and right-click to add it to your notes
- **Auto-save Selection**: Selected text is automatically saved when you release the mouse
- **Popup Interface**: View all your saved notes in a clean, organized popup
- **Export Notes**: Download your notes as a text file for external use
- **Local Storage**: All notes are stored locally in your browser for privacy
- **Works Everywhere**: Captures text from any website, input field, or text area

## 🚀 Installation

### From Chrome Web Store
*Coming soon - extension pending review*

### Manual Installation (Developer Mode)

1. **Download the extension files**
   ```
   git clone <repository-url>
   cd quick-notes-collector
   ```

2. **Open Chrome Extensions page**
   - Navigate to `chrome://extensions/`
   - Or go to `Menu → More Tools → Extensions`

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the folder containing the extension files
   - The extension icon should appear in your toolbar

## 🎯 How to Use

### Saving Notes

**Method 1: Right-click Context Menu**
1. Select any text on a webpage
2. Right-click on the selected text
3. Choose "Save to Notes" from the context menu

**Method 2: Automatic Selection**
1. Simply select text and release the mouse button
2. The text will be automatically saved to your notes

### Managing Notes

1. **View Notes**: Click the extension icon to open the popup
2. **Clear All**: Click "Clear" to remove all saved notes
3. **Download**: Click "Download" to save your notes as a `.txt` file

## 🛠️ Technical Details

### File Structure
```
quick-notes-collector/
├── manifest.json      # Extension configuration
├── background.js      # Service worker for context menu
├── content.js         # Content script for text selection
├── popup.html         # Popup interface
├── popup.js           # Popup functionality
└── README.md          # This file
```

### Permissions Used

- **contextMenus**: Creates the right-click "Save to Notes" option
- **storage**: Stores notes locally in Chrome's storage
- **scripting**: Executes content scripts for text selection
- **activeTab**: Access to the current active tab
- **downloads**: Enables downloading notes as text files

### Browser Compatibility

- Chrome 88+ (Manifest V3 support required)
- Chromium-based browsers (Edge, Brave, etc.)

## 🔒 Privacy & Security

- **No data collection**: All notes are stored locally on your device
- **No external servers**: No data is sent to any external services
- **No tracking**: The extension doesn't track your browsing activity
- **Minimal permissions**: Only requests necessary permissions for functionality

## 📋 Features in Detail

### Text Selection Methods
The extension captures text from multiple sources:
- Regular webpage text
- Input fields (text, password, search, etc.)
- Textareas
- Any selectable content

### Smart Selection Detection
- Automatically detects different types of form elements
- Handles both mouse selections and keyboard selections
- Prevents empty or whitespace-only saves

### Download Functionality
- Exports notes as plain text files
- Prompts for save location
- Prevents empty downloads
- Automatically names file as `notes.txt`

## 🚧 Limitations

- Maximum storage depends on Chrome's local storage limits
- Notes are tied to your Chrome profile/browser
- No cloud sync or backup functionality
- No search or filtering within notes (yet!)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Search and filter notes
- [ ] Note categories/tags
- [ ] Export to different formats (JSON, CSV)
- [ ] Import notes from files
- [ ] Note editing capabilities
- [ ] Cloud sync options
- [ ] Note timestamps
- [ ] Duplicate detection

## 🐛 Known Issues

- Large amounts of notes may slow down the popup
- No current limit on note storage size
- Notes persist until manually cleared

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Built with Chrome Extension Manifest V3
- Icons and design inspired by modern material design
- Thanks to the Chrome Extensions community for guidance

---

**Made with ❤️ for productivity and note-taking enthusiasts**

*Never lose important information again!* 📚
