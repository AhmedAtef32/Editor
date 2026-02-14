import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,EditorModule],
  templateUrl: './app.component.html',
})
export class AppComponent  {
 text: string | undefined;
 @ViewChild('editorContainer') editorContainer!: ElementRef;

 save(){
   this.editorContainer.nativeElement.innerHTML = this.text
   console.log(this.editorContainer.nativeElement.innerHTML);

 }
}
