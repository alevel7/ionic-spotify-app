/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Recently Played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy Roation',
      albums: heavyRotation
    },
    {
      title: 'Jump Back In',
      albums: jumpBackIn
    }
  ];

  opts ={
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freemode: true
  };

  constructor(private router: Router) {}
  dasherize(stringValue: string) {
    return stringValue.replace(/[A-Z]/g, function(char, index){
      return (index !== 0 ? '-': '') + char.toLowerCase();
    });
  }
  openAlbum(album){
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }
}
