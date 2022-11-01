import "../styles/globals.css";
import "../styles/App.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="Body">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
