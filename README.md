# AP Cybersecurity

The main classroom hub for course notes and practice, organized around the five units in the supplied AP Cybersecurity course framework.

## Website

https://mrchristievp.github.io/AP-Cybersecurity/

This is a static website: no build step, package installation, account, or backend is needed. Open `index.html`, or serve this folder with any static server. Publish the `main` branch, root folder, in GitHub Settings → Pages.

## Add a resource

1. Add a new page inside this repository, for example `units/unit-1/notes.html`, or publish it in its own repository.
2. In `index.html`, find the matching `id="unit-1"` section (or another unit).
3. Replace the relevant “Coming soon” text with a real link. Use relative paths for pages inside this repository, e.g. `units/unit-1/notes.html`.
4. Update that unit’s status and searchable `data-search` text. Update the live tool count and practice section when adding more tools.

The existing Linux practice tool is linked at its independent GitHub Pages address, so its updates remain independent of this hub. All five unit sections expand with native HTML, including when JavaScript is disabled. JavaScript only enhances unit search. Fonts load from Google Fonts with local system fallbacks.

## Files

- `index.html` — page content, unit directory, and resource links
- `style.css` — responsive layout and visual design
- `site.js` — unit search
- `favicon.svg` — site icon
- `.nojekyll` — serve the static files directly on GitHub Pages

Original provider documents, course PDFs, and student information are not part of this repository. This is a classroom resource, not an official College Board website.
