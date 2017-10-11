import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { TagListComponent } from './components/tag-list/tag-list.component';

export const AppRoutes = [
  { path: '', component: TagListComponent },
  { path: 'tagdetail/:id', component: TagDetailComponent },
];