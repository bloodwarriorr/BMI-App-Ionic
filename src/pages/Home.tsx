import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/headerComponent';
import './Home.css';
const Home: React.FC = () => {
 
  return (
    <IonPage>
    <HeaderComponent/>
      <IonContent className='ion-padding'>
        <ExploreContainer />
      </IonContent>
      <FooterComponent/>
    </IonPage>
  );
};

export default Home;
