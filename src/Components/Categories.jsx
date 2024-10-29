

const Categories = ({ setCategories, categories }) => {
  const categoriesList = [
    { name: "womens-watches"},
    { name: "womens-bags"  },
    { name: "womens-jewellery"},
    { name: "mens-watches" },
    { name: "mens-shoes" },
    { name: "mens-shirts"},
    { name: "home-decoration" },
    { name: "vehicles" },
    { name: "mens-shirts"},
    { name: "mens-shoes"},
    { name: "tops" },
  ];

  return (
    <div className="flex overflow-x-auto w-full py-4 px-2 mr-5 scrollbar-hide">
      <div className="flex md:flex-col flex-row gap-4 whitespace-nowrap">
        {categoriesList.map((category) => (
          <button
            key={category.name}
            className={`p-4 flex items-center justify-center h-20 w-24 flex-col rounded-lg border border-gray-200 transition-transform transform hover:scale-105 ${
              categories === category.name
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-500"
            }`}
            onClick={() => setCategories(category.name)}
          >
            {/* <div className="text-2xl mb-1">{category.icon}</div> */}
            <span className="text-xs font-semibold text-center">
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;