import RBSpinner from "react-bootstrap/Spinner";

const FullPageSpinner = () => (
  <div className="container h-100 w-100 d-flex align-items-center justify-content-center">
    <RBSpinner animation="border" color="primary" role="status" />
  </div>
);

export default FullPageSpinner;
