import { Component, OnInit } from '@angular/core';
import { JwtSecurityService } from 'src/app/services/jwt-security.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  

  constructor(private JwtSecurityService:JwtSecurityService) { }

  ngOnInit(): void {
    
  }

  public showToken(){
    this.JwtSecurityService.getSpecialToken(sessionStorage.getItem("token"))
    .subscribe((response) => {
      alert(response);
    })
  }

}
