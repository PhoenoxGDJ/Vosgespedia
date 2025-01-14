import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { AnimalComponent } from './Stream/animal/animal.component';
import { TracesComponent } from './pages/traces/traces.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleanimalComponent } from './pages/singleanimal/singleanimal.component';
import { GenreListComponent } from './pages/genre-list/genre-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'genres', component: GenreListComponent},

    { path: 'categories', component: CategoryListComponent},

    { path: 'login', component: LoginComponent },
    
    { path: 'singleanimal', component: AnimalComponent},

    { path: 'animals', component: AnimalListComponent },

    { path: 'traces', component: TracesComponent},

    { path: 'animalsolo', component: SingleanimalComponent},
    
    { path: '**', component: HomeComponent },

];
