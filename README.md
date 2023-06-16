# BingSkipper

Skips tracker pages on Bing search results.

Bing tracker links begin with "https://www.bing.com/ck". This extension changes all tracker links on bing search results pages to their destination links, as the destination link is encoded with Base64 in the tracker link.

Links will be highlighted in red if the extension has failed to decode it, and will work as normal.

## Build

You'll need Node.js and a package manager of your choice (pnpm/npm/yarn)

- Install dependencies with `pnpm/npm/yarn install`
- Build to dist/out.js `pnpm/npm/yarn run build`
- Head over to `chrome://extensions` and enable Developer mode in the top right corner
- Select "Load unpacked" in the top left corner and select the 'dist' folder.
