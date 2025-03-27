import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

// https://api.chucknorris.io/jokes/random

  title = 'ng-demo'

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.  }
  }

  getJoke() {
    console.log('Getting joke...')


    this.http.get<any>('https://api.chucknorris.io/jokes/random')
      .pipe(
        tap(() => {
            console.log('Ich bin hier 1!')
          }
        )
      )
      .subscribe(
        (response) => {
          console.log(response)
          console.log(response.value)

        }
      )
    console.log('Ich bin hier!')

  }
}
