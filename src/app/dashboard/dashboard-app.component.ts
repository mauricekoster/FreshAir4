import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '@/_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-app.component.html',
  styleUrls: ['./dashboard-app.component.scss']
})
export class DashboardAppComponent implements OnInit {
  compact_view: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthenticationService,
              private router: Router) {
  }


  ngOnInit() {
    this.compact_view = true;
  }

  showInProgress() {
  }

  selectCompactList() {
    this.compact_view = true;
  }

  selectDetailList() {
    this.compact_view = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
