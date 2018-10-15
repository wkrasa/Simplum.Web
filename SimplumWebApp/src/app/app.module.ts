import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule, NgbAlertModule, NgbDatepicker, NgbButtonsModule, NgbCheckBox, NgbRadioGroup  } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component/app.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component/pagenotfound.component';
import { SowsModule } from './piglets-producer/sows.module';
import { AppRoutingModule } from './app-routing.module';
import { InfrastructureModule, PopupService, PopupComponent, ModalDialogService } from './infrastructure/infrastructure.module';

/*

- mock backend
- login/auth
- roles
- module per functionality
-- routing component
- router guards
- http interceptors (redirect to login)
- animations
- testing
- sows functionality (crud)
-- sows list: grid, datails on focus, more details on click
- sgc funtionality
-- sgc list
--- sgc details
--- sgc reports

#==========
- run loin/register tutorial from:
 http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial
#==========
  AUTO CHANGES DETECT
Updating all NuGet packages (I was running things in Visual Studio).
Updating all packages via ng update --all (that is if you are lucky), I had to update the core first and then find my way trough the rest.
Then I do a ng build --prod because some issues are only discovered then.
Then an ng serve (I think this is not necessary)
Delete the files from the dist folder

#==========
- create form (with list of subitems)
- create web api controller
- add validation on both sides
- create async validator for sow unique name
- add date inout control (sow birth date)
#==========
- OAuth (keycloak)
#==========
- use docker option in VS during project creation
#==========
- create popup component
#==========
+ create toggle component (https://blog.angularindepth.com/build-a-toggle-component-6e8f44889c2c)
#==========
- @ViewChild and @ViewChildren
- other queries
#==========
- play with ElementRef
#==========
- add modal service (https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1)
#==========
check services:
 templateRef: TemplateRef<DelayContext>,
     viewContainerRef: ViewContainerRef
#==========
- Debugger for Chrome extension
#==========
-- play with ElementRef service:
--- add some child elements
--- add styles
--- create custom directive setting backgroud and tooltip
--- play with events (jquery)
#==========
- edit sow via popup and refresh it on grid
#==========
- dialog box service with bootstrap
#==========
- create observable with interval, wrapping other observable
#==========
- sows crud
- sow edit: new model for editing
-- sow editing via router (pass id in url)
#==========
+ sow details component
+ components communication
#==========
- JQuery for angular
#==========
- backend
#==========
--- bootstrap styles (https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a)
--- search for nice styles on the internet
--- bootstrap controls for angular
#==========
--- app layout (header, footer, content)
#==========
--- services 
---- sows service
---- message box service
#==========
--- create form
#==========
--- create grid for sows
---- details on focus
#==========
--- authorization (cookie)
---- http interceptor (401 redirect)
---- route guards
#=========
--- animations
#=========
--- boundles
#=========
--- lint (for styles)
#========
--- create backend project
---- WebApi
---- .Net Core
#==========
- tranlations
#==========
- setup for production enviroment
#==========
- CORS for web api
#==========
*/

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SowsModule,
    AppRoutingModule,
    InfrastructureModule,
    NgbModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent],
  providers: [
    PopupService,
    ModalDialogService],
  bootstrap: [
    AppComponent],
  entryComponents: [
    PopupComponent],
})
export class AppModule { }
