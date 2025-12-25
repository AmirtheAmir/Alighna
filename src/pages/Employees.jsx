import Breadcrumbs from "../components/Breadcrumbs";
import RightIcon from "../assets/icons/right.svg?react";

function Employees() {
  return (
    <div className="h-full overflow-y-auto bg-background-surface gap-6 p-6 rounded-3xl">
      {/* employee page url */}
      <div>
        {/* <RightIcon className="text-tx-disabled" /> */}
        <Breadcrumbs />
        <h1 className="text-primary txt-body-lg">Employees</h1>
      </div>
    </div>
  );
}

export default Employees;
``