import { NgModule } from '@angular/core';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './ui/popular-movies/popular-movies.component';
import { ComingSoonMoviesComponent } from './ui/coming-soon-movies/coming-soon-movies.component';
import { BillboardMoviesComponent } from './ui/billboard-movies/billboard-movies.component';
import { PopularProgramsComponent } from './ui/popular-programs/popular-programs.component';
import { TodayProgramsComponent } from './ui/today-programs/today-programs.component';
import { BestRatedProgramsComponent } from './ui/best-rated-programs/best-rated-programs.component';
import { DetailsMovieComponent } from './ui/details-movie/details-movie.component';
import { DetailsActorComponent } from './ui/details-actor/details-actor.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { GenreMovieListComponent } from './ui/genre-movie-list/genre-movie-list.component';
import { AuthApprovedComponent } from './components/auth-approved/auth-approved.component';
import { DetailsProgramComponent } from './ui/details-program/details-program.component';
import { PageFavouriteMoviesComponent } from './ui/page-favourite-movies/page-favourite-movies.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'peliculas/popular', component: PopularMoviesComponent },
    { path: 'peliculas/coming-soon', component: ComingSoonMoviesComponent },
    { path: 'peliculas/en-cartelera', component: BillboardMoviesComponent },
    { path: 'programas/popular', component: PopularProgramsComponent },
    { path: 'programas/emision-hoy', component: TodayProgramsComponent },
    { path: 'programas/mejor-valorados', component: BestRatedProgramsComponent },
    { path: 'pelicula/:id', component: DetailsMovieComponent },
    { path: 'programa/:id', component: DetailsProgramComponent },
    { path: 'actor/:id', component: DetailsActorComponent },
    { path: 'perfil', component: ProfileComponent },
    { path: 'genre/:id', component: GenreMovieListComponent },
    { path: 'approved', component: AuthApprovedComponent },
    { path: 'perfil/movies-favourites', component: PageFavouriteMoviesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }