import sections from "../assets/data";
import FeatureItem from "../Components/FeatureItem";
export default function Features() {
  return (
    <section className="back-black-2">
      <div className="container">
        {sections.features.map((value, i) => {
          return <FeatureItem key={i} feature={value} />;
        })}
      </div>
    </section>
  );
}
