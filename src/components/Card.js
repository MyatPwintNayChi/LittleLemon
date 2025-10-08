function Card(props) {
  return (
    <div className="card special-card mb-4 " style={{ width: "22rem" }}>
      <img
        src={props.image}
        className="card-img-top weekly-special-img"
        alt={props.name}
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title text-teal">{props.name}</h2>
        <p className="card-text text-teal fs-5 flex-grow-1">
          {props.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-3 mt-auto">
          <p className="card-text fw-bold fs-3 text-teal m-0">{props.price}</p>
          <div className="text-center">
            <a
              href="#"
              className="btn btn-warning text-white text-uppercase text-center "
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
