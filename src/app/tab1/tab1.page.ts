import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonThumbnail, IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NavController } from '@ionic/angular';
import { image } from 'ionicons/icons';
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

  //Array for the animals
  items: any[] = [
    {
      name: 'Siamese Cat',
      description: 'The Siamese cat is a captivating breed with its sleek, slender body adorned with striking color points and mesmerizing blue eyes. Known for their vocal nature, they express themselves with melodious voices, earning the affectionate nickname "Meezer."',
      image: 'assets/images/siamesecat-bg.png'
    },

    {
      name: 'Golden Retriever',
      description: 'The Golden Retriever is a beloved and popular dog breed known for its friendly disposition, intelligence, and stunning golden coat.',
      image: 'assets/images/goldenretriever-bg.png'
    },

    {
      name: 'Holland Lop Rabbit',
      description: 'The Holland Lop rabbit is a charming and popular breed cherished for its adorable appearance and sweet temperament. Recognized by its distinctive droopy ears and compact size, this small breed captivates with its endearing facial expression and soft fur.',
      image: 'assets/images/hollandloprabbit-bg.png'
    },

    {
      name: 'British Shorthair Cat',
      description: 'The British Shorthair cat is a beloved breed known for its sturdy build, dense plush coat, and round face adorned with expressive eyes. Originating from England, these cats have a rich history and are often associated with strength and resilience.',
      image: 'assets/images/britishshorthair-bg.png'
    },

    {
      name: 'Maine Coon Cat',
      description: 'The Maine Coon cat is a majestic and beloved breed characterized by its large size, tufted ears, bushy tail, and tufted paws. Hailing from the rugged state of Maine in the United States, these cats are often referred to as "gentle giants" due to their impressive stature and affectionate temperament.',
      image: 'assets/images/mainecoon-bg.png'
    },
    
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


