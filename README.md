# CodeSnip | Next-Generation Code & Prompt Manager

<p align="center">
  <img src="https://img.shields.io/badge/Version-26Q3.5%20Development-00ADB5?style=for-the-badge" alt="Version 26Q3.5 Development">
  <img src="https://img.shields.io/badge/Built%20with-Electron-47848F?style=for-the-badge" alt="Built with Electron">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <a href="README_tr.md">
    <img src="https://img.shields.io/badge/Language-Turkish-red?style=for-the-badge" alt="Türkçe">
  </a>
  <a href="README.md">
    <img src="https://img.shields.io/badge/Language-English-blue?style=for-the-badge" alt="English">
  </a>
</p>

<p align="center">
  A modern, fast, offline-first desktop application for managing code snippets, terminal commands, and AI prompts.
</p>

<p align="center">
  <img width="1920" alt="CodeSnip application preview" src="https://github.com/user-attachments/assets/1e01968b-ef57-46bb-a8e7-743f0b2e65e5">
</p>

---

## Overview

**CodeSnip** is an Electron-based desktop application built to help developers and AI enthusiasts organize and reuse code snippets, terminal commands, and prompts.

Create categories, search your collection, copy code instantly, and share snippets through Base64-encoded data. CodeSnip stores its application data locally, keeping your personal collection on your device.

## Features

- **Snippet Management:** Organize and manage reusable code snippets.
- **Spotlight Search:** Quickly find content with an intuitive search interface.
- **Quick Actions:** Add and access snippets directly through supported shortcuts.
- **Snippet Sharing:** Share snippet data using Base64 encoding.
- **Multilingual Interface:** Turkish, English, and Spanish language support.
- **Category Management:** Keep snippets organized into categories.
- **Local Storage:** Store your collection on your device.
- **Offline-Oriented Design:** Core functionality is designed to work without an internet connection.
- **Liquid Glass Interface:** A modern desktop interface with a focus on clarity and usability.

> [!NOTE]
> CodeSnip is designed for local data storage and offline use. Features that depend on external resources, if any, may require an internet connection.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/CodeSnip-DevTeam/CodeSnip.git
```

### 2. Enter the project directory

```bash
cd CodeSnip
```

### 3. Install dependencies

```bash
npm install
```

### 4. Build the application

```bash
npm run dist
```

> [!TIP]
> If the build command fails, check the scripts defined in `package.json` and make sure all required dependencies are installed.

## Screenshots

<p align="center">
  <img width="1920" alt="CodeSnip screenshot 1" src="https://github.com/user-attachments/assets/e31ec191-3f60-4b64-9a4b-7a8306fd653d">
  <br><br>
  <img width="1920" alt="CodeSnip screenshot 2" src="https://github.com/user-attachments/assets/83036436-5c32-43c4-aa88-24eea23bbb24">
</p>

## Keyboard Shortcuts

| Shortcut | Description |
|---|---|
| `Ctrl + Shift + S` | Bring CodeSnip to the foreground and open Spotlight search, including when the application is in the background. |
| `Ctrl + Space` | Open or close Spotlight search while the application is active. |
| `Esc` | Close the open Spotlight search panel. |
| `Space` | Open the Quick Look preview for the selected search result. |
| `Arrow Up / Down` | Navigate through Spotlight search results. |
| `Enter` | Transfer the selected code to the main search bar or trigger the supported quick-add action. |

> [!NOTE]
> Shortcut availability may depend on the current application state and operating system.

## Technologies

- [Electron](https://www.electronjs.org/)
- JavaScript
- HTML5
- CSS3
- [Node.js](https://nodejs.org/)

## Roadmap

- [x] **v1.0** — Initial release
- [x] **v1.1** — Hotfixes and favorites
- [x] **26Q2 (v2.0)** — Spotlight, snippet sharing, and redesigned Liquid Glass interface
  - [x] **26Q2.5** — JSON export/import, Spotlight improvements, and version naming update
- [x] **26Q3** — Linux support, appearance improvements, customization, and category management
  - [x] **26Q3.1** — Critical hotfixes
- [ ] **26Q3.5** — Important bug fixes, Spanish language support, light theme improvements, and visual refresh
- [ ] **26Q4** — Application optimization and expanded macOS/Linux support, including Slackware and Gentoo
- [ ] **27Q1** — Plugin system and code preview

> [!NOTE]
> The roadmap represents current development plans and may change as priorities evolve. Features are not considered released until the corresponding release is published.

## Contributing

Contributions, bug reports, and suggestions are welcome.

### Reporting a bug

1. Check the existing [Issues](https://github.com/CodeSnip-DevTeam/CodeSnip/issues) to avoid duplicates.
2. Open a new issue.
3. Include a clear description of the problem and the steps needed to reproduce it.

### Contributing code

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make and test your changes.
4. Commit your work:

   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

5. Push your branch:

   ```bash
   git push origin feature/your-feature
   ```

6. Open a pull request.

## License

CodeSnip is distributed under the [MIT License](LICENSE).

## Developer

**Mustafa Selim AYDENİZ**

---

<p align="center">
  Made for developers who want to keep their code close at hand.
</p>
