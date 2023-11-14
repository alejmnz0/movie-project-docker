import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MaterialImportModule } from './modules/material-import.module';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FilterMoviesComponent } from './components/filter-movies/filter-movies.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { MovieItemSecondaryComponent } from './components/movie-item-secondary/movie-item-secondary.component';
import { GenreMovieListComponent } from './ui/genre-movie-list/genre-movie-list.component';
import { AuthApprovedComponent } from './components/auth-approved/auth-approved.component';

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
    PersonalListComponent,
    PageNotFoundComponent,
    FilterMoviesComponent,
    ProfileHeaderComponent,
    MovieItemSecondaryComponent,
    GenreMovieListComponent,
    AuthApprovedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    NgbCollapseModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
