import { Spinner } from "react-bootstrap";
import "./loading.scss";
const Loading = ({ isPending, error, errorMessage }) => {
  return (
    <>
      {isPending && (
        <div className="loading">
          <h3 className="mx-2 text-black-50">Loading</h3>
          <Spinner animation="border" role="status" className="text-black-50" />
        </div>
      )}
      {error && (
        <div className="d-flex justify-content-center align-items-center p-5 m-5">
          <h3 className="my-auto mx-2">{errorMessage}</h3>
        </div>
      )}
    </>
  );
};

export default Loading;
