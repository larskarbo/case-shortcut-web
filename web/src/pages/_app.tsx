import PlausibleProvider from "next-plausible";
import "../tailwind.css"
import "../styles.css"
import "./welcomescreen.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="caseshortcut.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
