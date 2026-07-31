# albertocappello.github.io

Personal academic website for Alberto Cappello, built with [Jekyll](https://jekyllrb.com)
and served by GitHub Pages from the `gh-pages` branch.

## Editing content

Most changes do not require touching HTML:

| What | Where |
|---|---|
| Name, role, affiliation, email, CV path | `_config.yml` |
| Navigation, research fields, course list, references | `_data/settings.yml` |
| Papers (title, PDF, slides, abstract) | `_data/research.yml` |
| Homepage bio | `index.md` |
| A course's syllabus and lecture list | `courses/<course>.md` front matter |
| Styling | `_sass/main.scss` |

PDFs live in `research/`, `courses/<course>/`, and `assets/` (CV).

## Running locally

```
JEKYLL_NO_BUNDLER=1 ~/.gem/ruby/2.6.0/bin/jekyll serve
```

Then open http://localhost:4000.

Jekyll 4.2 is installed under `~/.gem` because macOS ships Ruby 2.6, which newer
Jekyll releases no longer support. Add `~/.gem/ruby/2.6.0/bin` to your `PATH` to
drop the full path. Installing a current Ruby (`brew install ruby`) would let you
use plain `bundle exec jekyll serve` instead.

## Publishing

Push to `gh-pages`. GitHub Pages rebuilds the site automatically.
