import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@components/navigation/navBar";
import "@fontsource/roboto";
import "@styles/document.css";
import Theme from "@themes/theme";
import type { AppProps } from "next/app";
import Head from "next/dist/shared/lib/head";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Portfolio | Dev Ryan</title>
			</Head>
			<ChakraProvider theme={Theme}>
				<Grid templateRows="4.3rem auto">
					<GridItem position="sticky" top="0px" left="0px" zIndex="1">
						<NavBar />
					</GridItem>
					<GridItem minHeight="calc(100vh - 4.3rem)">
						<Component {...pageProps} />
					</GridItem>
				</Grid>
			</ChakraProvider>
		</>
	);
}

export default App;
