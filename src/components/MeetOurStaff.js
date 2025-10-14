import Cardwithnobtn from "./Cardwithnobtn";
import chef from "../images/chef3.jpeg";
import chef2 from "../images/chef.jpeg";
import waiter from "../images/server.jpeg";
import manager from "../images/chef2.jpeg";
import waiter2 from "../images/waiter2.jpeg";
import waiter3 from "../images/manager.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MeetOurStaff() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container-fluid py-5 w-75  ">
      <h2 className="text-center fw-bold mb-5 text-teal display-5">
        Meet<span className="text-yellow"> Our</span> Staff
      </h2>
      <div class=" row align-items-stretch text-center" data-aos="fade-right">
        <div class="col-12 col-md-3 shadow-sm ">
          <div class="card border-0  ">
            <img
              src={chef}
              className="card-img-top rounded-circle p-3 staff-image"
              alt="Chef"
            />
            <div class="card-body">
              <h5 class="card-title fs-3 text-teal">
                Chef <span className="text-yellow">Marco</span>
              </h5>
              <p class="card-text text-teal">
                <span className="text-teal  fs-5 fw-bold"> Head Chef</span> with
                15 years of experience in Mediterranean cuisine.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="card border-0 shadow-sm ">
            <img
              src={chef2}
              class="card-img-top rounded-circle p-3"
              alt="Manager"
            />
            <div class="card-body">
              <h5 class="card-title fs-3 text-teal">
                Chef <span className="text-yellow">Alex</span>
              </h5>
              <p class="card-text  text-teal">
                <span className="text-teal  fs-5 fw-bold">Pastry Chef </span>{" "}
                who specializes in classic Italian and modern desserts.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3  ">
          <div class="card border-0 shadow-sm">
            <img
              src={manager}
              className="card-img-top rounded-circle p-3 staff-image"
              alt="Chef"
            />
            <div class="card-body">
              <h5 class="card-title fs-3 text-yellow">Theo</h5>
              <p class="card-text text-teal">
                <span className="text-teal  fs-5 fw-bold">
                  Restaurant Manager{" "}
                </span>
                who loves welcoming every guest.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="card border-0 shadow-sm ">
            <img
              src={waiter}
              class="card-img-top rounded-circle p-3"
              alt="Server"
            />
            <div class="card-body">
              <h5 class="card-title fs-3 text-yellow">Leo</h5>
              <p class="card-text text-teal">
                <span className="text-teal  fs-5 fw-bold">Friendly server</span>{" "}
                known for his great smile and service.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center mt-4 text-center">
          <div class="col-12 col-md-3">
            <div class="card border-0 shadow-sm ">
              <img
                src={waiter2}
                class="card-img-top rounded-circle p-3"
                alt="Server"
              />
              <div class="card-body">
                <h5 class="card-title fs-3 text-yellow">Amy</h5>
                <p class="card-text text-teal">
                  <span className="text-teal  fs-5 fw-bold">
                    Warm and attentive server
                  </span>{" "}
                  who makes guests feel at home.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3 shadow-sm ">
            <div class="card border-0 ">
              <img
                src={waiter3}
                class="card-img-top rounded-circle p-3"
                alt="Server"
              />
              <div class="card-body">
                <h5 class="card-title fs-3 text-yellow">Sofia</h5>
                <p class="card-text text-teal">
                  <span className="text-teal  fs-5 fw-bold">
                    Attentive and cheerful server
                  </span>{" "}
                  who ensures every guest feels at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MeetOurStaff;
