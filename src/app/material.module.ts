import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatProgressBarModule,
  ]
})

export class MaterialModule {
}
