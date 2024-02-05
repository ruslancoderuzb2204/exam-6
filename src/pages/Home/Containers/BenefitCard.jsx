const BenefitCard = ({ num, title, text }) => {
  return (
    <div className="p-8 md:p-4  bg-white rounded-lg">
      <p className="text-8xl lg:text-6xl md:4xl text-end font-bold">{num}</p>
      <h2 className="text-2xl md:text-xl font-semibold mb-2">{title}</h2>
      <p>{text}</p>
      <button className="px-4 py-2 rounded-md mt-4 block text-[#FF9500] ml-auto border-2">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default BenefitCard;
