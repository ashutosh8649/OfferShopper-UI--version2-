import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../services/authorization.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 89318376c1dfa01009a351c1832fcebf6b3a7f63
import { Location } from '@angular/common';
import { LoginService } from '../../../../services/login.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	providers:[ AuthorizationService ]
})

export class NavbarComponent implements OnInit {

	private login:boolean = false;
	private token:any;
	private userId: string;
	private user: string;
	private url: string;

	constructor(
		private router: Router,
		private authorizationService: AuthorizationService,
		private location:Location,
		private loginService: LoginService
		) {
		router.events.subscribe((data:any) => { this.url = data.url; });
	}


	ngOnInit() {
		this.isLogin();
	}

	isLogin(){
		this.loginService.isLoggedin.subscribe(status => {
			this.status = status;
			this.isLogin();
		});
		this.login = this.authorizationService.isLogin();
		this.getUserId();
	}

	logout(){
		this.authorizationService.logout();
		this.isLogin();
		this.loginService.logout();
	}

	getUserId() {
		this.authorizationService.getUserId().subscribe((res:any) =>{
			this.userId = (res.text().split(','))[2];
			this.user = (this.userId.split('@'))[0];
			console.log(this.user);
		}, (error) =>{
		})
	}

}
