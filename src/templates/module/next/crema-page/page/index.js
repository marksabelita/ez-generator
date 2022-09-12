import React from "react";
import AppPage from "../../../../@crema/hoc/admin/AppPage";
import asyncComponent from "../../../../@crema/utility/asyncComponent";

const Lists = asyncComponent(() => import("../../../../modules/admin/sample/lists"))
export default AppPage(() => <Lists />);
