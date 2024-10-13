import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { timestamp } from 'rxjs';
import { MessageComponent } from './message/message.component';
import {SidebarComponent} from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MessageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isMaximized: boolean = false;
  maximizedId: number = 0;

  messages: any = []

  constructor() {
    for (let i = 0; i < 120; i++) {
      this.messages.push({
        id: i + 1,
        content: 'this is dummy content from ' + i,
        timestamp: new Date().toISOString()
      });
    }
  }

  maximizeClicked(id: number) {
    this.isMaximized = !this.isMaximized;

    if (this.isMaximized) {
      document.body.style.overflow = 'hidden';
      this.maximizedId = id;
    } else {
      document.body.style.overflow = 'auto';
      this.maximizedId = 0;
    }
  }

  ngOnInit(): void {


  }
}
