import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  // @ts-ignore
  album: Album;
  // @ts-ignore
  loaded: boolean;
  photos: Photo[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.getAlbumPhotos();
  }

  getAlbumPhotos(): void {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.albumService.getAlbumPhotos(id).subscribe((photo) => {
        this.photos = photo;
        this.loaded = true;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
