import { Component} from '@angular/core';


@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent {
  
  userName='';
   constructor() {

  }
  onClick(ev){

      this.userName ='';
  }

   

}
