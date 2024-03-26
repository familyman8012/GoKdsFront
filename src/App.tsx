import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "PagesFarm/Home";
import Login from "PagesFarm/Login";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import GlobalStyles from "ComponentsFarm/styles/GlobalStyles";
import { authStore } from "MobxFarm/store";
import { fetchMyStore } from "ApiFarm/auth";

const App = () => {
  const history = useHistory();
  const [loadedStore, setLoadedStore] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: (e: any) => {
        // history.push('/');
        console.error(e);
      },
    }),
  });

  useEffect(() => {
    authStore.init();
    setLoadedStore(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" limit={1} autoClose={300} />
      <GlobalStyles />
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" exact={true} component={Home} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
