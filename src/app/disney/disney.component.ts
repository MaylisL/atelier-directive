import { Component } from '@angular/core';
import { User } from 'src/models/user.models';
import { Video } from 'src/models/video.models';

@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.css']
})
export class DisneyComponent {
  subscriptionChosen: boolean = false;
  user: User = new User("Marc", true, [
    new Video("Community","https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2021/04/Community-1__w770.jpg",12, ["comedy", "sitcom", "us"]),
    new Video("Friends","https://images.rtl.fr/~c/2000v2000/rtl/www/1277842-les-acteurs-principaux-de-la-serie-friends.jpg", 24, ["comedy", "teenager", "thriller"])
  ])

  constructor() {

  }

  onPremium() {

    this.user.isVip = true
    this.subscriptionChosen = true;
  }

  onCheap() {
    this.user.isVip = false;
    this.subscriptionChosen = true;
  }

}

