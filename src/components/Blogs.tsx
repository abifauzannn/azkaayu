import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Gambar1 from "../assets/images/blogs/18.png";
import Gambar2 from "../assets/images/blogs/19.png";
import Gambar3 from "../assets/images/blogs/20.png";

// Type untuk data
type CardData = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

// Komponen Card
const Card: React.FC<{ title: string; image: string; description: string; link: string; }> = ({
  title,
  image,
  description,
  link,
}) => {
  return (
    <div className="w-auto h-auto bg-white rounded-2xl py-8 border border-slate-200 flex flex-col shadow-md">
  {/* Gambar */}
  <img
    src={image}
    alt={title}
    className="w-full h-40 object-cover rounded-lg"
  />

  {/* Judul dengan tinggi minimum agar sejajar */}
  <h2 className="text-lg font-semibold mt-4 px-8 line-clamp-2">
    {title}
  </h2>

  {/* Deskripsi dengan line-clamp agar tidak terpengaruh oleh title */}
  <p className="text-sm mt-4 px-8 overflow-hidden text-justify line-clamp-3 flex-grow">
    {description}
  </p>

  {/* Tombol Learn More */}
  <div className="flex flex-row gap-2 mt-2 items-center cursor-pointer justify-start px-8 pt-4">
    <a href={link} target="_blank" className="font-bold text-[#123524] text-sm">Read More</a>
    <span className="text-[#FCCD2A]">
      <FaArrowRight size={16} />
    </span>
  </div>
</div>

  );
};

// Komponen BlogList
const BlogList: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "API mendorong kemajuan Internet of Things (IoT)",
      description:
        "Artikel API mendorong kemajuan Internet of Things di Apilogy.id membahas peran penting API dalam perkembangan IoT. API memungkinkan perangkat IoT yang beragam untuk berkomunikasi dan berbagi data secara efisien, mendukung integrasi dan interoperabilitas antar perangkat. Dengan API, pengembang dapat mengakses dan mengontrol perangkat IoT dengan lebih mudah, mempercepat inovasi dan penerapan solusi IoT dalam berbagai sektor. Artikel ini menyoroti bagaimana API menjadi komponen kunci dalam ekosistem IoT yang terus berkembang.",
      image: Gambar1,
      link:"https://www.apilogy.id/blog/api-mendorong-kemajuan-internet-of-things-iot/"
    },
    {
      id: 2,
      title: "Begini Cara Kerja Cyber Security dari Ancaman Cyber Threats",
      description:
        "Artikel Begini Cara Kerja Cyber Security dari Ancaman Cyber Threats di Apilogy.id membahas konsep dasar dan elemen penting dalam keamanan siber untuk melindungi sistem dari ancaman dunia maya",
      image: Gambar2,
      link: "https://www.apilogy.id/blog/begini-cara-kerja-cyber-security-dari-ancaman-cyber-threats/"
    },
    {
      id: 3,
      title: "Keunggulan APILOGY Sebagai API Marketplace di Indonesia",
      description:
        "Artikel Keunggulan APILOGY Sebagai API Marketplace di Indonesia di Apilogy.id membahas peran APILOGY sebagai platform marketplace API pertama di Indonesia yang menawarkan solusi terpadu untuk penerbitan, penemuan, penggunaan, dan pengelolaan kumpulan API guna mempercepat proses pengembangan.",
      image: Gambar3,
      link: "https://www.apilogy.id/blog/keunggulan-apilogy-sebagai-api-marketplace-di-indonesia/"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default BlogList;
