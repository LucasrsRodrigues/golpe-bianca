import { AppProps } from "next/dist/shared/lib/router/router";
import { MenuProvider } from "../hooks/Menu";

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}

export default MyApp
