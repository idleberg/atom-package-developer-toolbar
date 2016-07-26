meta = require '../package.json'

module.exports =
  activate: (state) ->
    require('atom-package-deps').install(meta.name)

  deactivate: ->
    @toolBar?.removeItems()

  serialize: ->

  consumeToolBar: (toolBar) ->
    @toolBar = toolBar 'developer-tool-bar'

    if atom.packages.loadedPackages['package-generator']
      @toolBar.addButton
        icon: 'wand'
        callback: 'package-generator:generate-package'
        tooltip: 'Generate Package'
        iconset: 'ion'

      @toolBar.addButton
        icon: 'paintcan'
        callback: 'package-generator:generate-syntax-theme'
        tooltip: 'Generate Syntax Theme'

    @toolBar.addSpacer()

    if atom.packages.loadedPackages['browse']
      @toolBar.addButton
        icon: 'atom-original'
        callback: 'browse:configuration-folder'
        tooltip: 'Open Configuration Folder'
        iconset: 'devicon'

      @toolBar.addButton
        icon: 'package'
        callback: 'browse:packages-folder'
        tooltip: 'Open Packages Folder'

      @toolBar.addButton
        icon: 'file-symlink-directory'
        callback: 'browse:project-folders'
        tooltip: 'Open Project Folder(s)'

      @toolBar.addButton
        icon: 'file-symlink-file'
        callback: 'browse:reveal-file'
        tooltip: 'Reveal File'

    @toolBar.addSpacer()

    @toolBar.addButton
      icon: 'gear-a'
      callback: 'window:toggle-dev-tools'
      tooltip: 'Toggle Developer Tools'
      iconset: 'ion'

    @toolBar.addButton
      icon: 'settings'
      callback: 'application:show-settings'
      tooltip: 'Show Settings'

    @toolBar.addButton
      icon: 'clock'
      callback: 'window:run-package-specs'
      tooltip: 'Run Package Specs'

    @toolBar.addButton
      icon: 'refresh'
      callback: 'window:reload'
      tooltip: 'Reload Window'
      iconset: 'ion'
