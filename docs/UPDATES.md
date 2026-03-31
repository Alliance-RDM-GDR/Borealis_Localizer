# Borealis Localizer Updates

> Keep this log cupdated. Add a new entry for every meaningful change merged into the main branch so the team has a quick reference to recent improvements.

## 2026-03-30
- Updated terminology across the UI and documentation to use "Source language" and "Target language" rather than explicitly "English" and "French".
- Refactored the core script `app.js` architecture to handle language-agnostic logic.
- Included a `QuickStart.md` to guide new users to the tool.
- Added a prominent yellow Quick Start Guide button to the app header for direct manual access.

## 2025-11-03
- Combined the “missing” filter with detection of modified translations, including row highlighting and key-group filtering support.
- Improved `.properties` decoding by auto-detecting UTF-8/UTF-16/ISO-8859-1 encodings for uploads.
- Added key-group dropdown, alignment summary panel, and ordered rendering to flag missing/extra/duplicate keys.
- Hardened textarea editing: smart punctuation normalization, ISO-8859-1 warnings, monospace styling, and direct highlight updates.
- Introduced GitHub loading workflow with blob/raw URL support and basic conversion to raw endpoints.
- Refreshed UI copy/layout to reflect new controls and provided guidance for the GitHub workflow.
