import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { AnimalComponent } from './Stream/animal/animal.component';
import { TracesComponent } from './pages/traces/traces.component';
import { LoginComponent } from './pages/login/login.component';
import { GenreListComponent } from './pages/genre-list/genre-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'genres', component: GenreListComponent},

    { path: 'genre/:arg', component: AnimalListComponent},

    { path: 'categories', component: CategoryListComponent},

    { path: 'login', component: LoginComponent },

    { path: 'animals/:arg', component: AnimalComponent},

    { path: 'traces/:arg', component: TracesComponent},
    
    { path: '**', component: HomeComponent },

];

    
