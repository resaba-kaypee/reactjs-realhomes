import React from "react";
import SvgIcon from "../svg/SvgIcon";

const SellersText = () => (
  <>
    <h2 className="mb-2 text-2xl font-semibold">
      Introducing Sellers Marketplace
    </h2>
    <p className="mb-2">
      There are more ways than ever for selling your home. In Sellers
      Marketplace we've partnered with companies that offer alternative options
      to allow you to seamlessly sell, buy and move.
    </p>
    <h3 className="text-lg font-semibold">List on the open market</h3>
    <p className="mb-2">
      Sell with the guidance of a real estate professional.
    </p>
    <h3 className="text-lg font-semibold">Sell with ease</h3>
    <p className="mb-2">
      Avoid the hassle of listing and move on your schedule.
    </p>
    <h3 className="text-lg font-semibold">Sell in any condition</h3>
    <p className="mb-2">
      Sell your home as it stands, regardless of its condition or financial
      status.
    </p>
    <h3 className="text-lg font-semibold">Sell now, move later</h3>
    <p className="mb-2">
      Get the liquidity of selling your home without having to move.
    </p>

    <button className="w-full max-w-lg py-3 mt-4 font-semibold text-white align-middle transition duration-500 ease-in-out bg-gray-800 rounded-full hover:bg-yellow-600 hover:border-yellow-600">
      View Sellers Marketplace
    </button>
  </>
);

const AgentsText = () => (
  <>
    <h2 className="mb-2 text-2xl font-semibold">
      Find The Right Agent for You
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
      }}>
      <SvgIcon name="bullseye" className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold">Agent pairing technology</h3>
        <p className="mb-2">
          Our Real Estate agent pairing technology connects you with agents in
          real time for your selling and buying needs.
        </p>
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
      }}>
      <SvgIcon name="timer" className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold">Time Saving Data</h3>
        <p className="mb-2">
          Our proprietary pairing algorithm is based on 17 years of transaction
          data pairing sellers with selling agents.
        </p>
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
      }}>
      <SvgIcon name="chat" className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold">Personalize Support</h3>
        <p className="mb-2">
          Our Real Estate agent pairing technology connects you with agents in
          Our team of experts will work with you until you've found the right
          selling agent.
        </p>
      </div>
    </div>
    <button className="w-full max-w-lg py-3 mt-4 font-semibold text-white align-middle transition duration-500 ease-in-out bg-gray-800 rounded-full hover:bg-yellow-600 hover:border-yellow-600">
      Find My Agent
    </button>
  </>
);

const ToolsText = () => (
  <>
    <h2 className="mb-2 text-2xl font-semibold">
      Explore homeowner tools that help you at every stage
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
        marginBottom: "8px",
      }}>
      <div className="py-4">
        <SvgIcon name="status-square" className="w-10 h-10" />
      </div>

      <h3 className="py-4 text-lg">Track your valuation and equity</h3>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
        marginBottom: "8px",
      }}>
      <div className="py-4">
        <SvgIcon name="direction" className="w-10 h-10" />
      </div>

      <h3 className="py-4 text-lg">Follow neighborhood trends</h3>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
        marginBottom: "8px",
      }}>
      <div className="py-4">
        <SvgIcon name="hammer" className="w-10 h-10" />
      </div>

      <h3 className="py-4 text-lg">Browse remodeling tips & inspiration</h3>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0px 12px",
        marginBottom: "8px",
      }}>
      <div className="py-4">
        <SvgIcon name="tag" className="w-10 h-10" />
      </div>

      <h3 className="py-4 text-lg">Discover financing options</h3>
    </div>
  </>
);

const AgentsImage = () => (
  <div className="flex items-center h-full">
    <img
      className="object-center no-repeat"
      src={require("../../assets/img/lp-img-agent.svg")}
      alt=""
    />
  </div>
);

const SellersImage = () => (
  <div className="flex items-center h-full">
    <img
      className="object-center no-repeat"
      src={require("../../assets/img/lp-img-partners.svg")}
      alt=""
    />
  </div>
);

const ToolsImage = () => (
  <div className="flex items-center h-full">
    <img
      className="object-center no-repeat"
      src={require("../../assets/img/lp-img-tools.svg")}
      alt=""
    />
  </div>
);

const SellPage = () => {
  return (
    <section className="relative mx-8 my-24 lg:mx-24">
      <div className="flex flex-col items-center h-64 md:grid md:grid-cols-2 md:gap-4">
        <div className="order-2 md:order-none">
          <SellersText />
        </div>
        <div className="order-1 md:order-none">
          <SellersImage />
        </div>
        <div className="order-3 md:order-none">
          <AgentsImage />
        </div>
        <div className="order-4 md:order-none">
          <AgentsText />
        </div>
        <div className="order-6 md:order-none">
          <ToolsText />
        </div>
        <div className="order-5 md:order-none">
          <ToolsImage />
        </div>
      </div>
    </section>
  );
};

export default SellPage;
