import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieHorizontalListComponent } from './components/movie-horizontal-list/movie-horizontal-list.component';
import { ProgramsHorizontalListComponent } from './components/programs-horizontal-list/programs-horizontal-list.component';
import { MoviesVerticalListComponent } from './components/movies-vertical-list/movies-vertical-list.component';
import { ProgramsVerticalListComponent } from './components/programs-vertical-list/programs-vertical-list.component';
import { ActorsVerticalListComponent } from './components/actors-vertical-list/actors-vertical-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WatchlistsNavbarComponent } from './components/watchlists-navbar/watchlists-navbar.component';
import { VideosListHorizontalComponent } from './components/videos-list-horizontal/videos-list-horizontal.component';
import { ImagesListHorizontalComponent } from './components/images-list-horizontal/images-list-horizontal.component';
import { LastSeasonProgramComponent } from './components/last-season-program/last-season-program.component';
import { FilterMoviesComponent } from './components/filter-movies/filter-movies.component';
import { FilterProgramsComponent } from './components/filter-programs/filter-programs.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ProgramItemComponent } from './components/program-item/program-item.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PopularMoviesComponent } from './ui/popular-movies/popular-movies.component';
import { ComingSoonMoviesComponent } from './ui/coming-soon-movies/coming-soon-movies.component';
import { BillboardMoviesComponent } from './ui/billboard-movies/billboard-movies.component';
import { PopularProgramsComponent } from './ui/popular-programs/popular-programs.component';
import { TodayProgramsComponent } from './ui/today-programs/today-programs.component';
import { BestRatedProgramsComponent } from './ui/best-rated-programs/best-rated-programs.component';
import { DetailsMovieComponent } from './ui/details-movie/details-movie.component';
import { DetailsActorComponent } from './ui/details-actor/details-actor.component';
import { DetailsProgramComponent } from './ui/details-program/details-program.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { PersonalListComponent } from './ui/personal-list/personal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHorizontalListComponent,
    ProgramsHorizontalListComponent,
    MoviesVerticalListComponent,
    ProgramsVerticalListComponent,
    ActorsVerticalListComponent,
    NavbarComponent,
    WatchlistsNavbarComponent,
    VideosListHorizontalComponent,
    ImagesListHorizontalComponent,
    LastSeasonProgramComponent,
    FilterMoviesComponent,
    FilterProgramsComponent,
    MovieItemComponent,
    ProgramItemComponent,
    HomePageComponent,
    PopularMoviesComponent,
    ComingSoonMoviesComponent,
    BillboardMoviesComponent,
    PopularProgramsComponent,
    TodayProgramsComponent,
    BestRatedProgramsComponent,
    DetailsMovieComponent,
    DetailsActorComponent,
    DetailsProgramComponent,
    ProfileComponent,
    PersonalListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
