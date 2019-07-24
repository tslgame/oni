import * as React from "react";
import { hot } from "react-hot-loader";

import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { ConnectedRouter } from "connected-react-router";

import history from "@/history";
import theme from "@/theme";

import StoreProvider from "@/store/components/StoreProvider";

import I18NProvider from "@/services/i18n/components/I18NProvider";

import LoadingDialog from "@/components/LoadingDialog";
import ImportWarningDialog from "@/components/ImportWarningDialog";

import Routes from "@/routes";

const Root: React.FC = () => (
  <I18NProvider>
    <StoreProvider>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <LoadingDialog />
          <ImportWarningDialog />
          <Routes />
        </MuiThemeProvider>
      </ConnectedRouter>
    </StoreProvider>
  </I18NProvider>
);

export default hot(module)(Root);
