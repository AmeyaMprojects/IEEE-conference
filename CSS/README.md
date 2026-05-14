# CSS File Guide

Quick reference for anyone working on the website styles.

## File Structure

| File | Used By | What It Styles |
|------|---------|---------------|
| `global.css` | **Every page** | Nav, footer, hamburger menu, social icons, buttons, reset |
| `homepage.css` | `index.html` | Hero banner, important dates, about section, sponsors |
| `organizing-committee.css` | `Organizing_Committee.html` | Committee card layout, member lists |
| `advisory.css` | `Advisory_Committee.html` | Advisory committee lists with custom bullets |
| `technical-program.css` | `Technical_Program_Committee.html` | TPC member list with purple bullets |
| `call-for-paper.css` | `CallForPaper.html` | Track cards, topic lists |
| `paper-submission.css` | `paper_submission.html` | Manuscript sections, upload area, guidelines |
| `registration.css` | `Registration.html` | Fee tables, note boxes, hotel cards |
| `pre-conference-workshop.css` | `PreConferenceWorkshop.html` | Workshop details, brochure button |

## How It Works

Every page loads **two** CSS files:
1. `global.css` — shared styles (always loaded first)
2. A page-specific CSS file — overrides and additions

## Naming Convention

- All files use **kebab-case** (lowercase with hyphens)
- File names match the page they style
