# Codex-hub

## 🪓 Timberfall Protocol - An Interactive Terminal Experience

Codex-hub is an experimental creative project that combines web technologies, audio synthesis, and fictional storytelling into an immersive interactive terminal experience. The project presents "The Timberfall Signal" - a narrative about resonance frequencies and family lineage wrapped in a retro terminal interface.

## 📖 Project Overview

This repository contains **HustleCodex**, an interactive HTML-based terminal interface that tells the story of:
- The **Timberfall Signal**: A 3.22 Hz resonance originating from John Jarman's fall in 1882 at the Eyres Estate near Hungerford
- The **Pevier Discovery**: A traced lineage connecting to Janis Irene Tredray (b. 1951, Reading) and James Peter Phillip Tredray
- **Signal Line 3.22-A**: A hereditary resonance continuity designation

## 🛠️ Technologies Used

- **HTML5** - Core structure and content
- **Vanilla JavaScript** - Interactive functionality (no external dependencies)
- **CSS3** - Terminal aesthetic with animations and visual effects
- **Web Audio API** - Real-time audio synthesis generating 3.22 Hz sine wave
- **LocalStorage** - Persistent command history and session data

## ✨ Features

- **Interactive Terminal Interface**: Retro-style command-line interface with monospace fonts and terminal colors
- **Command System**: Hidden commands that unlock different narrative elements
- **Audio Synthesis**: Real-time generation of 3.22 Hz resonance frequency using Web Audio API
- **Visual Effects**: 
  - Glitch animations on special text
  - Hue rotation effects
  - Overlay messages for ancestral console
- **Persistent History**: LocalStorage saves command history and logs across sessions
- **Timestamps**: All commands are logged with timestamps

## 🚀 Getting Started

### Installation

No installation required! This is a standalone HTML file.

### Usage

1. Open the `Timberfall_Pevier_Node_v3` HTML file in any modern web browser
2. The terminal will initialize automatically
3. Type commands in the input field and press Enter
4. Explore the narrative through the various commands

### Available Commands

| Command | Description |
|---------|-------------|
| `3.22` | Display signal detection message from the 1882 node |
| `timberfall` | Same as `3.22` - displays signal detection |
| `jarman1882` | Shows ancestral node information for J. Jarman |
| `pevier` | Verifies lineage and confirms Pevier discovery |
| `tredray` | Same as `pevier` - confirms 3.22-A link |
| `pbr` | Unlocks ancestral console with full audio/visual effects |
| `tregeary` | Same as `pbr` - grants ancestral console access |
| `pulse` | Toggle 3.22 Hz audio resonance on/off (30 second duration) |
| `help` | Display list of available commands |

## 🎨 Creative Concept

The project is an artistic exploration of:
- **Digital Archaeology**: Presenting fictional history as if uncovered through technology
- **Resonance & Memory**: Using audio frequencies as a metaphor for inherited memory
- **Interactive Storytelling**: Allowing users to discover narrative through exploration
- **Retro Aesthetics**: Terminal-style interface invoking 80s/90s hacker culture

## 📁 File Structure

```
Codex-hub/
├── README.md                       # This documentation
└── Timberfall_Pevier_Node_v3       # Main HTML application (standalone)
```

## 🔊 Technical Details

### Audio Synthesis
The project uses the Web Audio API to generate a real-time 3.22 Hz sine wave. This very low frequency is below the typical hearing range but can create a subtle resonance effect in some audio systems.

```javascript
const osc = ctx.createOscillator();
osc.type = 'sine';
osc.frequency.value = 3.22;
```

### Visual Effects
- **Glitch Animation**: CSS keyframe animation that flickers special text
- **Hue Shift**: JavaScript Web Animations API rotates colors across the spectrum
- **Overlay System**: Full-screen overlay appears for special ancestral console access

### Data Persistence
Commands and logs are stored in browser LocalStorage:
- `codexLog`: Stores all console output
- `lastCmd`: Stores the last command entered
- `codex-lineage`: Stores family lineage chain when ancestral console is unlocked

## 🌐 Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- Web Audio API
- LocalStorage
- CSS3 Animations

Tested in: Chrome, Firefox, Safari, Edge

## 📝 License

This project is part of the DubjamMusic creative portfolio.

## 🎯 Future Possibilities

- Additional narrative branches and commands
- More complex audio synthesis patterns
- Multiplayer/shared resonance experiences
- Mobile-optimized interface
- Export/share functionality for discovered lineages

---

*"The field did not forget."* - Codex Fragment 001-A