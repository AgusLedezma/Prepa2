import React from "react";

export const AboutUsSection = (): JSX.Element => {
  const contentData = {
    title: "Quiénes somos",
    sections: [
      {
        title: "Misión",
        description:
          "From automating processes to managing intelligent AI agents, Make's visual platform gives you the power to speed innovation.",
        align: "left",
      },
      {
        title: "Visión",
        description:
          "From automating processes to managing intelligent AI agents, Make's visual platform gives you the power to speed innovation.",
        align: "right",
      },
    ],
    image:
      "https://c.animaapp.com/mb5qod9tByWyXj/img/dise-o-sin-t-tulo--2--1.png",
  };

  return (
    <section className="w-full py-10 bg-[#fdfdfd] border-[0.2px] border-solid border-purpura">
      <div className="container mx-auto max-w-[1122px]">
        <h2 className="text-center font-h2-manrope-semibold text-rosa text-[32px] mb-12">
          {contentData.title}
        </h2>

        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 space-y-12">
            {contentData.sections.map((section, index) => (
              <div
                key={index}
                className={`max-w-[251px] ${section.align === "right" ? "ml-auto mr-0 text-right" : "ml-0"}`}
              >
                <h3 className="font-h3-inter-semibold text-lila text-[24px] mb-2">
                  {section.title}
                </h3>
                <p className="font-body-inter-semibold text-gris text-[16px]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
            <img
              className="w-full max-w-[402px] h-auto"
              alt="Digital innovation illustration"
              src={contentData.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
