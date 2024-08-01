import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';
import { PostService } from './services/post.service';
import { provideHttpClient } from '@angular/common/http';
import { FollowerService } from './services/follower.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), CoursesService, EmailService, PostService,FollowerService]
};
