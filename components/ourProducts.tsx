import { Button } from 'antd';


const products = [
  {
    productName: "Connect-CRM",
    id: "connectCRM",
    icon: (
      <svg
        className="w-16 h-16 mb-4"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="fill-current text-purple-600"
          width="64"
          height="64"
          rx="32"
        />
        <g
          strokeLinecap="square"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        >
          <path
            className="stroke-current text-purple-100"
            d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
          />
          <path
            className="stroke-current text-purple-300"
            d="M22 30h4v12h-4z"
          />
        </g>
      </svg>
    ),
    description:
      "Connect-CRM is a advanced CRM system that helps you manage your customer relationships, and BOOST SALES with help of modern AI technology.",
  },
  {
    productName: "Connect-MART",
    id: "connectMart",
    icon: (
      <svg
        className="w-16 h-16 mb-4"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-current text-purple-600"
          cx="32"
          cy="32"
          r="32"
        />
        <path
          className="stroke-current text-purple-100"
          strokeWidth="2"
          strokeLinecap="square"
          d="M21 23h22v18H21z"
          fill="none"
          fillRule="evenodd"
        />
        <path
          className="stroke-current text-purple-300"
          d="M26 28h12M26 32h12M26 36h5"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    ),
    description:
      "Connect-MART is an easily customisable E-commerce platform which can help you scale your offline business by taking it online.",
    //   Connect-MART is an easily customisable E-commerce platform which can help you scale your business by taking it online. Understand your customer's behaviors
  },
];

export default function OurProducts() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
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
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                {product.icon}
                <h4 className="h4 mb-2">{product.productName}</h4>
                <p className="text-lg text-gray-400 text-center">
                  {product.description}
                </p>
                <Button type="primary" className=" ">
                    <span className="text-gray-400">Get it for Free!</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
