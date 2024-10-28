import { Button } from "antd";
import Card from "./ui/card";
import {
  PhoneOutlined,
  ShoppingCartOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const products = [
  {
    productName: "Connect-CRM",
    id: "connectCRM",
    icon: (
      <div className="p-1 flex justify-center items-center rounded-full bg-white">
        <Image
          width={176}
          height={32}
          src={"/icons/logoConnectCrm.png"}
          alt="crmLogo"
          priority
          style={{ width: "auto", height: "auto" }}
        />
        {/* <PhoneOutlined className="text-white" style={{ fontSize: "28px" }} /> */}
      </div>
    ),
    description:
      "Connect-CRM is a advanced CRM system that helps you manage your customer relationships, and BOOST SALES with help of modern AI technology.",
    link: "https://connect-crm-landing-page.vercel.app/",
    newTab: true,
  },
  {
    productName: "Connect-MART",
    id: "connectMart",
    icon: (
      <div className="p-3 flex justify-center items-center rounded-full bg-purple-600">
        <ShoppingCartOutlined
          className="text-white"
          style={{ fontSize: "28px" }}
        />
      </div>
    ),
    description:
      "Connect-MART is an easily customisable E-commerce platform which can help you scale your offline business by taking it online.",
    //   Connect-MART is an easily customisable E-commerce platform which can help you scale your business by taking it online. Understand your customer's behaviors
    link: "/mart",
    newTab: false,
  },
  {
    productName: "Connect-ChatBots",
    id: "connectChatBots",
    icon: (
      <div className="p-3 flex justify-center items-center rounded-full bg-purple-600">
        <WechatWorkOutlined
          className="text-white"
          style={{ fontSize: "28px" }}
        />
      </div>
    ),
    description:
      "Our AI chatbots offer intelligent, 24/7 support to your customers. Trained specialy for your business, they help improve customer satisfaction and reduce response times",
    link: "/chatbot",
    newTab: false,
  },
];

export default function OurProducts() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="h2 mb-4">Our Product Range.</h2>
            <p className="text-xl text-gray-400">
              We serve businesses with variety of products and services some of
              our hero products are listed below{" "}
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {products?.map((product, index) => (
              <div
                key={`${product}-${index}`}
                className="relative h-full flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <Card
                  description={product.description}
                  icon={product.icon}
                  title={product.productName}
                  link={product.link}
                  newTab={product.newTab}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
