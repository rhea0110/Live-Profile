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
        tabs4={"Practices"}
        tabs5={"Resume"}
        tabs7={"Trainings"}
        tabs6={"Awards"}
        tabs8={"Competitons"}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
