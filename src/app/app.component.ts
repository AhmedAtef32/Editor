import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Editor } from 'primeng/editor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Editor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'editor';
  text: string | undefined;

  @ViewChild('el') editor!: ElementRef;

  click() {
    this.editor.nativeElement.innerHTML = this.text;
  }
}

