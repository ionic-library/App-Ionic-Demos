import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { BlogPostPage }					from './blog-post';

@NgModule({
  declarations: [
    BlogPostPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPostPage),
  ],
  exports: [
    BlogPostPage
  ]
})

export class BlogPostPageModule { }
