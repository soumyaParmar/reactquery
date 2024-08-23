import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.page";
import NewRQ from "./components/NewRQ.page";
import OldMethod from "./components/OldMethod.page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ ">Home</Link>
            </li>
            <li>
              <Link to="/NewReactQuery">New React Query</Link>
            </li>
            <li>
              <Link to="/OldMethod">Old Method</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewReactQuery" element={<NewRQ />} />
          <Route path="/OldMethod" element={<OldMethod />} />
        </Routes>
      </div>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
}

export default App;
