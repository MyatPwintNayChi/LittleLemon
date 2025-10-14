function Cardwithnobtn(props) {
  return (
    <div
      className="card special-card mb-4 shadow-sm bg-success-subtle bg-opacity-25"
      style={{ width: "22rem" }}
    >
      <img
        src={props.image}
        className="custom-icon mx-auto mb-4 pt-5 "
        alt={props.name}
        width="80"
      />
      <div className="card-body d-flex flex-column ">
        <h2 className="card-title text-yellow">{props.name}</h2>
        <p className="card-text text-teal fs-5 flex-grow-1">
          {props.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-3 mt-auto">
          <p className="card-text fw-bold fs-3 text-teal m-0">{props.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Cardwithnobtn;
