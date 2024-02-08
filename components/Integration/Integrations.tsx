import { Card } from "../ui/card";
import Image from "next/image"; 

interface Integration {
  title: string;
  Logo: string; 
  description: string;
}

const integrations: Integration[] = [
  {
    title: "WhatsApp",
    Logo: "https://www.svgrepo.com/show/138928/whatsapp.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://www.svgrepo.com/show/138928/whatsapp.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://www.svgrepo.com/show/138928/whatsapp.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://www.svgrepo.com/show/138928/whatsapp.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://www.svgrepo.com/show/138928/whatsapp.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://www.svgrepo.com/show/138928/whatsapp.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  
];

const Integrations: React.FC = () => {
  return (
    <div className="block py-10 bg-black pt-[4em]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="text-white px-24 lg:col-span-7  md:col-span-11 col-span-12">
        <div className="text-4xl pb-5 font-semibold">Connect ChatGPT to the apps and tools you use every day.</div>
        <p className="text-[#ADB7BE] ">Install SiteSpeakAI on your site or integrate it with one of the many apps and tools you use every day.</p>
      </div>
    
      </div>
    
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-7 px-24">
      {integrations.map((app, index) => (
        <Card key={index} className=" bg-black border-gray-600 text-white p-5 hover:bg-gradient-to-br from-black to-blue-950">
          
            <div className=" border-gray-700 p-4 flex justify-center">
              <Image src={app.Logo} alt={app.title} width={60} height={60} />
            </div>
            <h2 className=" py-3 text-8x1 font-black text-balance ">{app.title}</h2>
            <p className="text-[#ADB7BE]">{app.description}</p>
         
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Integrations;
