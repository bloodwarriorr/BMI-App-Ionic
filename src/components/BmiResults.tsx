import { IonCardContent, IonCol, IonRow, IonText } from "@ionic/react";
import React from "react";

const BmiResult: React.FC<{ result: number; type: string }> = (props) => {
  return (
    <IonRow style={{'marginTop':10}}>
      <IonCol>
        <IonCardContent
          style={{
            backgroundColor:
              props.type === "Healthy Weight"
                ? "#2dd36f"
                : props.type === "Underweight"
                ? "#ffc409"
                : "#eb445a",
          }}
          className="ion-text-center"
        >
          <h4>Your Body-Mass-Index</h4>
          <h3> {props.result.toFixed(2)}</h3>
          <h4>{props.type}</h4>
        </IonCardContent>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
