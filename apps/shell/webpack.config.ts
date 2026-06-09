import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation({
  ...config,
  shared: (libraryName, shareConfig) => {
    // Ép tds-ui luôn chạy dạng singleton trên tất cả các remotes và host
    if (libraryName === 'tds-ui') {
      return {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      };
    }
    return shareConfig;
  },
}, { dts: false });
