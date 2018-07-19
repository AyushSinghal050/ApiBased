import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from './app.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    Data = [] ;
    showData = false;
    userString: string;
    user: number ;

    constructor(private http: Http, private appService: AppService) {}



   ngOnInit() {
   this.displayData();
    }

    displayData() {
        this.appService.getData()
        .subscribe(
            (response: Response) => {
                const data = response.json();
                this.Data = data.slice(0);
                this.showData = true;
            },
            (error) => console.log(error)
        );
    }

    changeUser(userNumber: number) {
        this.user = userNumber;
        this.userString = 'User ' + this.user;
    }

    filterData(userNumber: number) {
        return this.Data.filter(x => x.userId === userNumber);
    }
    onShow(i: number) {
        console.log(i, ' Was clicked');
    }
}


