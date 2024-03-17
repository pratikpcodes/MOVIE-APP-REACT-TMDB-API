import React from "react";
import { Link } from "react-router-dom";

// const Cards = ({ data }) => {
//   return (
    
//     <div className="grid grid-cols-4 w-screen min-h-screen h-full transtion-all duration-700   flex-row">
//     {data.map((item, index) => (
//       <div key={index} className="m-2 w-[40vh] rounded-lg mt-20 transform transition duration-300 scale-100 ease-in-out hover:scale-110 p-10 object-cover">
//         <div
//           className="w-full h-[40vh] rounded-lg"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundBlendMode: "lighten",
//           }}
//         ></div>
//         <div className="h-[0px] w-[40vh] mb-5 text-white transition-all duration-300">
//           <h1 className="text-3xl font-semibold mt-5 mb-1">{item.original_name || item.original_title}</h1>
//           {item.overview.length > 70 ? (
//             <h1>{item.overview.slice(0, 70)}...</h1>
//           ) : (
//             <h1>{item.overview}</h1>
//           )}
//         </div>
//       </div>
//     ))}
//   </div>
  
//     ); 
// };
const Cards = ({ data,title }) => {
  console.log(data)

  return (
    <div className="grid grid-cols-5  p-20">
      {data?.map((item, index) => (
        
        <Link to= {`/${item.media_type || title}/details/${item.id}`} key={index} className="m-8 rounded-lg bg-gray-900 overflow-hidden">
          <div
            className="w-full h-52  rounded-t-lg transition-transform hover:scale-125 duration-200"
            style={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path|| item.profile_path})`,
            }}
          ></div>
          <div className="p-4">
            <h1 className="text-white text-3xl font-semibold mb-2">{item.original_name || item.original_title||item.name}</h1>
            <p className="text-white">
              {
            
              
              item.overview?.length > 60 ? `${item.overview.slice(0, 60)}...` : item.overview}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
