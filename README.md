# 🎮 Piston Game Engine

![npm](https://img.shields.io/npm/v/@varandas/piston) ![license](https://img.shields.io/npm/l/@varandas/piston) ![downloads](https://img.shields.io/npm/dt/@varandas/piston)

Piston Game Engine is a minimalist game engine using RxJS and TypeScript, designed for creating small, efficient games suitable for the js13k competition.

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

To install Piston Game Engine, use the command below:

```bash
npm install @varandas/piston
```

or

```bash
yarn add @varandas/piston
```

## 📖 Usage

Below is an example of how to use Piston Game Engine:

```typescript
import { startGame, loadSprite, drawSprite } from '@varandas/piston'

const sprite = loadSprite('path/to/sprite.png')

function update(context: CanvasRenderingContext2D, keys: any) {
  keys.keydown$.subscribe((event: any) => {
    if (event.key === 'ArrowRight') {
      drawSprite(context, sprite, 100, 100) // Example position
    }
  })
}

startGame('gameCanvas', update)
```

## 🎨 Examples

Here are some examples of how you can use Piston Game Engine to create fun and interactive games.

TODO: Add examples

## 🌟 Features

- 🎮 Easy to Use: Simple and intuitive API.
- ⚡ Lightweight: Minimal dependencies, designed for js13k.
- 📦 RxJS Powered: Uses RxJS for event management.
- 🛠️ TypeScript: Fully written in TypeScript with type definitions.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests on GitHub.

## How to Contribute

- Fork the repository
- Create a new branch (git checkout -b feature/new-feature)
- Make your changes and commit them (git commit -am 'Add new feature')
- Push to the branch (git push origin feature/new-feature)
- Create a new Pull Request

## 📜 License

Distributed under the MIT License. See LICENSE for more information.
