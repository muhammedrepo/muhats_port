const SectionTitle = ({ title, desc }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4">
        <div className="mx-auto max-w-[570px] text-center mb-[100px]">
          <h2 className=" text-black font-bold a1O md:text-[45px] mb-4">
            {title}
          </h2>
          <p className="text-[rgba(149,156,177,1)] text-base md:text-base">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
