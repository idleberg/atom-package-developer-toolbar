meta = require '../package.json'

module.exports =
  config:
    generatorTools:
      title: "Show Generator Menu"
      description: "Displays buttons to generate packages and themes"
      type: 'boolean'
      default: true
    browseTools:
      title: "Show Browse Menu"
      description: "Displays buttons to browse files and folders, e.g. `Config Folder`, `Packages Folder`, `Current File`"
      type: 'boolean'
      default: true
    devTools:
      title: "Show Developer Menu"
      description: "Display buttons for useful developer features, e.g. `Console`, `Settings`, `Config`, `Reload Window`, `Package Specs`"
      type: 'boolean'
      default: true

  activate: (state) ->
    require('atom-package-deps').install(meta.name)

  deactivate: ->
    @toolBar?.removeItems()

  consumeToolBar: (toolBar) ->
    @toolBar = toolBar 'developer-tool-bar'



    if atom.packages.loadedPackages['package-generator'] and atom.config.get('package-developer-toolbar.generatorTools') isnt false
      @toolBar.addButton
        icon: 'wand'
        callback: 'package-generator:generate-package'
        tooltip: 'Generate Package'
        iconset: 'ion'

      @toolBar.addButton
        icon: 'paintbrush'
        callback: 'package-generator:generate-syntax-theme'
        tooltip: 'Generate Syntax Theme'
        iconset: 'ion'

    @toolBar.addSpacer()

    if atom.packages.loadedPackages['browse'] and atom.config.get('package-developer-toolbar.browseTools') isnt false
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

    if atom.config.get('package-developer-toolbar.devTools') isnt false

      @toolBar.addButton
        icon: 'terminal'
        callback: 'window:toggle-dev-tools'
        tooltip: 'Toggle Developer Tools'

      @toolBar.addButton
        icon: 'settings'
        callback: 'application:show-settings'
        tooltip: 'Show Settings'

      @toolBar.addButton
        icon: 'tools'
        callback: 'application:open-your-config'
        tooltip: 'Open Your Config'

      if atom.packages.loadedPackages['settings-view']
        @toolBar.addButton
          icon: 'cloud-download'
          callback: 'settings-view:check-for-package-updates'
          tooltip: 'Update Packages/Themes'

      @toolBar.addButton
        icon: 'clock'
        callback: 'window:run-package-specs'
        tooltip: 'Run Package Specs'

      @toolBar.addButton
        icon: 'refresh'
        callback: 'window:reload'
        tooltip: 'Reload Window'
        iconset: 'ion'

      @toolBar.addSpacer()
