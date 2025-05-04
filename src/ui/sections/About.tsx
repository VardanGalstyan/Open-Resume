import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <section className="h-fit inner-section">
      <SectionTitle
        title="About me"
        url="https://img.icons8.com/ios-filled/60/252525/user.png"
      />
      <p className="text-secondary text-sm">
        Summarise your career profile here lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean
        massa. Cum sociis natoque penatibus et magnis dis parturient montes.
      </p>
    </section>
  );
};
export default About;
