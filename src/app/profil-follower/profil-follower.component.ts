import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-follower',
  standalone: true,
  imports: [],
  templateUrl: './profil-follower.component.html',
  styleUrl: './profil-follower.component.css'
})
export class ProfilFollowerComponent implements OnInit {

  id: number | null = null;
  username: string | null = null;
  page: number | null = null;

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    // to get paramMap we can use this method 
    /*this.route.paramMap.subscribe(params => {
      const idParam = params.get("id");
      this.id = idParam !== null ? +idParam : null;
      this.username = params.get("username");
    })*/
    // or with snapshot
    const idParam = this.route.snapshot.paramMap.get("id");
    this.id = idParam !== null ? +idParam : null;
    this.username = this.route.snapshot.paramMap.get("username");

    //Same for queryParamMap
    /*this.route.queryParamMap.subscribe(params => {
      console.log(params.get("type"));
    })*/
    const pageNumber = this.route.snapshot.queryParamMap.get("page");
    this.page = pageNumber !== null ? +pageNumber : null;
    console.log(this.route.snapshot.queryParamMap.get("type"));
  }

}
