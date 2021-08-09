import { Spinner } from "react-bootstrap";

const Loading = ({ isPending, error }) => {
  return (
    <>
      {isPending && (
        <div className="d-flex justify-content-center align-items-center p-5 m-5">
          <h3 className="my-auto mx-2 text-black-50">Loading</h3>
          <Spinner animation="border" role="status" className="text-black-50"/>
        </div>
      )}
      {error && (
        <div className="d-flex justify-content-center align-items-center p-5 m-5">
          <h3 className="my-auto mx-2">Error: Fetch Data Fail</h3>
        </div>
      )}
    </>
  );
};

export default Loading;
