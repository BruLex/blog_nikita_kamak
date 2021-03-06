import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MapComponent} from "./map/map.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {CoursesComponent} from "./courses/courses.component";
import {LessonComponent} from "./lesson/lesson.component";
import {CourseComponent} from "./course/course.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'lesson/:content_id', component: LessonComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course/:content_id', component: CourseComponent},
  {path: 'map', component: MapComponent},
  {path: '', component: MainComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
