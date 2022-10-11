import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n';

  date = Date.now();
  text = $localize `when in code, must use backticks`;


  pluralMapping = { 'schmutz': {'=0': 'no schmutz', '=1': 'one schmutz', 'other': '# Schmutzes'}};



  numberOfSchmutz = 0;

  oneSchmutz = 1;
  noSchmutz = 0;
  allTheSchmutz = 15;
}


