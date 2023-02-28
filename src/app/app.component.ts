import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dr-dobrean-noemi';

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this._matIconRegistry.addSvgIcon(
      "email",
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/svg/email-round-icon.svg")
    );
    this._matIconRegistry.addSvgIcon(
      "phone",
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/svg/contact-icon.svg")
    );
    this._matIconRegistry.addSvgIcon(
      "location",
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/svg/location-target-icon.svg")
    );
  }
}
