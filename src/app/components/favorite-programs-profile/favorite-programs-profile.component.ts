import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-favorite-programs-profile',
  templateUrl: './favorite-programs-profile.component.html',
  styleUrls: ['./favorite-programs-profile.component.css']
})
export class FavoriteProgramsProfileComponent implements OnInit {


  programFavoriteList: Program[] = [];

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.programFavoriteList = resp.results;
    })
  }
}
