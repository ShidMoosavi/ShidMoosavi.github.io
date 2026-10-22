# Sina Shid-Moosavi — Personal Website

Live site: **https://shidmoosavi.github.io**

This website is built with Jekyll (the AcademicPages template). GitHub builds it automatically.
**Every time you save a change on GitHub, the live site updates in about 1–2 minutes.**
To check whether the update is finished, open the **Actions** tab of the repository. A green check means it's live.

---

## Quick map: "I want to change…"

| I want to change… | Open this file |
|---|---|
| My name, bio, email, location, university, profile photo | `_config.yml` → `author:` section |
| My Google Scholar / LinkedIn / GitHub / ORCID / ResearchGate links | `_config.yml` → `author:` section |
| The tabs in the top menu (order, add, remove) | `_data/navigation.yml` |
| Home page text (About me, Education table, Skills cards) | `_pages/about.md` |
| Research projects | `_research/` folder (one file per project) |
| Publications list (papers, tags, filters, DOI/slides links) | `_data/publications.yml` |
| Teaching | `_teaching/` folder (one file per course) |
| CV PDF | `files/CV/` folder + `_pages/cv.md` |
| Gallery photos and sections | `images/NU/`, `images/UCF/` + `_data/gallery.yml` |
| Colors, fonts, card style, overall look | `_sass/_custom.scss` |
| Footer links (bottom of every page) | `_includes/footer.html` (reads links from `_config.yml`) |
| Browser tab icon (favicon) | `images/Icon.png` |

---

## Folder guide

```
_config.yml            Main settings: site title, your profile info, social links
README.md              This guide

_data/
  navigation.yml       Top menu tabs
  publications.yml     Publications list (one block per paper)
  gallery.yml          Gallery sections

_pages/                One file = one page on the site
  about.md             Home page  (address: /)
  publications.html    Publications page layout (/publications/) - the papers are in _data/publications.yml
  research.md          Research list page (/research/) - lists everything in _research/
  teaching.html        Teaching list page (/teaching/) - lists everything in _teaching/
  cv.md                CV (/cv/)
  gallery.md           Gallery (/gallery/)
  404.md               "Page not found" page

_research/             One file per research project
_teaching/             One file per course

images/                All pictures (profile photo, project pictures, gallery folders)
files/                 PDFs (CV, resume, papers)

_sass/_custom.scss     YOUR personal style (colors, fonts, cards) - the only style file you need

_includes/, _layouts/, assets/, _sass/ (other files)
                       Template machinery. You normally never need to touch these.
```

**Unused template folders.** `_posts`, `_portfolio`, `_talks`, `_publications`, `_drafts`, `markdown_generator`, `talkmap`, and `scripts` came with the template. They are hidden from the live site through the `exclude:` list in `_config.yml`, so you can ignore them.

---

## How to edit a file on GitHub (no software needed)

1. Go to https://github.com/ShidMoosavi/ShidMoosavi.github.io
2. Click the folder, then the file you want to change.
3. Click the **pencil icon** (✏️ "Edit this file") at the top right of the file.
4. Make your change.
5. Click the green **Commit changes…** button, then **Commit changes** again.
6. Wait 1–2 minutes and refresh your website. Use Ctrl+F5 to skip the browser's saved copy.

**To upload a file** (photo, PDF): open the folder on GitHub → **Add file** → **Upload files** → drag the file in → **Commit changes**.
If a file with the same name already exists, it gets replaced.

> **Tip:** Lines starting with `#` in `.yml` files, and text between `<!--` and `-->` in `.md`/`.html` files, are notes. They don't appear on the website.

---

## Common tasks

### Add a new tab (a new page in the top menu)

**Step 1: Create the page.** In the `_pages/` folder, click **Add file → Create new file** and name it, for example, `awards.md`. Paste:

```markdown
---
layout: archive
title: "Awards"
permalink: /awards/
author_profile: true
---

Write your content here. You can use **bold**, *italic*, lists:

- First award, 2025
- Second award, 2024
```

**Step 2: Add the tab to the menu.** Open `_data/navigation.yml` and add (at the position where you want the tab):

```yaml
  - title: "Awards"
    url: /awards/
```

The `url` must match the `permalink` from Step 1, including the slashes.

To **remove a tab**, delete its two lines in `_data/navigation.yml`. The page file can stay; it just won't be in the menu.

### Add a research project

1. Upload the project picture to `images/projects/` (e.g. `MyProject.png`).
2. In `_research/`, open an existing file (e.g. `Project_5.md`), copy all its text, then **Add file → Create new file** named `Project_6.md` and paste.
3. Change these lines at the top:
   - `title:` the project name
   - `permalink: /research/project_6/` (must be unique)
   - `excerpt:` the short summary shown on the Research list page. Change the image path inside it to `/images/projects/MyProject.png`.
4. Below the second `---`, write the full project description (shown when someone clicks the project).

Projects are listed newest-file-first. `Project_6` appears above `Project_5`.

### Add a publication

All publications are in **`_data/publications.yml`**. Each paper is one block. Copy a block, paste it at the top of the `papers:` list (newest first), and edit it:

```yaml
  - title: "Paper Title"
    authors: "Shid-Moosavi, S., Co-Author, A., and Co-Author, B."
    venue: "Journal Name"
    year: 2027
    type: journal
    description: "One or two short sentences about the paper."
    doi: "https://doi.org/10.xxxx/xxxxx"
    paper: ""
    manuscript: ""
    slides: ""
```

- Keep the two spaces before `- title:` and the four spaces before the other lines.
- `type:` sets the colored tag on the card and the filter button. Use `journal`, `conference`, or `thesis` (or a type you add, see below).
- Your name (`Shid-Moosavi, S.`) is made bold automatically. The spelling must match the `me:` line at the top of the file.
- Cards appear in the same order as in the file.
- If the text contains a double quote `"`, use a single quote `'` instead.

**Links (buttons under each card).** Each of these is optional. If it is empty (`""`) or the line is missing, no button is shown.

| Line | Button | Use it for |
|---|---|---|
| `doi:` | DOI | The DOI link. `https://doi.org/10.xxxx` or just `10.xxxx` both work. |
| `paper:` | Paper | Any other link to the paper (arXiv, ResearchGate, university repository, PDF) |
| `manuscript:` | Manuscript | Your manuscript PDF (e.g. for a paper under review) |
| `slides:` | Slides | Your presentation slides |

The paper title links to the DOI, or to `paper` / `manuscript` if there is no DOI.

**To add slides or a PDF you have on your computer:** upload it to the `files/` folder (for example `files/slides/IMAC2026.pdf`, see "To upload a file" above), then write `slides: "/files/slides/IMAC2026.pdf"`.

**Add a new type (tag + filter button).** At the top of `_data/publications.yml`, under `types:`, copy one block and change it:

```yaml
  - key: preprint          # short id, used as "type: preprint" on papers
    tag: "Preprint"        # text of the colored tag on the card
    filter: "Preprints"    # text of the filter button
    color: gray            # teal, purple, amber, green, red, blue or gray
```

Then set `type: preprint` on the papers you want. A few ready-made examples (Preprint, Book Chapter, Under Review) are already in the file behind `#`. Remove the `#` to use them.

The filter buttons always start with **All**. After that, a button appears for each type that has **at least one paper**, in the order of the `types:` list. A type with no papers gets no button, so you can define types before you need them.

### Add a teaching entry

In `_teaching/`, copy an existing file (e.g. `2025-2-Fall-teaching.md`) into a new file such as `2026-1-spring-teaching.md`. Then change:

- `title:` course name
- `permalink:` must be **unique**, e.g. `/teaching/2026-1-spring-teaching`
- `venue:`, `date:`, `location:`

The list sorts by the `date:` line (newest at the top). Entries with the same date are sorted by file name.

### Update the CV

Upload the new PDF to `files/CV/` with the **same name** (`CV_ShidMoosavi.pdf`). It replaces the old one.
Then in `_pages/cv.md`, change `last_updated: "August 2026"` to the new date.
(If you use a different file name, change the `cv_file:` line in `_pages/cv.md`.)

### Add gallery photos

- **Add a photo to an existing section:** upload it to `images/NU/` (or `images/UCF/`) named with the **next number**. For example, if the last one is `21.jpg`, name the new one `22.jpg`. It must be `.jpg`. The page counts photos automatically, and the newest (highest number) shows first.
- **Add a new section:** create a folder such as `images/Conferences/`. On GitHub: **Add file → Upload files**, then drag a folder in, or upload `1.jpg`, `2.jpg`, and so on. Then add to `_data/gallery.yml`:

  ```yaml
  - title: "Conferences"
    folder: "Conferences"
    description: "Talks and posters"   # optional
  ```

Visitors can click any photo to open it full screen and use the arrow keys to browse.

### Add a Skills card on the home page

In `_pages/about.md`, copy one block from `<div class="skill-card">` to its closing `</div>` (about 10 lines, marked `<!-- Card 1 -->`). Paste it after the last card, then change the image, title, and text.

### Change profile photo

Upload the new photo to `images/` named `Profile.png` (this replaces the old one), or upload any name and change `avatar:` in `_config.yml`.

### Change the colors or fonts

Open `_sass/_custom.scss`:

- **Section 1**: light mode colors. `--brand-color` is the main accent color used for links, the menu underline, card edges, and buttons. Change this one value to recolor the whole site.
- **Section 2**: dark mode colors.
- **Section 3**: heading font. Body font is the first name in `$sans-serif` in `_sass/_themes.scss`.
  Fonts come from Google Fonts. The link that loads them is in `_includes/head/custom.html`.

Color picker for hex codes such as `#17607a`: https://htmlcolorcodes.com

---

## If something breaks

- Open the **Actions** tab on GitHub. A red ❌ means the last change has an error. Click it to see which file and line.
- Most common causes:
  - In `.yml` files, the **indentation** (spaces) must match the lines around it. Use spaces, not tabs.
  - A missing quote `"` or a missing `---` at the top of a page.
- To undo a change: open the file on GitHub → **History** → open the previous version → copy its content back.

---

## Credits

Based on the [AcademicPages](https://github.com/academicpages/academicpages.github.io) template (MIT License, see `LICENSE`), which is a fork of [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/) by Michael Rose.
