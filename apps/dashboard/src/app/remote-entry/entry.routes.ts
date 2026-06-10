import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { DashboardLayoutComponent } from '../layout/layout.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [{ path: '', component: RemoteEntryComponent }],
  },
];
