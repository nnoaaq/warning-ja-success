import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warning-ja-success';
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
}
