import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonImg, IonList, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonImg, IonList, IonLabel, IonItem, IonInput]
})
export class Tab4Page  {

  constructor(private navCtrl: NavController) { }

  // Button click handlers
  handleFollowing() {
    // Implement your logic here for the Following button
    console.log("Following button clicked");
  }

  handleConnected() {
    // Implement your logic here for the Connected button
    console.log("Connected button clicked");
  }

  handleMessage() {
    // Implement your logic here for the Message button
    console.log("Message button clicked");
  }

  // List item click handler
  handleActivity() {
    // Implement your logic here for the Activities list item
    console.log("Activities item clicked");
  }

  handleConnect() {
    // Implement your logic here for the Activities list item
    console.log("Connections item clicked");
  }

  handleGroup() {
    // Implement your logic here for the Activities list item
    console.log("Groups item clicked");
  }

  handlePhoto() {
    // Implement your logic here for the Activities list item
    console.log("Photos item clicked");
  }

  handleForum() {
    // Implement your logic here for the Activities list item
    console.log("Forums item clicked");
  }

}
