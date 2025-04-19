import { Link } from "react-router-dom";
import React, { } from "react"
// import { FollowerPointerCard } from "./ui/following-pointer";

export function ReviewCard({ body, name, id, email , date, image }) {



  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Convert to Date object
    const day = date.getDate(); // Extract day
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    // Add suffix for the day (e.g., "28th", "1st", "2nd")
    const daySuffix = (d) => {
      if (d > 3 && d < 21) return "th"; // Default 'th' for 11-19
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${daySuffix(day)} ${month}, ${year}`;
  };



  return (
    <div className="mx-auto w-80" key={id}>
      {/* <FollowerPointerCard
        title={
          <TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar} />
        }> */}
      <div
        className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-200 shadow-xl">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
          <img
            src={image?.url}
            alt="thumbnail"
            className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl" />
        </div>
        <div className="p-4">
          <h2 className="my-4 text-lg font-bold text-zinc-700 capitalize">
            {name.slice(0, 50)}
            {/* {shortPara.slice(0,10) + " ..."} */}
          </h2>
          <h2 className=" text-sm font-light text-zinc-400">
            {email}
            {/* {shortPara.slice(0,10) + " ..."} */}
          </h2>
          <h2 className="my-4 text-sm font-normal text-zinc-500">
            {body.slice(0, 150) + " ..."}
          </h2>
          <div className="mt-10 flex flex-row items-center justify-between">
            <span className="text-sm text-gray-500">{``}</span>
            {formatDate(date)}
            <div
              className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
              <Link to={`/blogs/${id}`}>Get Details </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </FollowerPointerCard> */}
    </div>
  );
}



// const TitleComponent = ({
//   title,
//   avatar
// }) => (
//   <div className="flex items-center space-x-2">
//     <img
//       src={avatar}
//       height="20"
//       width="20"
//       alt="thumbnail"
//       className="rounded-full border-2 border-white" />
//     <p>{title}</p>
//   </div>
// );

