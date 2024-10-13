import { CommonModule } from '@angular/common';
import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-hover-menu',
  standalone: true,
  imports: [BsDropdownModule, CommonModule],
  providers: [BsDropdownDirective],
  templateUrl: './hover-menu.component.html',
  styleUrl: './hover-menu.component.scss'
})
export class HoverMenuComponent implements OnInit{
  @ViewChild(BsDropdownDirective, { static: false }) dropdown!: BsDropdownDirective;

  @Input() customClass: string = '';
  @Input() customNgClass: any = {};

  @Input() placement: string = 'top right';
  @Input() actAsMenu: boolean = false;
  @Input() container: string = 'body';
  @Input() menuClass: string = '';


  @Output()
  onShow: EventEmitter<void> = new EventEmitter();
  @Output()
  onHide: EventEmitter<void> = new EventEmitter();

  hideTimeout: any;
  isMenuOpen: boolean = false;
  resizeObserver: ResizeObserver;
  disabled: boolean = false;

  mouseX: number = 0;
  mouseY: number = 0;

  constructor(private readonly el : ElementRef,
              private readonly communicationService: CommunicationService) {
    this.resizeObserver = new ResizeObserver(()=>{
      if (this.checkMouseOver()) {
        this.showMenu();
      } else {
        this.hideMenu(false);
      }
    });
  }

  ngOnInit(): void {
    this.resizeObserver.observe(this.el.nativeElement);

    this.communicationService.listen('dragStarted')
      .subscribe((msgId: number)=>{
        // this.disabled = true;
        this.hideMenu(false);
      });

    this.communicationService.listen('dragEnded')
      .subscribe((msgId: number)=>{
        // this.disabled = false;
        if (this.checkMouseOver()) {
          this.showMenu();
        } else {
          this.hideMenu(false);
        }
      });
  }

  private checkMouseOver(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return this.mouseX >= rect.left &&
      this.mouseX <= rect.right &&
      this.mouseY >= rect.top &&
      this.mouseY <= rect.bottom;
  }

  showMenu(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }

    this.isMenuOpen = true;
    this.onShow.emit();
  }

  hideMenu(withDelay: boolean = true): void {
    const hide = (): void => {
      this.isMenuOpen = false;
      this.onHide.emit();
    };

    if (withDelay) {
      this.hideTimeout = setTimeout(hide, 100);
    } else {
      hide();
    }
  }


  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
