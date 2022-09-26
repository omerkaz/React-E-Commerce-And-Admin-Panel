import React from "react";

function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide w-75"
        data-bs-ride="false"
        style={{ marginLeft: "10vw" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://iili.io/s7ARsf.jpg"
              className="d-block w-100 rounded"
              alt="..."
              style={{ maxWidth: "60vw", maxHeight: "43vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h6 className="carousel-text text-dark fw-semibold">
                Our New Product is Coming Soon in Neverland Store.
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://iili.io/s7AWsj.jpg"
              className="d-block w-100 rounded"
              alt="..."
              style={{ maxWidth: "60vw", maxHeight: "43vh", minWidth: "60vw" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h6 className="carousel-text text-dark fw-semibold">
                New Jewelery Set Soon in Neverland Store.
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/Bwgtrdx.png"
              className="d-block w-100 rounded "
              alt="..."
              style={{ maxWidth: "60vw", maxHeight: "43vh", minWidth: "60vw" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h6 className="carousel-text text-dark fw-semibold">
                Do you want to buy iPhone 14 Pro?
                (If you are not in Turkey.)
              </h6>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* CATEGORİES */}
      <div className="d-flex justify-content-center mt-3">
        {" "}
        <span className="text text-center about-us fw-semibold">
          Finding Best Products Now
          <br /> in Your Fingertips
        </span>{" "}
      </div>
      <div className="row mt-2 g-4">
        <div className="col-md-3">
          <div className="card p-1">
            <div className="d-flex justify-content-between align-items-center p-2 pb-3">
              <div className="flex-column lh-1 imagename fw-semibold">
                {" "}
                <span>Women's</span> <span>Clothing</span>{" "}
              </div>
              <div>
                {" "}
                <img
                  src="https://img001.prntscr.com/file/img001/7SZlZieGT4Kv9vQSo8D1CQ.png"
                  height="100"
                  width="100"
                  className=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename fw-semibold">
                {" "}
                <span>Men's</span> <span>Clothing</span>{" "}
              </div>
              <div>
                {" "}
                <img
                  src="https://img001.prntscr.com/file/img001/1ioOkU-pSnWPQWQ6lBQ7lQ.png"
                  height="100"
                  width="88"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename fw-semibold text-center">
                {" "}
                <span>Jewelery</span>
              </div>
              <div>
                {" "}
                <img
                  src=" https://i.etsystatic.com/9519217/r/il/c37c5f/3152705283/il_794xN.3152705283_aetw.jpg"
                  height="100"
                  width="100"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename fw-semibold">
                {" "}
                <span>Electronics</span>
              </div>
              <div>
                {" "}
                <img
                  src="https://cdn.shopify.com/s/files/1/0002/4595/6671/products/TurtleBundle_Case_Schutzglas_AirPods_7_AP1_2_700x.jpg?v=1646320978"
                  height="100"
                  width="100"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
