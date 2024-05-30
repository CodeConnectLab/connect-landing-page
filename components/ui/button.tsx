import React from "react";
type ButtonInterface = {
    children: React.ReactNode;
};
export default function Button(props: ButtonInterface) {
  //destruct props
  const { children } = props;

  const secondaryVariant = () => (
    <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
      Cancel
    </button>
  );

  return (
    <button
      className="bg-purple-600 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-purple-600 hover:border-purple-600 text-white hover:text-purple-600 rounded-full transition ease-in duration-300"
    >
      {children}
    </button>
  );
}
