
import React, { useEffect } from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const DetailPage = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  // console.log({ desp, Image, userName, date, email }{ desp, Image, userName, date, email });

  const { comments, image } = useLoaderData();
  console.log( comments,image );


  return (
    
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto my-10">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-lg title-font font-bold font-[Quicksand] tracking-tighter uppercase text-[#59815b] ">{comments?.name}</h2>
            <h2 className="text-sm title-font text-gray-500 tracking-tighter">{comments?.email}</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
            <div className="flex mb-4">
              <a className="flex-grow text-[#59815b] border-b-2 border-[#59815b] py-2 text-lg px-1">Review</a>
            </div>
            <p className="leading-relaxed mb-4">{comments?.body} ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum doloribus laudantium porro ab incidunt nisi expedita consequuntur nam? Esse nam veniam recusandae illum ipsam veritatis rerum magnam voluptatibus ducimus fugiat placeat, sequi deserunt ex commodi harum sed! Temporibus neque perferendis sit rerum! Dolor unde et repellendus tempora sunt aliquam consequuntur! Eos ad ducimus, rem magnam iure libero ipsam </p>

            <div className="flex">
              <Link to={'/about'} className="flex ml-auto text-white bg-[#59815b] border-0 py-2 px-6 focus:outline-none hover:bg-[#59815b] rounded">Read More</Link>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`https://picsum.photos/640/480`} />
        </div>
      </div>
    </section>
  )
}

export default DetailPage

// eslint-disable-next-line
export const fetchingData = async ({ id }) => {
  console.log(id);

  try {
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const imagesResponse = await fetch("/fakerAPI.json");

    if (!commentsResponse.ok) {
      console.error("Failed to fetch comment data");
      throw new Error("Comments API fetch failed");
    }

    if (!imagesResponse.ok) {
      console.error("Failed to fetch image data");
      throw new Error("Images API fetch failed");
    }

    const comments = await commentsResponse.json();
    const images = await imagesResponse.json();
    const image = images.filter(img => img.id == id)

    // Return combined data
    // console.log({ comments, image });
    
    return { comments, image };
  } catch (error) {
    console.error("Error loading data:", error);
    throw error; // This will be handled by `errorElement`
  }
};
