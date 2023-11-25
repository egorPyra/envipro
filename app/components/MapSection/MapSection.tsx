// Import MapSection component
import Map from './MapEachBall';
import MapGrid from './MapGrid'
import styles from './MapSection.module.css';


export default function MapSection() {
return (
  <>
    <section className={styles.MapContainer}>
      <div className={styles.MapBg}></div>
      <h1 className={styles.title}>Наши клиенты</h1>
      <p className={styles.subTitle}>сотни объектов, более чем в 25 регионах!</p>

      {/* Include the MapSection component here */}
      {/* <Map /> */}
      <MapGrid />
    </section>
  </>
);
}
