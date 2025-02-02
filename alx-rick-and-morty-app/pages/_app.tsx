import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorBoundary from '@/components/ErrorBoundary';
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://36f6b5678ad5fc149248efe1aecd617e@o4508751065513984.ingest.us.sentry.io/4508751069184000',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Sentry.ErrorBoundary>
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ApolloProvider>
    </Sentry.ErrorBoundary>
  );
}

export default MyApp;