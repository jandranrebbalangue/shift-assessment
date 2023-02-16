import NotFoundImg from "./assets/icons/svg/not-found.svg";

const NotFound = () => (
  <div className="dashboard">
    <img src={NotFoundImg} className="team-img" alt="Not found" />
    <h4 className="pt-3">Oops! You&apos;re lost.</h4>
    <p className="text-muted float-left">
      The page you are looking for was not found.
    </p>
  </div>
);

export default NotFound;
