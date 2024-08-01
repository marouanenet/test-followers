import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];
  post: Post = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  }
  editMode = false;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll<Post>().subscribe(response => {
      this.posts = response;
    }, error => {
      console.log(error);
    })
  }


  createPost() {
    this.postService.create(this.post).subscribe(response => {
      this.post.id = response.id;
      this.posts.unshift(this.post);
      this.post = {
        userId: 0,
        id: 0,
        title: "",
        body: ""
      }
    }, (error: AppError) => {
      if (error instanceof BadRequestError) {
        alert("merci de vérifier vos informations")
      } else {
        alert("Erreur inattendue");
        console.log(error);
      }
    });
  }

  editPost(post: Post) {
    this.post = post;
    this.editMode = true;
  }

  updatePost() {
    this.postService.update(this.post).subscribe(response => {
      this.post = {
        userId: 0,
        id: 0,
        title: "",
        body: ""
      }
      this.editMode = false;
    }, error => {
      alert("Erreur inattendue");
      console.log(error);
    });
  }

  deletePost(post: Post) {
    this.postService.delete(post).subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert("ce post est déjà supprimé!!");
      } else {
        alert("Erreur inattendue");
        console.log(error);
      }
    });
  }

}
