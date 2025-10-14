function Button(props) {
  return (
    <button type="submit" className="btn btn-warning text-dark  text-uppercase">
      {props.name}
    </button>
  );
}

export default Button;
