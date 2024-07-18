import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParentWithRxjsComponent } from './components/parent-with-rxjs/parent-with-rxjs.component';
import { ChildWithRxjsComponent } from './components/child-with-rxjs/child-with-rxjs.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: '/mouse-tracking', pathMatch: 'full' },
  { path: 'mouse-tracking', component: ParentComponent },
  { path: 'mouse-tracking-rxjs', component: ParentWithRxjsComponent },
  { path: '**', redirectTo: '/mouse-tracking' },
];
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentWithRxjsComponent,
    ChildWithRxjsComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
