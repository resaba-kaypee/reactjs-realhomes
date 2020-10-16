import React, { useEffect, useState } from "react";

const MortgageCalculator = ({ price = 0 }) => {
  const [settings, setSettings] = useState({
    currencysym: "$",
    currency: "Dollars",
    termtype: "years", // years or months
    term: 30,
    principal: price,
    dptype: "percentage", // percentage or downlump
    dpamount: "20%",
    rate: 6.5,
    result: 0,
  });

  const [isConvertingDP, setIsConvertingDP] = useState(false);
  const [isConvertingTerm, setIsConvertingTerm] = useState(false);

  const convertDownPayment = () => {
    const total = parseInt(settings.principal);
    const amount = parseInt(settings.dpamount);

    if (settings.dptype === "percentage") {
      setSettings({
        ...settings,
        dpamount: (amount / total) * 100 + "%",
      });
    } else {
      const perc = amount / 100;
      setSettings({
        ...settings,
        dpamount: total * perc,
      });
    }
  };

  const convertTermLength = () => {
    const term = settings.term;
    if (settings.termtype === "months") {
      setSettings({
        ...settings,
        term: parseInt(term * 12),
      });
    } else {
      setSettings({
        ...settings,
        term: parseInt(term / 12),
      });
    }
  };

  const amountLeft = () => {
    const purchasePrice = parseInt(settings.principal);
    const downPayment = parseInt(settings.dpamount);

    if (settings.dptype === "percentage") {
      const perc = downPayment / 100;
      return purchasePrice - purchasePrice * perc;
    } else {
      return purchasePrice - downPayment;
    }
  };

  const paymentsLeft = () => {
    return settings.termtype === "months" ? settings.term : settings.term * 12;
  };

  const calculate = () => {
    // Standard Mortgage Formula:
    // M = P[i(1+i)n] / [(1+i)n - 1]
    // x = (1+i)n

    const P = amountLeft();
    const i = settings.rate / 100 / 12;
    const n = paymentsLeft();
    const x = Math.pow(1 + i, n);
    const M = (P * ((i * x) / (x - 1))).toFixed(2);

    setSettings({
      ...settings,
      result: M,
    });
  };

  const handleTermChange = (e) => {
    setSettings({
      ...settings,
      termtype: e.target.value,
    });
    setIsConvertingTerm(true);
  };

  const handleDPChange = (e) => {
    setSettings({
      ...settings,
      dptype: e.target.value,
    });
    setIsConvertingDP(true);
  };

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    calculate();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isConvertingDP) {
      convertDownPayment();
    }
    // eslint-disable-next-line
  }, [isConvertingDP, settings.dptype]);

  useEffect(() => {
    if (isConvertingTerm) {
      convertTermLength();
    }
    // eslint-disable-next-line
  }, [isConvertingTerm, settings.termtype]);

  return (
    <div className="flex justify-center w-full mt-24">
      <form id="homenote" className="w-full">
        {/* // Purchase Price */}
        <div className="flex mb-6">
          <label
            className="block w-1/3 pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="principal">
            Purchase Price {settings.currencysym}
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-2/3 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none sm md:w-2/3 focus:outline-none focus:bg-white focus:border-purple-500"
            name="principal"
            value={settings.principal}
          />
        </div>

        {/* // Down Payment */}
        <div className="flex mb-6">
          <label
            className="block w-1/3 pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="dpamount">
            Down Payment
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-2/3 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none md:w-2/3 focus:outline-none focus:bg-white focus:border-purple-500"
            name="dpamount"
            value={settings.dpamount}
          />
        </div>

        <div className="flex mb-6">
          <div className="w-1/3"></div>
          <div className="flex w-2/3 justify-evenly">
            {/* // Down Payment Type - Percentage */}
            <label className="w-full font-bold text-gray-500">
              <input
                onChange={handleDPChange}
                className="mr-2 leading-tight"
                checked={settings.dptype === "percentage"}
                type="radio"
                name="dptype"
                value="percentage"
              />
              Percent (%)
            </label>

            {/* // Down Payment Type - Lump Sum */}
            <label className="w-full font-bold text-gray-500">
              <input
                onChange={handleDPChange}
                className="mr-2 leading-tight"
                checked={settings.dptype === "downlump"}
                type="radio"
                name="dptype"
                value="downlump"
              />
              {settings.currency} {settings.currencysym}
            </label>
          </div>
        </div>

        {/* // Rate */}
        <div className="flex mb-6">
          <label
            className="block w-1/3 pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="rate">
            Rate (%)
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-2/3 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none md:w-2/3 focus:outline-none focus:bg-white focus:border-purple-500"
            name="rate"
            value={settings.rate}
          />
        </div>

        {/* // Term */}
        <div className="flex mb-6">
          <label
            className="block w-1/3 pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="term">
            Term
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-2/3 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none md:w-2/3 focus:outline-none focus:bg-white focus:border-purple-500"
            name="term"
            value={settings.term}
          />
        </div>

        <div className="flex mb-6">
          <div className="w-1/3"></div>
          <div className="flex w-2/3 justify-evenly">
            {/* // Term in Years */}
            <label className="w-full font-bold text-gray-500">
              <input
                onChange={handleTermChange}
                className="mr-2 leading-tight"
                checked={settings.termtype === "years"}
                type="radio"
                name="termtype"
                value="years"
              />
              Years
            </label>

            {/* // Term in Months */}
            <label className="w-full font-bold text-gray-500">
              <input
                onChange={handleTermChange}
                className="mr-2 leading-tight"
                checked={settings.termtype === "months"}
                type="radio"
                name="termtype"
                value="months"
              />
              Months
            </label>
          </div>
        </div>

        {/* // Results */}
        <div className="flex mb-6">
          <label
            className="block w-1/3 pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="rate">
            Results
          </label>
          <input
            type="text"
            className="w-2/3 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none md:w-2/3 focus:outline-none focus:bg-white focus:border-purple-500"
            readOnly
            value={settings.result}
          />
        </div>

        <div className="flex items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <button
              onClick={() => calculate()}
              type="button"
              className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none">
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MortgageCalculator;
