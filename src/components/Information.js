import Button from "../components/Button";

function Information() {
  return (
    <section className="py-5 bg-white sec-info-bg">
      <div className="container text-light">
        <div className="row justify-content-center g-5">
          <div
            className="col-12 col-md-5 text-center  p-4 bg-success bg-opacity-50"
            style={{ zIndex: "1" }}
          >
            <h3 className="mb-4 text-uppercase text-yellow fw-bold">
              Hours Of Operation
            </h3>
            <p className="mb-2 fw-bold text-yellow">MON - FRI</p>
            <p className="text-yellow">
              10:00am - 1:00pm
              <br />
              4:00pm - 10:30pm
            </p>
            <hr className="border-white mx-auto" style={{ width: "50%" }} />
            <p className="mb-2 fw-bold text-yellow">SAT</p>
            <p className="text-yellow">3:00pm - 10:30pm</p>
            <hr className="border-white mx-auto" style={{ width: "50%" }} />
            <p className="mb-2 fw-bold text-yellow">SUN</p>
            <p className="text-danger fw-bold">We are closed.</p>
            <Button name="make a reservation" />
          </div>

          <div
            className="col-12 col-md-5 text-center  p-4 rounded-lg-end-4 bg-body-tertiary bg-opacity-50  "
            style={{ zIndex: "1" }}
          >
            <h3 className="mb-2 text-teal fs-2 fw-bold">Our Newsletter</h3>
            <p className="text-teal mb-4">
              Dialogue is an essential part of any great experience.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light text-teal border-0"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light text-teal border-0"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-light text-teal border-0"
                  placeholder="Email"
                />
              </div>
              <Button name="contact us" style={{ width: "100%" }} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Information;
