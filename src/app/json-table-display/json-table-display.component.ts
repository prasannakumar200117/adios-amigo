import { Component } from '@angular/core';
import UsersJson from '../../assets/users.json'
interface USERS {
  id:number;
  username:string;
  email:string;
  address:string;
  phoneNumber:string;
  city:string;
}
@Component({
  selector: 'app-json-table-display',
  templateUrl: './json-table-display.component.html',
  styleUrl: './json-table-display.component.css'
})
export class JsonTableDisplayComponent {
  Users : USERS[]= UsersJson;

}
