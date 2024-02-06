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
    Logo: "https://cdn.sitespeak.ai/uploads/integrations/xjqmDxzHzTItQmlzvUnrpE3YKC0JAZntBmGkWkmD.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://cdn.sitespeak.ai/uploads/integrations/xjqmDxzHzTItQmlzvUnrpE3YKC0JAZntBmGkWkmD.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://cdn.sitespeak.ai/uploads/integrations/xjqmDxzHzTItQmlzvUnrpE3YKC0JAZntBmGkWkmD.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://cdn.sitespeak.ai/uploads/integrations/xjqmDxzHzTItQmlzvUnrpE3YKC0JAZntBmGkWkmD.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://cdn.sitespeak.ai/uploads/integrations/xjqmDxzHzTItQmlzvUnrpE3YKC0JAZntBmGkWkmD.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  {
    title: "WhatsApp",
    Logo: "https://cdn.sitespeak.ai/uploads/integrations/xjqmDxzHzTItQmlzvUnrpE3YKC0JAZntBmGkWkmD.svg",
    description: "Integrate Echelon.Ai with WhatsApp to offer convenient and direct customer support through the world's most popular messaging app, making interactions personal and secure.",
  },
  
];

const Integrations: React.FC = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-24">
      {integrations.map((app, index) => (
        <Card key={index} className=" border-black  bg-black text-white p-5">
          
            <div className=" border-gray-700 p-4 flex justify-center">
              <Image src={app.Logo} alt={app.title} width={100} height={100} />
            </div>
            <h2 className="text-2xl py-3">{app.title}</h2>
            <p className="text-[#ADB7BE]">{app.description}</p>
         
        </Card>
      ))}
    </div>
  );
};

export default Integrations;
