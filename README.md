# Package Developer Toolbar

[![apm](https://img.shields.io/apm/l/package-developer-toolbar.svg?style=flat-square)](https://atom.io/packages/package-developer-toolbar)
[![apm](https://img.shields.io/apm/v/package-developer-toolbar.svg?style=flat-square)](https://atom.io/packages/package-developer-toolbar)
[![apm](https://img.shields.io/apm/dm/package-developer-toolbar.svg?style=flat-square)](https://atom.io/packages/package-developer-toolbar)
[![Travis](https://img.shields.io/travis/idleberg/atom-package-developer-toolbar.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-package-developer-toolbar)
[![David](https://img.shields.io/david/idleberg/atom-package-developer-toolbar.svg?style=flat-square)](https://david-dm.org/idleberg/atom-package-developer-toolbar#info=dependencies)
[![David](https://img.shields.io/david/dev/idleberg/atom-package-developer-toolbar.svg?style=flat-square)](https://david-dm.org/idleberg/atom-package-developer-toolbar#info=devDependencies)
[![Gitter](https://img.shields.io/badge/chat-Gitter-ff69b4.svg?style=flat-square)](https://gitter.im/NSIS-Dev/Atom)

A toolbar targeted at developers of Atom packages and syntax themes, based on the [tool-bar](https://github.com/suda/tool-bar) package.

## Installation

### apm

Install `package-developer-toolbar` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install package-developer-toolbar`

### GitHub

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `package-developer-toolbar`:

```bash
$ git clone https://github.com/idleberg/atom-package-developer-toolbar package-developer-toolbar
```

## Usage

Toggle and position the menu from the `Packages > Toolbar` menu.

### Available Buttons

* [Package Generator](https://atom.io/packages/package-generator)
  * Generate Package
  * Generate Syntax Theme

* [Browse](https://atom.io/packages/browse)
  * Open Configuration Folder
  * Open Packages Folder
  * Open Project Folder(s)
  * Reveal File

* Core Features
  * Toggle Developer Tools
  * Show Settings
  * Run Package Specs
  * Reload Window

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-package-developer-toolbar) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[osascript]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osascript.1.html
[osacompile]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html