import React, { useEffect } from "react";
import UseData from "../../Hooks/UseData";
import blogQuote from "../../assets/img/blog/quote.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SwitchDark from "../../components/switch/SwitchDark";

const FullBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { singleData, handleBlogsDatabySlug } = UseData();

  useEffect(() => {
    handleBlogsDatabySlug(id);
  }, []);

  if (singleData === undefined) {
    navigate("/404");
  }
  return (
    <>
      <div className="yellow">
        <SwitchDark />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="box_inner blog-post mx-6">
                <div className="title-section text-left text-sm-center">
                  <h1>
                    Post <span>Details</span>
                  </h1>
                  <span className="title-bg">posts</span>
                </div>

                {/* Meta Starts */}
                <div className="meta open-sans-font text-center mb-4">
                  <span>
                    <i className="fa fa-user"></i> {singleData?.commentor}
                  </span>
                  <span className="date">
                    <i className="fa fa-calendar"></i> {singleData?.date}
                  </span>
                  <span>
                    <i className="fa fa-tags"></i> {singleData?.tag}
                  </span>
                </div>
                {/* Meta Ends */}

                {/* Blog Content */}
                <h1 className="text-center">{singleData?.title}</h1>
                <img
                  className="img-fluid my-4"
                  src={singleData?.img}
                  alt="Blog"
                />
                <div className="blog-excerpt open-sans-font pb-5">
                  <p>{singleData?.description1}</p>
                  <div className="quotebox">
                    <div className="icon">
                      <img src={blogQuote} alt="blog quote" />
                    </div>
                    <p>{singleData?.description2}</p>
                  </div>
                  <p>{singleData?.description3}</p>
                  <p>{singleData?.description4}</p>
                  <div className="col-12 mt-1">
                    <a href="/">
                      <button className="button">
                        <span className="button-text">Home</span>
                        <span className="button-icon fa fa-home"></span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullBlog;
