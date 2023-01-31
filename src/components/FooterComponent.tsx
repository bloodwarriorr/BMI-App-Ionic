import {IonFooter,IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
const FooterComponent: React.FC = () => {
  return (
    <IonFooter className="ion-text-center">
      <IonToolbar>
        <IonTitle>Created By Kenar Ben Shitrit</IonTitle>
      </IonToolbar>
    </IonFooter>
  
  );
};
export default FooterComponent;