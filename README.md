# CodeSnip — Next-Generation Code & Prompt Manager

<p align="center">
  <img src="https://img.shields.io/badge/Version-26Q3.1-00adb5?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Built%20With-Electron-47848F?style=for-the-badge" alt="Electron">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <a href="README_tr.md"><img src="https://img.shields.io/badge/Dil-Türkçe-red?style=for-the-badge" alt="TR"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/Language-English-blue?style=for-the-badge" alt="EN"></a>
</p>

## ㅤ

<p align="center">
  A modern, fast, and fully offline desktop application for managing code snippets and AI prompts.<br>
  Organize, search, and share your code snippets, terminal commands, and prompts—all in one place.
</p>

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8cabcf7c-8c24-4b0e-b44f-2e267533bc68" />

## About

CodeSnip is a modern Electron application designed for developers, designers, and AI enthusiasts.
Organize your code snippets into categories, search them instantly, copy them with a single click, and generate Base64-based sharing links.
All data is stored locally on your device, allowing the application to work without an internet connection.

> [!TIP]
> Since CodeSnip runs entirely offline, your data always stays on your device.

---

## Features

- Liquid Glass user interface
- Global Spotlight Search (`Ctrl + Space`)
- Base64-based sharing system
- English and Turkish language support
- Fully offline operation
- Local data storage
- Built-in category system
- Fast search and filtering
- Electron-based desktop application

---

## Installation

### Requirements

- Node.js (v18 or later)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Light-Bulb-Team/CodeSnip.git
```

### 2. Navigate to the project folder

```bash
cd codesnip
```

### 3. Install dependencies

```bash
npm install
npm install electron --save-dev
```

### 4. Build the production package

```bash
npm run dist
```

---

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

| Shortcut | Description |
|----------|-------------|
| `Ctrl + Shift + S` | **Global Shortcut:** Brings CodeSnip to the foreground and opens Spotlight Search, even when the application is running in the background. |
| `Ctrl + Space` | Quickly open or close the Spotlight Search panel while using the application. |
| `Esc` | Close the currently open Spotlight Search panel. |
| `Space` | Open the **Quick Look** preview for the selected snippet while navigating Spotlight Search results. |
| `Arrow Up / Down` | Navigate through Spotlight Search results. |
| `Enter` | Send the selected snippet to the main search bar. If the selected item is in the `+category` format, it instantly creates a new snippet under that category. |

---

## Technologies Used

- Electron
- JavaScript
- HTML5
- CSS3
- Node.js

---

## Roadmap

- [x] v1.0 — Initial Release
  - [x] v1.1 — Bug Fixes & Favorites Feature

- [x] 26Q2 (v2.0) — Spotlight Search, Sharing System, and Redesigned Liquid Glass UI
  - [x] 26Q2.5 — JSON Import/Export, Improved Spotlight Search, and Versioning System Update

- [x] 26Q3 —  and Linux (Debian, Arch, Red Hat) Support, Improved Appearence and new Category Management
- [ ] 26Q4 — App Optimization, macOS Support and Full Support for Linux (Slackware and Gentoo)
- [ ] 27Q1 — Plugin System and Snippet Previews

> [!NOTE]
> The roadmap may change over time as new features are added or bugs are discovered.

---

## Contributing

Want to help improve CodeSnip?

- Fork this repository.

- Create a new branch for your feature.
  ```bash
  git checkout -b feature-name
  ```
- Commit your changes.
  ```bash
  git commit -m "Add awesome feature"
  ```
- Push your branch.
  ```bash
  git push origin feature-name
  ```
- Open a **Pull Request**.

If you find a bug, feel free to report it through the **Issues** section!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Developers

- Mustafa Selim AYDENİZ
- Ali Kerem YILMAZ
