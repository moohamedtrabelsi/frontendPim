import { Routes } from '@angular/router';

import { ExpertdashboardComponent } from '../expertdashboard/expertdashboard.component';
import { ProfileExpertComponent } from '../profile-expert/profile-expert.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { SkillsComponent } from '../skills/skills.component';

export const ExpertLayoutRoutes: Routes = [
    { path: 'expertashboard',    component: ExpertdashboardComponent },
    { path: 'profile-expert',   component: ProfileExpertComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'skills',          component: SkillsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
    
];