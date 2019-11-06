import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import React from 'react';

import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create an Idea</h1>
              <IonNote>Run daily for a week</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create an entry</h1>
              <IonNote>Keep your notes</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              7 Days
            </IonBadge>
          </IonItem>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick = {() => props.history.push('/new')}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
