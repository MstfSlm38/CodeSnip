
# CodeSnip — Next-Generation Code & Prompt Manager
<p align="center">
  <img src="https://img.shields.io/badge/Version-26Q3-00adb5?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Built%20With-Electron-47848F?style=for-the-badge" alt="Built With">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>
<p align="center">
  <a href="README_tr.md"><img src="https://img.shields.io/badge/Language-Turkish-red?style=for-the-badge" alt="TR"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/Language-English-blue?style=for-the-badge" alt="EN"></a>
</p>
<hr>
<p align="center">
  A modern, fast, and completely offline desktop code and AI prompt manager.<br>
  Organize, search, and share your code snippets, terminal commands, and prompts in one application.
</p>
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/1e01968b-ef57-46bb-a8e7-743f0b2e65e5" />



## About
CodeSnip is a modern Electron application designed for developers, designers, and users who work with artificial intelligence.
You can organize code snippets into categories, search instantly, copy them with a single click, and create Base64-based sharing links.
All data is stored locally on your device, and the application works without requiring an internet connection.

> [!TIP]
> Since the application works completely offline, your data stays on your device.



## Features
- Liquid Glass user interface
- Global Spotlight search (`Ctrl + Space`)
- Base64-based sharing system
- Turkish and English language support
- Completely offline operation
- Local data storage
- Built-in category system
- Fast search and filtering
- Electron-based desktop application


## Installation

### Requirements
- Node.js (v18 or newer)
- npm
### 1- Clone the Repository
```bash
git clone https://github.com/MstfSlm38/CodeSnip.git
```

### 2- Navigate to the Created Folder
```bash
cd codesnip
```
### 3- Install Dependencies

```bash
npm install
npm install electron --save-dev
```

### 4- Build the Production Version
```bash
npm run dist
```


## Screenshots

<p align="center">
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e31ec191-3f60-4b64-9a4b-7a8306fd653d" />
<br><br>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/83036436-5c32-43c4-aa88-24eea23bbb24" />
</p>

---

## Beta Screenshots
<!-- >[!WARNING]
>These are the beta screenshots. It's all subject to change!

<p align="center">
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/413c14b5-32f6-4b5a-944f-2bedb1ea5938" />
<br><br>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/846e69bb-3639-41fa-80ab-01f387e39f46" />
</p> -->

>[!NOTE]
>Since there is no beta versions available, there is no beta screenshots. Stay tuned for the beta releases!


---



## Keyboard Shortcuts

Shortcut	## Keyboard Shortcuts

| Shortcut | Description |
|----------|-------------|
| `Ctrl + Shift + S` | **Global Shortcut:** Brings the application to the foreground and opens Spotlight search even when the application is running in the background. |
| `Ctrl + Space` | Opens or closes the Spotlight search panel while the application is active. |
| `Esc` | Closes the currently open Spotlight search panel. |
| `Space` | Opens the **Quick Look** preview panel for the selected code while browsing Spotlight search results. |
| `Arrow Up / Down` | Navigates up and down through Spotlight search results. |
| `Enter` | Transfers the selected code to the main search bar (or quickly adds a code if the input is in `+category` format).



## Technologies Used

* Electron
* JavaScript
* HTML5
* CSS3
* Node.js



## Roadmap

- [x] v1.0 — Initial Release
- [x] v1.1 — Hotfixes and Favorites Feature
- [x] 26Q2 (v2.0) — Spotlight, Sharing, and Redesigned Liquid Glass UI
  - [x] 26Q2.5 — JSON Export/Import, Improved Spotlight, and Version Naming Update
- [x] 26Q3 — Linux Support (Debian, Arch, Red Hat), Improved Appearance, Customization, and Category Management
  - [x] 26Q3.1 — Critical Hotfixes
  - [ ] 26Q3.5 — Important Hotfixes, New Spanish Language Support, and Light Theme Improvements
 - [ ] 26Q4 — Application Optimization, Full macOS and Linux Support (Slackware and Gentoo)
 - [ ] 27Q1 — Plugin System and Code Preview

>[!NOTE]
>The roadmap may change over time due to new features or newly discovered bugs.

## Contributing

Would you like to help improve the project?

* Fork this repository by clicking the Fork button.
* Create a branch for your new feature (git checkout -b new-feature).
* Commit your changes (git commit -am 'Added new feature').
* Push your branch (git push origin new-feature).
* Create a Pull Request.
* Or, if you find a bug in the project, feel free to report it in the Issues section!

## License

This project is licensed under the MIT License. See the LICENSE⁠￼ file for more details.

Developers

* Mustafa Selim AYDENİZ

