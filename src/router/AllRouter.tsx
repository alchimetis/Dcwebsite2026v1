import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Demo from "@/pages/Demo";
import About from "@/pages/About";
import { ROUTES } from "@/router/routes";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import PageNotFound from "@/pages/PageNotFound";
import Resources from "@/pages/Resources";

export default function AllRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.DEMO} element={<Demo />} />
      <Route path={ROUTES.RESOURCES} element={<Resources />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
      <Route path={ROUTES.PRIVACY} element={<Privacy />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
