import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./css/index.css";
import Home from "./pages/Home";

const root = document.getElementById("root");

if (root) {
    render(
        () => (
            <Router>
                <Route path="/" component={Home} />
            </Router>
        ),
        root
    );
}

// render(
//   () => (
//     <Router root={App}>
//       <Route path="/" component={Home} />
//       <Route path="/users" component={Users} />
//       <Route path="*paramName" component={NotFound} />
//     </Router>
//   ),
//   document.getElementById("root")
// );