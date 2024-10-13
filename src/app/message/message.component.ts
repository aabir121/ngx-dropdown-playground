import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BsDropdownDirective, BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BehaviorSubject} from 'rxjs';
import {HoverMenuComponent} from '../hover-menu/hover-menu.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, BsDropdownModule, HoverMenuComponent, DragDropModule],
  providers: [BsDropdownDirective],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {

  @Input() msg: any;
  @Input() maximizedId: number = 0;
  @Input() isMaximized: boolean = false;

  @ViewChild(BsDropdownDirective, {static: false}) dropdown!: BsDropdownDirective;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  @Output()
  maximizeEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private readonly communicationService: CommunicationService) {

  }


  ngOnInit(): void {
  }

  toggleMaximize() {
    this.maximizeEmitter.emit(this.msg.id);

    // if (!this.isMaximized) {
    setTimeout(() => {
      // this.showMenu();
    }, 100);
    // }
  }

  onShow() {
    this.loading$.next(true);

    setTimeout(() => {
      this.loading$.next(false);
    }, 3000);
  }

  onHide() {

  }

  editMessage() {
    alert('Edit message: ' + this.msg.content);
  }

  deleteMessage() {
    alert('Delete message: ' + this.msg.content);
  }

  dragStarted(msgId: number) {
    this.communicationService.broadCast('dragStarted', msgId);
  }

  dragEnded(msgId: number) {
    this.communicationService.broadCast('dragEnded', msgId);
  }
}
