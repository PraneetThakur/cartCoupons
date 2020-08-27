import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  showLogOut=false
  constructor(private router:Router,private activeRoute:ActivatedRoute
   
  )
  {
    router.events.subscribe((val:any) => {
      if (event instanceof NavigationStart) {
      console.log('start',val.url)
      if(val.url=='/login' || val.url=='/registration' )
      {
        this.showLogOut=false
        console.log(val)
  
      }
      else
      {
        this.showLogOut=true
      }
        // Show loading indicator
    }

    // if (event instanceof NavigationEnd) {
    //     // Hide loading indicator
    //   console.log('end',val.url)
    //   if(val.url=='/login' || val.url=='/registration' )
    //   {
    //     this.showLogOut=false
    //     console.log(val)
  
    //   }
    //   else
    //   {
    //     this.showLogOut=true
    //   }
    // }
    if(val.url=='/login' || val.url=='/registration' )
    {
      this.showLogOut=false
      console.log(val.url)

    }
    else
    {
      this.showLogOut=true
    }
    });
   
    //  this.activeRoute.queryParams.subscribe(params => {
     
    // });
  }
  logout()
  {
  this.showLogOut=false
   this.router.navigate(['/login'])

  }
}
