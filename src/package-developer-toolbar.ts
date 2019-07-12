// Dependencies
import { install } from 'atom-package-deps';

// Variables
let toolBar;

// Exports
export { config } from './config';

export async function activate() {
  install('package-developer-toolbar');
}

export function deactivate() {
  if (toolBar) {
    toolBar.removeItems();
    toolBar = null;
  }
}

export function consumeToolBar(getToolBar) {
  toolBar = getToolBar('developer-tool-bar');

  // @ts-ignore
  const loadedPackages: any = Object.keys(atom.packages.loadedPackages);

  if (loadedPackages.includes('package-generator') && (atom.config.get('package-developer-toolbar.generatorTools') !== false)) {
    toolBar.addButton({
      icon: 'wand',
      callback: 'package-generator:generate-package',
      tooltip: 'Generate Package',
      iconset: 'ion'
    });

    toolBar.addButton({
      icon: 'paintbrush',
      callback: 'package-generator:generate-syntax-theme',
      tooltip: 'Generate Syntax Theme',
      iconset: 'ion'
    });

    toolBar.addButton({
      icon: 'folder',
      callback: 'open-package:toggle',
      tooltip: 'Open Package',
      iconset: 'ion'
    });
  }

  toolBar.addSpacer();

  if (loadedPackages.includes('browse') && (atom.config.get('package-developer-toolbar.browseTools') !== false)) {
    toolBar.addButton({
      icon: 'atom-original',
      callback: 'browse:configuration-folder',
      tooltip: 'Open Configuration Folder',
      iconset: 'devicon'
    });

    toolBar.addButton({
      icon: 'package',
      callback: 'browse:packages-folder',
      tooltip: 'Open Packages Folder'
    });

    toolBar.addButton({
      icon: 'file-symlink-directory',
      callback: 'browse:project-folders',
      tooltip: 'Open Project Folder(s)'
    });

    toolBar.addButton({
      icon: 'file-symlink-file',
      callback: 'browse:reveal-file',
      tooltip: 'Reveal File'
    });
  }

  toolBar.addSpacer();

  if (atom.config.get('package-developer-toolbar.settings') !== false) {

    toolBar.addButton({
      icon: 'settings',
      callback: 'application:show-settings',
      tooltip: 'Show Settings'
    });

    toolBar.addButton({
      icon: 'tools',
      callback: 'application:open-your-config',
      tooltip: 'Open Your Config'
    });

    if (loadedPackages.includes('settings-view')) {
      toolBar.addButton({
        icon: 'cloud-download',
        callback: 'settings-view:check-for-package-updates',
        tooltip: 'Update Packages/Themes'
      });
    }

    toolBar.addSpacer();
  }

  if (atom.config.get('package-developer-toolbar.devTools') !== false) {

    let callback, tooltip;
    toolBar.addButton({
      icon: 'terminal',
      callback: 'window:toggle-dev-tools',
      tooltip: 'Toggle Developer Tools'
    });

    if (loadedPackages.includes('open-in-developer-mode')) {
      callback = 'open-in-developer-mode:toggle';
      if (atom.inDevMode()) {
        tooltip = 'Re-open file in normal mode';
      } else {
        tooltip = 'Re-open file in Dev Mode';
      }
    } else {
      callback = 'application:open-dev';
      tooltip = 'Open in Dev Mode';
    }

    toolBar.addButton({
      icon: 'code',
      callback,
      tooltip
    });

    if (loadedPackages.includes('timecop')) {
      toolBar.addButton({
        icon: 'clock',
        callback: 'timecop:view',
        tooltip: 'Timecop'
      });
    }

    if (loadedPackages.includes('deprecation-cop')) {
      toolBar.addButton({
        icon: 'alert',
        callback: 'deprecation-cop:view',
        tooltip: 'Deprecation Cop'
      });
    }

    toolBar.addButton({
      icon: 'eye',
      callback: 'window:run-package-specs',
      tooltip: 'Run Package Specs'
    });

    if (loadedPackages.includes('satisfy-dependencies')) {
      toolBar.addButton({
        icon: 'checklist',
        callback: 'satisfy-dependencies:all',
        tooltip: 'Satisfy Dependencies'
      });
    }

    if (loadedPackages.includes('local-storage')) {
      toolBar.addButton({
        icon: 'database',
        callback: 'local-storage:open-item',
        tooltip: 'Open localStorage'
      });
    }

    toolBar.addButton({
      icon: 'refresh',
      callback: 'window:reload',
      tooltip: 'Reload Window',
      iconset: 'ion'
    });

    return toolBar.addSpacer();
  }
}
