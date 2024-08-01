import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { Follower } from '../models/follower.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'followers',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent implements OnInit {
  followers: Follower[] = [];

  constructor(private followerService: FollowerService) {
  }

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers() {
    this.followerService.getAll<Follower>().subscribe(response => {
      this.followers = response;
    }, error => {
      console.log(error);
    })
  }

}
