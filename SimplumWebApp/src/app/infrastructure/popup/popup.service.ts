import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
// import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';


@Injectable()
export class PopupService {
  constructor(private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  show(message: string) {
    // Create element
    const popup = document.createElement('popup-component2');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      console.log('removing popup');
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }
}
