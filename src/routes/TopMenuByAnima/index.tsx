import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Planes } from "./screens/Precios";

createRoot(document.getElementById("app") as HTMLElement).render(
    <StrictMode>
        <Planes />
    </StrictMode>,
);
