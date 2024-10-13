import { Component } from '@angular/core';
import {TooltipConfig, TooltipModule} from "ngx-bootstrap/tooltip";
import {BsDropdownMenuDirective, BsDropdownModule} from "ngx-bootstrap/dropdown";
import {HoverMenuComponent} from "../hover-menu/hover-menu.component";

export function getIconConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'right',
    container: 'body',
    delay: 500
  });
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TooltipModule, BsDropdownModule, HoverMenuComponent],
  providers: [{ provide: TooltipConfig, useFactory: getIconConfig }, BsDropdownMenuDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
