import React from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonNote
  } from '@ionic/react';


  const Item: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>A new Item</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonNote>Keep your notes</IonNote>
        </IonContent>
      </IonPage>
    );
  };
  export default Item;