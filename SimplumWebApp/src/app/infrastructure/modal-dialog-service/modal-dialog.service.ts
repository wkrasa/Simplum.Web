import { Directive, ElementRef, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, Component } from '@angular/core';
//import { Type } from '../type';

import { Observable } from 'rxjs';

@Injectable()
export class ModalDialogService{

  private _div: HTMLDivElement | null  = null;
  private _componentRef: any;
  
  constructor(private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  show(component: any, config?: any) {
    if (this._div) {
      throw new Error('There can be only one modal at a time!'); 
    }
    this.createModalWrapper(); 
    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this._componentRef = factory.create(this.injector, [], this._div);
    if (config) {
      this.attachConfig(config, this._componentRef);
    }

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(this._componentRef.hostView);
  }

  isShown() {
    return this._div != null;
  }

  getComponentRef<T>() {
    console.dir(this._componentRef);
    return this._componentRef.instance as T;
  }

  close() {
    if (this._div == null) { return; }
    document.body.removeChild(this._div);
    this.applicationRef.detachView(this._componentRef.hostView);
    this._div = null;
  }

  private createModalWrapper(): void {
    this._div = document.createElement('div');
    this._div.classList.add('custom-modal-service');
    document.body.appendChild(this._div);
  }

  private attachConfig(config: any, componentRef: any) {
    let inputs = config.inputs;
    let outputs = config.outputs;
    for (var key in inputs) {
      componentRef.instance[key] = inputs[key];
    }
    for (var key in outputs) {
      componentRef.instance[key] = outputs[key];
    }
  }
}
