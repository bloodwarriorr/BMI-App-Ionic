import {
  IonGrid,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonAlert,
} from "@ionic/react";
import { useState, useRef } from "react";
import BmiResult from "./BmiResults";
import IonControl from "./InputControl";
import BmiControls from "./BmiControls";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [bmiScore, setBmiScore] = useState<number | null>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<"mkg" | "ftlbs">("mkg");
  const [bmiScoreType, setBmiScoreType] = useState("");

  const WeightInputRef = useRef<HTMLIonInputElement>(null);
  const HeightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = WeightInputRef.current!.value!;
    const enteredHeight = HeightInputRef.current!.value!;
    if (
      !enteredWeight ||
      !enteredHeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter a valid (non-negative) input number");
      return;
    }
    //consts for convert weight and height according to measure size
    const weightConversionFactor = calcUnits === "ftlbs" ? 2.2 : 1;
    const heightConversionFactor = calcUnits === "ftlbs" ? 3.28 : 1;

    const height = +enteredHeight / heightConversionFactor;
    const weight = +enteredWeight / weightConversionFactor;

    const bmi = weight / (height * height);
    handleBmiScore(bmi);
    setBmiScore(bmi);
  };

  const clearError = () => {
    setError("");
  };
  const handleBmiScore = (score: number) => {
    if (score < 18.5) {
      setBmiScoreType("Underweight");
    } else if (score > 18.5 && score < 25) {
      setBmiScoreType("Healthy Weight");
    } else if (score > 25 && score < 30) {
      setBmiScoreType("Overweight");
    } else {
      setBmiScoreType("Obesity");
    }
  };
  const resetInputs = () => {
    WeightInputRef.current!.value = "";
    HeightInputRef.current!.value = "";
    setBmiScore(null);
  };

  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnits(selectedValue);
  };
  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: () => clearError }]}
      />
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonControl
              selectedValue={calcUnits}
              onSelectValue={selectCalcUnitHandler}
            />
          </IonCol>
        </IonRow>
        <IonRow style={{'marginTop':10}}>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">
                Your Height ({calcUnits === "mkg" ? "meters" : "feet"})
              </IonLabel>
              <IonInput type="number" ref={HeightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow style={{'marginTop':10}}>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">
                Your Weight ({calcUnits === "mkg" ? "kg" : "lbs"})
              </IonLabel>
              <IonInput type="number" ref={WeightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
          <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
        {bmiScore && <BmiResult result={bmiScore} type={bmiScoreType} />}
      </IonGrid>
    </>
  );
};

export default ExploreContainer;
