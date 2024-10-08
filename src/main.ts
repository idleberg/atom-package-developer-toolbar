import { getConfig } from './config';
import { install } from 'atom-package-deps';
import identify from '@atxm/identify';
import Logger from './log';
import titleMode from '@atxm/title-mode';

// Variables
let toolBar;

// Exports
export { configSchema as config } from './config';

export async function activate(): Promise<void> {
	Logger.log('Activating package');

	install('package-developer-toolbar');

	if (getConfig('enableIdentify') === true) {
		identify();
	}

	if (getConfig('enableTitleMode') === true) {
		titleMode();
	}
}

export function deactivate(): void {
	Logger.log('Deactivating package');

	if (toolBar) {
		toolBar.removeItems();
		toolBar = null;
	}
}

export function consumeToolBar(getToolBar: (name: string) => any): void {
	Logger.log('Consuming tool-bar service');

	toolBar = getToolBar('developer-tool-bar');

	const loadedPackages: string[] = atom.packages.getLoadedPackages().map((pkg) => pkg.name);

	if (loadedPackages.includes('open-package') && getConfig('generatorTools') !== false) {
		toolBar.addButton({
			icon: 'auto-fix',
			callback: 'package-generator:generate-package',
			tooltip: 'Generate Package',
			iconset: 'mdi',
		});

		toolBar.addButton({
			icon: 'brush',
			callback: 'package-generator:generate-syntax-theme',
			tooltip: 'Generate Syntax Theme',
			iconset: 'mdi',
		});

		toolBar.addButton({
			icon: 'folder-plus',
			callback: 'open-package:toggle',
			tooltip: 'Open Package',
			iconset: 'mdi',
		});
	}

	toolBar.addSpacer();

	if (loadedPackages.includes('browse') && getConfig('browseTools') !== false) {
		toolBar.addButton({
			icon: 'atom',
			callback: 'browse:configuration-folder',
			tooltip: 'Open Configuration Folder',
			iconset: 'mdi',
		});

		toolBar.addButton({
			icon: 'dropbox',
			callback: 'browse:packages-folder',
			tooltip: 'Open Packages Folder',
			iconset: 'mdi',
		});

		toolBar.addButton({
			icon: 'folder-move',
			callback: 'browse:project-folders',
			tooltip: 'Open Project Folder(s)',
			iconset: 'mdi',
		});

		toolBar.addButton({
			icon: 'file-move',
			callback: 'browse:reveal-file',
			tooltip: 'Reveal File',
			iconset: 'mdi',
		});
	}

	toolBar.addSpacer();

	if (getConfig('settings') !== false) {
		toolBar.addButton({
			icon: 'tune',
			callback: 'application:show-settings',
			tooltip: 'Show Settings',
			iconset: 'mdi',
		});

		toolBar.addButton({
			icon: 'wrench',
			callback: 'application:open-your-config',
			tooltip: 'Open Your Config',
			iconset: 'mdi',
		});

		if (loadedPackages.includes('settings-view')) {
			toolBar.addButton({
				icon: 'plus',
				callback: 'settings-view:install-packages-and-themes',
				tooltip: 'Install Packages/Themes',
				iconset: 'mdi',
			});

			toolBar.addButton({
				icon: 'cloud-download',
				callback: 'settings-view:check-for-package-updates',
				tooltip: 'Update Packages/Themes',
				iconset: 'mdi',
			});
		}

		toolBar.addSpacer();
	}

	if (getConfig('devTools') !== false) {
		toolBar.addButton({
			icon: 'console',
			callback: 'window:toggle-dev-tools',
			tooltip: 'Toggle Developer Tools',
			iconset: 'mdi',
		});

		if (loadedPackages.includes('open-in-developer-mode')) {
			toolBar.addButton({
				icon: 'xml',
				callback: 'open-in-developer-mode:toggle',
				tooltip: atom.inDevMode() ? 'Re-open file in normal mode' : 'Re-open file in Dev Mode',
				iconset: 'mdi',
			});
		} else {
			toolBar.addButton({
				icon: 'xml',
				callback: 'application:open-dev',
				tooltip: 'Open in Dev Mode',
				iconset: 'mdi',
			});
		}

		if (loadedPackages.includes('timecop') || loadedPackages.includes('timecop-2')) {
			toolBar.addButton({
				icon: 'av-timer',
				callback: loadedPackages.includes('timecop-2') ? 'timecop-2:view' : 'timecop:view',
				tooltip: 'Timecop',
				iconset: 'mdi',
			});
		}

		if (loadedPackages.includes('deprecation-cop')) {
			toolBar.addButton({
				icon: 'alert',
				callback: 'deprecation-cop:view',
				tooltip: 'Deprecation Cop',
				iconset: 'mdi',
			});
		}

		toolBar.addButton({
			icon: 'test-tube',
			callback: 'window:run-package-specs',
			tooltip: 'Run Package Specs',
			iconset: 'mdi',
		});

		if (loadedPackages.includes('package-control') || loadedPackages.includes('satisfy-dependencies')) {
			toolBar.addButton({
				icon: 'clipboard-check-outline',
				callback: loadedPackages.includes('package-control')
					? 'package-control:satisfy-dependencies'
					: 'satisfy-dependencies:all',
				tooltip: 'Satisfy Dependencies',
				iconset: 'mdi',
			});
		}

		if (loadedPackages.includes('local-storage')) {
			toolBar.addButton({
				icon: 'database',
				callback: 'local-storage:open-item',
				tooltip: 'Open localStorage',
				iconset: 'mdi',
			});
		}

		toolBar.addButton({
			icon: 'reload',
			callback: 'window:reload',
			tooltip: 'Reload Window',
			iconset: 'mdi',
		});

		return toolBar.addSpacer();
	}
}
