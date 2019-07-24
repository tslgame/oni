import React from "react";

import PageContainer from "@/components/PageContainer";
import RedirectIfNoSave from "@/components/RedirectIfNoSave";

import PlanetList from "./components/PlanetList";

const PlanetsPage: React.FC = () => (
  <PageContainer title="Planets">
    <RedirectIfNoSave />
    <PlanetList />
  </PageContainer>
);

export default PlanetsPage;
