# Package Developer Toolbar

[![apm](https://img.shields.io/apm/l/package-developer-toolbar.svg?style=flat-square)](https://atom.io/packages/package-developer-toolbar)
[![apm](https://img.shields.io/apm/v/package-developer-toolbar.svg?style=flat-square)](https://atom.io/packages/package-developer-toolbar)
[![apm](https://img.shields.io/apm/dm/package-developer-toolbar.svg?style=flat-square)](https://atom.io/packages/package-developer-toolbar)
[![Travis](https://img.shields.io/travis/idleberg/atom-package-developer-toolbar.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-package-developer-toolbar)
[![David](https://img.shields.io/david/idleberg/atom-package-developer-toolbar.svg?style=flat-square)](https://david-dm.org/idleberg/atom-package-developer-toolbar#info=dependencies)
[![David](https://img.shields.io/david/dev/idleberg/atom-package-developer-toolbar.svg?style=flat-square)](https://david-dm.org/idleberg/atom-package-developer-toolbar?type=dev)

A toolbar aimed at developers of Atom packages and syntax themes, based on the [tool-bar](https://github.com/suda/tool-bar) package.

## Installation

### apm

Install `package-developer-toolbar` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install package-developer-toolbar`

### Using Git

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

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

### Dependencies

This package makes use of [atom-package-deps](https://github.com/steelbrain/package-deps) to automatically install additional packages it depends on. However, you *might* have to restart Atom in order to use them.

## Usage

Toggle and position the menu from the `Packages > Toolbar` menu.

### Available Buttons

![Screenshot](https://raw.githubusercontent.com/idleberg/atom-package-developer-toolbar/master/screenshot.png)

Buttons from left to right:

* Generate Package¹
* Generate Syntax Theme¹
* Open Package²
* Open Configuration Folder³
* Open Packages Folder³
* Open Project Folder(s)³
* Reveal File³
* Show Settings
* Open Your Config
* Update Packages/Themes
* Toggle Developer Tools
* Re-open file in Dev Mode⁶ / Open in Dev Mode
* Timecop⁴
* Deprecation Cop⁵
* Run Package Specs
* Satisfy Dependencies⁷
* Open localStorage⁸
* Reload Window

¹⁾ provided by [package-generator](https://atom.io/packages/package-generator)
²⁾ provided by [open-package](https://atom.io/packages/open-package)
³⁾ provided by [browse](https://atom.io/packages/browse)
⁴⁾ provided by [timecop](https://atom.io/packages/timecop)
⁵⁾ provided by [deprecation-cop](https://atom.io/packages/deprecation-cop)
⁶⁾ provided by [open-in-developer-mode](https://atom.io/packages/open-in-developer-mode)
⁷⁾ provided by [satisfy-dependencies](https://atom.io/packages/satisfy-dependencies)
⁸⁾ provided by [local-storage](https://atom.io/packages/local-storage)

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-package-developer-toolbar) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
