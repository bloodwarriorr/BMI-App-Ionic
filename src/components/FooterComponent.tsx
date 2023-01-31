import {IonFooter,IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
const FooterComponent: React.FC = () => {
  return (
    <IonFooter className="ion-text-center">
      <IonToolbar>
        <small>Created By Kenar Ben Shitrit</small>
      </IonToolbar>
    </IonFooter>
  
  );
};
export default FooterComponent;