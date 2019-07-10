import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('Saved to Clipboard!', 'Ok', {
      duration: 1000
    });
  }

  onCopyClipBoard(val: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (val));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.openSnackBar();
  }
}
