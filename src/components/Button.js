function Button(props) {
  return (
    <button
      type="submit"
      className="btn btn-success text-white  text-uppercase"
    >
      {props.name}
    </button>
  );
}

export default Button;
