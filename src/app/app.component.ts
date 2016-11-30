import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  urls = [
    'https://pbs.twimg.com/profile_images/619573624903761920/EGZ2I6wG.jpg',
    'https://static-s.aa-cdn.net/img/gp/20600002144900/QcM5ze2mGK0frV4cbdL7otLHts8p_RoC-N2mggz7M6Jv36vZN3B9Y3OmFvJwwLHuUyDc=w300?v=1',
    'https://pbs.twimg.com/profile_images/632658152505364480/txMFRoCf.jpg',
  ];
}
