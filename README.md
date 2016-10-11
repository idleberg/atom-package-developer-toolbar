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

Install Node dependencies:

```bash
$ cd package-developer-toolbar
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
* Open Configuration Folder²
* Open Packages Folder²
* Open Project Folder(s)²
* Reveal File²
* Show Settings
* Open Your Config
* Update Packages/Themes
* Toggle Developer Tools
* Re-open file in Dev Mode⁵ / Open in Dev Mode
* Timecop³
* Deprecation Cop⁴
* Run Package Specs
* Reload Window

¹⁾ provided by [package-generator](https://atom.io/packages/package-generator)  
²⁾ provided by [browse](https://atom.io/packages/browse)  
³⁾ provided by [timecop](https://atom.io/packages/timecop)  
⁴⁾ provided by [deprecation-cop](https://atom.io/packages/deprecation-cop)  
⁵⁾ provided by [open-in-developer-mode](https://atom.io/packages/open-in-developer-mode)  

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-package-developer-toolbar) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
