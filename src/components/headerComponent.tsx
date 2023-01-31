import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
const HeaderComponent: React.FC = (props) => {
  return (
    <IonHeader className="ion-text-center">
      <IonToolbar color="primary">
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default HeaderComponent;
