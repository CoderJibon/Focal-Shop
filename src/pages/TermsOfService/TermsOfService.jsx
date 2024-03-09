import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import MetaData from "../../components/MetaData/MetaData.jsx";

const TermsOfService = () => {
  const title = "Terms Of Service - Digitic";
  return (
    <>
      <MetaData title={title} />
      <BreadCum title="Terms Of Service" />

      {/* TermsOfService Start */}

      <div className="terms_wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
