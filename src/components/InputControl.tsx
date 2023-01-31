import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControl: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
    const inputChangeHandler=(event:CustomEvent) => {
        props.onSelectValue(event.detail.value);
    }
  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>M/Kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>Ft/Lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};
export default InputControl;
