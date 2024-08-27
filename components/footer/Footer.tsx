import Image from "next/image";
import React from "react";

const Footer = () => {
  const links = ["Home", "Success Story", "About Us", "Get Involved"];
  const teams = ["Board Members", "Advisors/Members", "Executives", "Staffs"];
  const blogs = ["Recent Blogs", "New Blog"];
  const images = [
    "twitter.svg",
    "face-book.svg",
    "youtube.svg",
    "linkedin.svg",
    "instagram.svg",
  ];
  return (
    <footer className="pt-12 pb-5 border-t-[1.5px] border-[#E6E6E6]">
      <div className="flex justify-evenly pl-15 border-b-[1.5px] border-[#E6E6E6]">
        <div className="flex justify-evenly items-center ">
          <Image
            src={"/assets/footer/rafiki.svg"}
            width={200}
            height={200}
            alt="helping"
          />
          <div className="flex flex-col w-[40%] justify-start gap-5">
            <p className="font-bold">
              Get involved in improving tech education in Africa!
            </p>
            <button className=" w-3/4 bg-[#264FAD] rounded-md text-white p-2 px-5 font-semibold">
              Support us
            </button>
          </div>
        </div>
        <div className="flex justify-evenly w-[60%]">
          <div className="flex flex-col">
            <h2 className="font-semibold mb-5">Links</h2>
            {links.map((link, index) => (
              <span key={index} className="mb-3 font-light">
                {link}
              </span>
            ))}
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="font-semibold mb-5">Teams</h2>
              {teams.map((team, index) => (
                <span key={index} className="mb-3 font-light">
                  {team}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="font-semibold mb-5">Blogs</h2>
              {blogs.map((blog, index) => (
                <span key={index} className="mb-3 font-light">
                  {blog}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between ml-16 mt-4">
        <div className="flex gap-5">
          <Image src={"/assets/footer/c.svg"} width={20} height={20} alt="c" />
          <p>2020 Africa to Silicon Valley, Inc. All right reserved.</p>
        </div>

        <div className="flex justify-evenly w-1/5">
          {images.map((image, index) => (
            <Image
              key={index}
              src={`/assets/footer/${image}`}
              width={20}
              height={20}
              alt={`${image} image`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
