// import React from "react";
// import PageHeading from "../components/PageHeading";

// const NotFoundPage = () => {
//   return (
//     <div>
//       <PageHeading home={"Home"} pagename={"Page Not Found"} />
//       <div className="text-center text-4xl font-extrabold m-10">
//         Page Not Found
//       </div>
//     </div>
//   );
// };

// export default NotFoundPage;
import React from "react";
import PageHeading from "../components/PageHeading";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-50 h-96 flex flex-col items-center justify-center">
      {/* Page Heading */}
      <PageHeading home={"Home"} pagename={"Page Not Found"} />

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full text-center ">
        <div className="text-4xl font-extrabold text-gray-800 mb-4">
          404 - Page Not Found
        </div>
        <p className="text-lg text-gray-600 mb-4">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
          onClick={() => window.location.href = '/'}
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
