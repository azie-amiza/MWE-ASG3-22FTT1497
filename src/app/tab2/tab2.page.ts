import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonSearchbar, IonSegment, IonSegmentButton, IonLabel]
})
export class Tab2Page {
  segmentModel: string = 'segment1';

  constructor() {}

  search(event: any) {
    console.log('search event:', event.target.value)
  }

  segmentChanged(event: any) {
    this.segmentModel = event.detail.value;
    console.log('Segment changed to', this.segmentModel);
  }

}

@NgModule({
  imports: [
    IonicModule.forRoot(),
    FormsModule
  ],
})
export class Tab2PageModule {
}

