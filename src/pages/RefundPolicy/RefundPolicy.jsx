import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import MetaData from "../../components/MetaData/MetaData.jsx";

const RefundPolicy = () => {
  const title = "Refund Policy - Digitic";
  return (
    <>
      <MetaData title={title} />
      <BreadCum title="Refund Policy" />

      {/* RefundPolicy Start */}

      <div className="refund_wrapper home-wrapper-2 py-5">
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

export default RefundPolicy;
