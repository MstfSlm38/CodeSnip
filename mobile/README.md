# CodeSnip Mobile — iOS & iPadOS

CodeSnip 26Q3.5 mobile foundation.

The existing CodeSnip frontend remains in `index.html`, `style.css`, and `renderer.js`. `renderer.js` is intentionally kept as a single script.

## Architecture

The mobile app is designed as a thin native shell around the existing web frontend. The frontend remains the source of truth for CodeSnip's UI and application logic.

## Planned targets

- iOS
- iPadOS

## Development

A Mac with Xcode is required to build and sign the iOS/iPadOS application. The native shell should load the CodeSnip web assets without moving application logic out of `renderer.js`.

This directory is the 26Q3.5 mobile foundation; native Xcode project files are generated locally with the chosen Capacitor/native wrapper toolchain rather than committed as a partially generated project.
