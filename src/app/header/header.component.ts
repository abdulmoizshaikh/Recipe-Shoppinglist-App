import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['/header.component.css']
})

export class HeaderComponent {
    name = 'header';
    @Output() tabToggler = new EventEmitter<{ tabName: string }>();

    onSelectTab(tabName: string) {
        this.tabToggler.emit({ tabName });
    }
}
