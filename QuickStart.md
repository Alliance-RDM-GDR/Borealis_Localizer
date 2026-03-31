# Borealis Borealis Localizer - Quick Start Guide

Welcome to the Borealis Localizer! This is a client-side tool to help you compare, edit, and export `.properties` files for translations within the Borealis dataverse.

## Accessing the App
The app is permanently hosted online. You do not need to download or install any code.

👉 **[Open Borealis Localizer App](https://alliance-rdm-gdr.github.io/Borealis_Localizer/)**

---

## Table of Contents
1. [Loading Files](#1-loading-files)
2. [Translating](#2-translating)
3. [Filtering and Searching](#3-filtering-and-searching)
4. [Previewing and Exporting](#4-previewing-and-exporting)

---

## 1. Loading Files
You need two files to begin: a **Source language file** and a **Target language file**.

**Option A: Uploading Local Files**
1. Click **Choose File** under "Upload new Source language .properties file" and select a `.properties` file.
2. Click **Choose File** under "Upload existing Target language .properties file" and select the file you want to translate or modify.
3. Click the **Compare Files** button.

**Option B: Loading from GitHub**
1. Navigate to the "Or Load Directly from GitHub" section.
2. Paste the GitHub URL for your **Source language file** (e.g., english `.properties`).
3. Paste the URL for your **Target language file** (e.g., french `.properties`).
   *Note: Standard GitHub viewer URLs or deep-link raw blob URLs will both work. The tool handles conversion to `raw.githubusercontent.com` URLs automatically.*
4. Click **Load from GitHub**.

---

## 2. Translating
Once the table is populated, you will see three columns:
- **Key**: The unique identifier for the text snippet.
- **Source language**: The read-only text in the source language.
- **Target language (editable)**: A text area where you can input and update the translation.

**Color Indicators**:
- **White Background:** Translation exists and resembles the reference.
- **Red Highlight:** Indicates **Missing translations**. The target value is blank.
- **Yellow Highlight:** Indicates **Modified translations**. A previous translation exists, but you've updated the text.

**Note on Auto-Saving**: Your edits in the browser are automatically saved into local storage. If you accidentally refresh the page, re-upload the same items to restore your current session.

---

## 3. Filtering and Searching
The interface has built-in tools to help handle heavily-populated keys:
- **Search:** Allows you to quickly find literal words across keys, source texts or target texts.
- **Key group selector:** Focus specifically on bundles, allowing you to select prefix scopes before the first dot `.` segment.
- **Show only missing or changed translations:** Toggling this checkbox instantly hides all matching rows, leaving only those where the target text is blank or altered, helping you focus strictly on what needs translating.

---

## 4. Previewing and Exporting
When you are done modifying your target text, click these commands along the bottom edge:
- **Show Preview**: View a non-destructive block of text rendering the entire target language config properties, identical to what an export would save.
- **Export Updated Target language File**: This downloads the entire updated file (`Bundle_target_updated.properties`).
- **Export Only Missing Translations**: Downloads a targeted snippet of only the keys without any populated translations (`Bundle_target_missing_only.properties`), keeping properties lightweight if passing this around to third-party translation partners.

**Feedback or Errors**
If you require support or run into any unresolvable formatting warnings (such as ISO-8859-1 unsupported characters limits), please fill out the Feedback Form linked in the header, or write an email to **info@borealisdata.ca**.
