# package-developer-toolbar

[![License](https://img.shields.io/github/license/idleberg/atom-package-developer-toolbar?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-package-developer-toolbar/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-package-developer-toolbar?style=for-the-badge)](https://github.com/idleberg/atom-package-developer-toolbar/releases)
[![Downloads](https://img.shields.io/pulsar/dt/package-developer-toolbar?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/package-developer-toolbar)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-package-developer-toolbar/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-package-developer-toolbar/actions)

A toolbar aimed at developers of Atom/Pulsar packages and syntax themes, based on the [tool-bar](https://github.com/suda/tool-bar) package.

## Installation

### apm

Install `package-developer-toolbar` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install package-developer-toolbar`

### Using Git

<details>
<summary><strong>Atom</strong></summary>

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
```all
```

</details>

<details>
<summary><strong>Pulsar</strong></summary>

Change to your Pulsar packages directory:

```powershell
# Windows
$ cd %USERPROFILE%\.pulsar\packages

# Linux & macOS
$ cd ~/.pulsar/packages/
```

Clone repository as `package-developer-toolbar`:

```bash
$ git clone https://github.com/idleberg/atom-package-developer-toolbar package-developer-toolbar
```

</details>

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
* Install Packages/Themes
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
⁴⁾ provided by [timecop](https://atom.io/packages/timecop) or [timecop-2](https://atom.io/packages/timecop-2)  
⁵⁾ provided by [deprecation-cop](https://atom.io/packages/deprecation-cop)  
⁶⁾ provided by [open-in-developer-mode](https://atom.io/packages/open-in-developer-mode)  
⁷⁾ provided by [satisfy-dependencies](https://atom.io/packages/satisfy-dependencies)  
⁸⁾ provided by [local-storage](https://atom.io/packages/local-storage)  

## License

This work is licensed under the [The MIT License](LICENSE).
