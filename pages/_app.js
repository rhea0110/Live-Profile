import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar
        // image={"/rhea0110.png"}
        name={"Rhea Jain"}
        tabs1={"Home"}
        tabs2={"Internships"}
        tabs3={"Certificates"}
        tabs4={"Competitons"}
        tabs5={"Practices"}
        tabs6={"Awards"}
        tabs7={"Trainings"}
        tabs8={"Resume"}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
