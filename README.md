# Mascot Showcase

A static gallery for the mascot styles in the Figma file *Mascot Exploration*, page **Review** (node `121:51`). The Review page is the source of truth: the site shows six of its styles, each with its own board of 7 emotions. The site numbers them 01 to 06, which are Figma’s Mascot 2 to Mascot 7; Figma’s Mascot 1 is left off.

- `index.html` is the gallery: one card per style with its front-facing image, style name and emotion count.
- `mascot.html?id=01` … `06` is each style's details page. It has:
  - the front-facing hero image
  - an emotion gallery with only that style's emotions
  - a preview panel: prev/next, a thumbnail strip, ←/→/Home/End/Esc, swipe on touch, and deep links such as `#emotion=02-hi`
  - the turnaround sheet

The only animation is a hover jump on the gallery mascots (pure CSS; off when reduced motion is set). There are no JavaScript dependencies.

## Run it

```bash
npx -y http-server@14.1.1 -p 5178 -c-1
```

Then open http://localhost:5178. Opening `index.html` directly from disk also works.

## Data (`js/mascots.js`)

Each mascot has an `id`, `name`, `style`, `front` (front-facing image), `description`, `turnaround`, its `figmaNode` and an `emotions` array. Each emotion has an `id` (for example `02-hi`), `name`, `image` and `description`.

Emotion images are the transparent cut-outs from each style's own Figma board, saved as `assets/emotions/<mascot>-<emotion>.webp`. They're never shared between mascots.

| ID | Style | Figma frame | Figma label |
| --- | --- | --- | --- |
| 01 | Orange-Cap Bird | 121:505 | Mascot 2 |
| 02 | Sunny Bandana Chick | 121:602 | Mascot 3 |
| 03 | Fluffy Crest Chick | 121:629 | Mascot 4 |
| 04 | Toy Bird | 121:709 | Mascot 5 |
| 05 | Flat Cartoon Chick | 123:3813 | Mascot 6 |
| 06 | Two-Tone 3D Chick | 139:3917 | Mascot 7 |

Emotions, in the order of each Figma board: Reading Book, Note Taking, Holding Trophy, Hi, Clapping, Thumbs Up, Error State.
