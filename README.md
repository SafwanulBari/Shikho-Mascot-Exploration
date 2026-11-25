# Mascot Showcase

A static gallery for the mascot styles in the Figma file *Mascot Exploration*, page **Review** (node `121:51`). The Review page is the source of truth: it has five mascot styles, each with its own board of 7 emotions.

- `index.html` is the gallery: one card per style with its front-facing image, style name and emotion count.
- `mascot.html?id=01` … `05` is each style's details page. It has:
  - the front-facing hero image
  - an emotion gallery with only that style's emotions
  - a preview panel: prev/next, a thumbnail strip, ←/→/Home/End/Esc, swipe on touch, and deep links such as `#emotion=03-hi`
  - the turnaround sheet

The only animation is a hover jump on the gallery mascots (pure CSS; off when reduced motion is set). There are no JavaScript dependencies.

## Run it

```bash
npx -y http-server@14.1.1 -p 5178 -c-1
```

Then open http://localhost:5178. Opening `index.html` directly from disk also works.

## Data (`js/mascots.js`)

Each mascot has an `id`, `name`, `style`, `front` (front-facing image), `description`, `turnaround`, its `figmaNode` and an `emotions` array. Each emotion has an `id` (for example `03-hi`), `name`, `image` and `description`.

Emotion images are the transparent cut-outs from each style's own Figma board, saved as `assets/emotions/<mascot>-<emotion>.webp`. They're never shared between mascots.

| ID | Style | Figma frame |
| --- | --- | --- |
| 01 | Glossy Blue Bird | 121:68 |
| 02 | Orange-Cap Bird | 121:505 |
| 03 | Sunny Bandana Chick | 121:602 |
| 04 | Fluffy Crest Chick | 121:629 |
| 05 | Toy Bird | 121:709 |

Emotions, in the order of each Figma board: Reading Book, Note Taking, Holding Trophy, Hi, Clapping, Thumbs Up, Error State.
