# QRix Minter

A premium, privacy-first QR code and barcode studio that runs entirely in the browser.

**Live app:** [spairkie.github.io/QRix-Minter](https://spairkie.github.io/QRix-Minter/)

## Highlights

- QR Code, Code 128, UPC-A, and EAN-13 generation
- Smart payload templates for URLs, Wi-Fi, vCards, events, email, SMS, and geo locations
- Logo overlays with high error correction and scan-confidence guidance
- PNG and infinitely scalable SVG export
- Batch import by paste, CSV/TXT upload, or drag and drop
- ZIP export and Avery 5160-friendly print sheets
- Browser-native image scanning where `BarcodeDetector` is available
- History, favorites, usage statistics, comparison mode, undo/redo, and keyboard shortcuts
- Responsive light/dark interface; all payloads stay on device

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Keyboard shortcuts

- `Ctrl/Cmd + 1–4`: switch code type
- `Ctrl/Cmd + D`: download PNG
- `Ctrl/Cmd + Enter`: generate a batch
- `Ctrl/Cmd + Z`: undo
- `Ctrl/Cmd + Shift + Z`: redo

## Notes

Camera/image decoding uses the browser's experimental Barcode Detection API and gracefully reports when it is unavailable. QRix maintains the recommended four-module quiet zone and defaults to high error correction when working with logos.

Built by **Hans Sai**.
