import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const repoBasePath = "/engr110-efolio";
const hasHashRoute = window.location.hash.startsWith("#/");
const isRepoRoot = window.location.pathname === repoBasePath || window.location.pathname === `${repoBasePath}/`;
const isRepoSubPath = window.location.pathname.startsWith(`${repoBasePath}/`);

if (!hasHashRoute && (isRepoRoot || isRepoSubPath)) {
	const pathFromRepo = isRepoRoot ? "/" : window.location.pathname.slice(repoBasePath.length);
	const normalizedPath = pathFromRepo.startsWith("/") ? pathFromRepo : `/${pathFromRepo}`;
	const normalizedUrl = `${window.location.origin}${repoBasePath}/#${normalizedPath}${window.location.search}`;
	window.history.replaceState(window.history.state, "", normalizedUrl);
}

createRoot(document.getElementById("root")!).render(<App />);
