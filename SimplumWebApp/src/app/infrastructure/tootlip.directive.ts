import { Directive, ElementRef, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { interval } from 'rxjs';
// import { clearInterval } from 'timers';

@Directive({
  selector: '[tooltip]',
  
})
export class TooltipDirective implements OnInit, OnDestroy {

  @Input() interval: number = 0;
  @Input() text: string = '';
  tooltip: HTMLDivElement;
  handle: any;

  constructor(private element: ElementRef) {
    
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.position = 'relative';
    this.tooltip = window.document.createElement('div');
    this.tooltip.style.backgroundColor = 'pink';
    this.tooltip.textContent = this.text;
    this.tooltip.style.display = 'none';
    this.tooltip.style.maxWidth = '200px';
    this.tooltip.style.padding = '2px';
    this.tooltip.style.position = 'absolute';
    this.tooltip.style.left = '100%';
    this.tooltip.style.top = '-100%';
    this.element.nativeElement.appendChild(this.tooltip);
  }

  ngOnDestroy(): void {
    
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    this.tooltip.style.left = e.clientX + 'px';
    if (this.interval == 0) {
      this.show();
    }
    else if (!this.handle) {
      this.handle = window.setTimeout(() => {
        this.show();
      }, this.interval);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hide();
    if (this.handle) {
      window.clearTimeout(this.handle);
      this.handle = null;
    }
  }

  show() {
    this.tooltip.style.display = 'block';
  }

  hide() {
    this.tooltip.style.display = 'none';
  }
}
