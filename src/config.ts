export const config = {
  generatorTools: {
    title: 'Show Generator Menu',
    description: 'Displays buttons to generate packages and themes',
    type: 'boolean',
    default: true,
    order: 1
  },
  browseTools: {
    title: 'Show Browse Menu',
    description: 'Displays buttons to browse files and folders, e.g. `Config Folder`, `Packages Folder`, `Current File` etc.',
    type: 'boolean',
    default: true,
    order: 2
  },
  settings: {
    title: 'Show Settings Menu',
    description: 'Display buttons for Atom settings',
    type: 'boolean',
    default: true,
    order: 3
  },
  devTools: {
    title: 'Show Developer Menu',
    description: 'Display buttons for useful developer features, e.g. `Console`, `Reload Window`, `Timecop`, `Package Specs` etc.',
    type: 'boolean',
    default: true,
    order: 4
  },
  enableIdentify: {
    title: 'Identify Panes & TextEditors',
    description: 'Adds data attributes for editor and pane IDs to the respective HTML element',
    type: 'boolean',
    default: true,
    order: 5
  },
  enableTitleMode: {
    title: 'Mode Indicator',
    description: 'Indicates whether current window is in developer mode',
    type: 'boolean',
    default: true,
    order: 6
  }
};

export function getConfig(key) {
  return atom.config.get(`package-developer-toolbar.${key}`);
}
