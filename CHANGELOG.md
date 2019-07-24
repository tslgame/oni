## 3.8.2

- Fix selecting multiple categories to copy/export.
- Persist language selection.
- Show status dialog when saving.

## v3.8.1

- Fix crash on saves with active mods.

## v3.8.0

- Support new QOL3 changes. Breaks compatibility with older saves.
- Fix interests selection in QOL3.

## v3.7.0

- Raw JSON editor

## v3.6.0

- Editor for various difficulty settings.
- Fix geyser rate modification.
- Support saves from 7.6 to 7.8

## v3.5.0

- Change geyser game object type (and artwork) when changing emit element.
- Improve load/save performance.
- "Delete Loose Material" - Option to delete all loose ores on map.

## v3.4.0

- Back button for sub-pages
- Redirect to home page if no save is loaded
- Redirect to home page on 404.
- Materials list
- Imporove "Add Trait/Interest" UI.
- Geysers list
- Basic geyser element and rate editing.
- Duplicant data import / export.
- Fix Tinker and Toggle primary / secondary attribute classification being swapped.

## v3.3.1

- Fix deleting interests

## v3.3.0

- Copy / Paste Duplicant settings.
- Clone Duplicant.

## v3.2.0

- Fix Body Appearance tab.
- Add in-game names for aptitudes and traits

## v3.1.0

- Fill in duplicant property editors.

## v3.0.1

- Fix saves not loading

## v3.0.0

- Rewrite of UI focusing on reusability

## v2.1.3

- Update oni-save-parser to bring in missing traits.

## v2.1.2

- Fix spelling of stamina (#37)
- More flexible type system for identifying save elements to edit.
- Rocketry update supprt.

## v2.1.1

- The same fix to numeric input, preventing editing of some values.
- Chinese language support contributed by [@zsnmwy](https://github.com/zsnmwy)

## v2.1.0

- Fixes to numeric input preventing editing of some values
- Geyser editing (type, rate, lifecycle values)

## v2.0.5

- Fix decimal values not editable.
- Stylistic improvements to tables.

## v2.0.4

- Fix numeric values not editable in browsers other than chrome.

## v2.0.3

- Really remove test button from production build...

## v2.0.2

- Remove test button from production build.

## v2.0.1

- Fix incorrect url path preventing website from loading.

## v2.0.0

Major rewrite of save editor.

- Ground-up rewrite of UI.
- Save / Load progress reporting.
- Edit any recognized template object
- extraData editors duplicant modifiers (health, stamina, germs, diseases, ...)
- extraData editor for storage
- Additional editors for minion modifiers

## v1.4.3

Fix all job mastery and experiences displayed as unmastered / 0.

## v1.4.2

Wallpaper over more bugs due to oni-save-parser@2 save object differences.

## v1.4.1

Slash and burn conversion to support oni-save-parser@2 and the Cosmic Update version of ONI (save version 7.4).

## v1.4.0

- Edit duplicant
  - Interests (aptitudes)
- Edit geysers
  - Type
  - Cycle time factor
  - Active time factor
  - Dormant time factor
- Ability to rename file on download.

## v1.3.0

- Edit current cycle.
- Edit duplicant printer
  - Next duplicant ready
  - Time to next duplicant

## v1.2.1

- Fix save corruption when text with multi-byte accents are encountered.
- Refactor URL layout to make way for future utilities.

## v1.2.0

- Edit Duplicants
  - Current Job
  - Target Job
  - Job Experience
  - Job Mastery

## v1.1.0

- Edit Duplicants
  - Gender (data only; no visual effect)
  - Voice
  - Appearance
- Dedicated load button (no more refreshes to edit new saves)

## v1.0.0

Ground-up rewrite.

- Edit Duplicants
  - Name
  - Size (width and height)
  - Health Status (healthy, critical, incapacitated, invulnurable, ...)
  - Skills (level and experience)
  - Traits
  - Status Effects
- New Theme
- Non-blocking file loading and saving. Prevents browsers from killing the process when working with large saves.
- Internal cleanup for mantainability going forward.
