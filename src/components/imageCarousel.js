import Card from "./Card";

function ImageCarousel(props) {
  return (
    <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active text-center">
          <div class="d-flex justify-content-center gap-4 ">
            <Card
              image={props.image}
              name="Dish Name"
              description="Delicious dish description goes here."
              price="$12.99"
              dataAos="fade-up"
              className="custom-card "
            />
            {/* <Card
              image={props.image2}
              name="Dish Name"
              description="Delicious dish description goes here."
              price="$12.99"
              dataAos="fade-up"
            />
            <Card
              image={props.image3}
              name="Dish Name"
              description="Delicious dish description goes here."
              price="$12.99"
              dataAos="fade-up"
            /> */}
          </div>
        </div>

        {/* <div class="carousel-item">
          <div class="d-flex justify-content-center gap-3">
            <img
              src={props.image5}
              class="img-fluid rounded"
              width="200"
              alt="..."
            />
            <img
              src={props.image6}
              class="img-fluid rounded"
              width="200"
              alt="..."
            />
            <img
              src={props.image7}
              class="img-fluid rounded"
              width="200"
              alt="..."
            />
            <img
              src={props.image8}
              class="img-fluid rounded"
              width="200"
              alt="..."
            />
          </div>
        </div>
      </div> */}
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default ImageCarousel;
