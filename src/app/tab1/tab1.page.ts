import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonThumbnail, IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NavController } from '@ionic/angular';
// import { IonSearchbarCustomEvent } from '@ionic/core';
// import { IonCardSubtitle } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonThumbnail, IonLabel, IonSegment, IonSegmentButton],
})
export class Tab1Page {
  items: any[] = [
    { name: 'Item 1', description: 'Description of item 1' },
    { name: 'Item 2', description: 'Description of item 2' },
    { name: 'Item 3', description: 'Description of item 3' },
    { name: 'Item 4', description: 'Description of item 4' },
    { name: 'Item 5', description: 'Description of item 5' },
    { name: 'Item 6', description: 'Description of item 6' },
    { name: 'Item 7', description: 'Description of item 7' },
    // { name: 'Item 8', description: 'Description of item 8' },
    // { name: 'Item 9', description: 'Description of item 9' },
    // { name: 'Item 10', description: 'Description of item 10' },
    // { name: 'Item 11', description: 'Description of item 11' },
    
  ];

  filteredItems: any[] = this.items;

  segmentModel: string = 'segment1';

  constructor(private navCtrl: NavController) {}

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase(); // Get the search term entered by the user

    // Filter the items based on the search term
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  }

  itemClicked(itemName: any) {
    // Handle the click event here
    console.log('Item clicked:', itemName);

    // For example, you can navigate to a details page with the item name as a parameter
    this.navCtrl.navigateForward(`/details/${itemName}`);
  }

  segmentChanged(event: any) {
    this.segmentModel = event.detail.value;
    console.log('Segment changed to', this.segmentModel);
  }

}
