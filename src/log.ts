import meta from '../package.json';
import DeveloperConsole from '@atxm/developer-console';

export default new DeveloperConsole(meta.name, {
  backgroundColor: 'gray'
});
