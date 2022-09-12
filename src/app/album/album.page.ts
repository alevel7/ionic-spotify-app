import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums';
@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data;
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const title = this.activatedRouter.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];
  }
  dasherize(stringValue: string) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return stringValue.replace(/[A-Z]/g, function(char, index){
      return (index !== 0 ? '-': '') + char.toLowerCase();
    });
  }
}
