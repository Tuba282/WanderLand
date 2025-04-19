
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AboutCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="joinUs" className="w-full h-full py-20">
      <h2 className='text-3xl md:text-6xl font-bold tracking-tighter uppercase  text-[#665044] text-center font-[]'>Join in with <span
        className="text-[#59815B] px-5 "
        style={{ backgroundImage: "url(/tipsBG.png)" }}
      >#wanderland</span></h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, category, src }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {title} - {category}
              </span>{" "} <br /><br />
              Every journey is a story waiting to be written, a chance to break free from the routine and create unforgettable experiences that stay etched in your heart forever. From grand adventures in bustling cities to quiet retreats in serene countryside settings, the joy of traveling lies not just in the destination, but in the journey itself—a journey that leaves you enriched, inspired, and forever changed.

            </p>
            <img
              src={src}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className=" h-full w-full rounded-2xl mx-auto object-contain my-4" />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Explore the Hidden Gems",
    title: "Discover the world's unseen wonders.",
    src: "https://tripbeam.wordpress.com/wp-content/uploads/2014/07/cenote-ik-kil-mexico.jpg",

    content: <DummyContent category="Explore the Hidden Gems" title="Discover the world's unseen wonders." src="https://tripbeam.wordpress.com/wp-content/uploads/2014/07/cenote-ik-kil-mexico.jpg" />,
  },
  {
    category: "Journey Beyond the Ordinary",
    title: "Step into adventures that inspire.",
    src: "https://cdn.sanity.io/images/xhhnkk4g/production/2cf073660f6156b44e1415b1dd61820b92ff4104-1080x720.webp?w=3840&q=65&fit=clip&auto=format",
    content: <DummyContent category="Journey Beyond the Ordinary"
      title="Step into adventures that inspire."
      src="https://cdn.sanity.io/images/xhhnkk4g/production/2cf073660f6156b44e1415b1dd61820b92ff4104-1080x720.webp?w=3840&q=65&fit=clip&auto=format" />,
  },
  {
    category: "Create Unforgettable Memories",
    title: "Let your travels tell a story.",
    src: "https://travelwithbender.com/files/5217/0374/1466/photo-at-lake.jpg",
    content: <DummyContent category="Create Unforgettable Memories"
      title="Let your travels tell a story."
      src="https://travelwithbender.com/files/5217/0374/1466/photo-at-lake.jpg" />,
  },

  {
    category: "Discover Your Next Destination",
    title: "Find beauty in every journey.",
    src: "https://travelwithbender.com/files/7017/0374/1466/iceland-postcard.jpg",
    content: <DummyContent category="Discover Your Next Destination"
      title="Find beauty in every journey."
      src="https://travelwithbender.com/files/7017/0374/1466/iceland-postcard.jpg" />,
  },
  {
    category: "Wanderlust Awaits You Here",
    title: "Travel the world with new eyes.",
    src: "https://miro.medium.com/v2/resize:fit:1400/1*3s8ErumfIOPmq0ritVkBpQ.jpeg",
    content: <DummyContent category="Wanderlust Awaits You Here"
      title="Travel the world with new eyes."
      src="https://miro.medium.com/v2/resize:fit:1400/1*3s8ErumfIOPmq0ritVkBpQ.jpeg" />,
  },
  {
    category: "Adventure Like Never Before",
    title: "Escape to dream-worthy locations.",
    src: "https://boundlessadventures.net/wp-content/uploads/2023/11/boundless-aerial-adventure-park-817x1024.webp",
    content: <DummyContent category="Adventure Like Never Before"
      title="Escape to dream-worthy locations."
      src="https://boundlessadventures.net/wp-content/uploads/2023/11/boundless-aerial-adventure-park-817x1024.webp" />,
  },
  {
    category: "Experience Culture and Nature",
    title: "Witness harmony across the globe.",
    src: "https://www.intriqjourney.com/wp-content/uploads/2024/04/Tourists-1170x481_1.jpg",
    content: <DummyContent category="Experience Culture and Nature"
      title="Witness harmony across the globe."
      src="https://www.intriqjourney.com/wp-content/uploads/2024/04/Tourists-1170x481_1.jpg" />,
  },
  {
    category: "Your Adventure, Your Way",
    title: "Tailored trips for every explorer.",
    src: "https://explorerchick.com/wp-content/uploads/2023/04/20181005072552_IMG_2753-01-scaled.jpeg",
    content: <DummyContent category="Your Adventure, Your Way"
      title="Tailored trips for every explorer."
      src="https://explorerchick.com/wp-content/uploads/2023/04/20181005072552_IMG_2753-01-scaled.jpeg" />,
  },
  {
    category: "Relax, Explore, and Smile",
    title: "Travel that rejuvenates your soul.",
    src: "https://img.freepik.com/free-photo/group-people-happy-expression-summer-holidays-beach-concept-ai-generated_1194-588713.jpg?semt=ais_hybrid&w=740",
    content: <DummyContent category="Relax, Explore, and Smile"
      title="Travel that rejuvenates your soul."
      src="https://img.freepik.com/free-photo/group-people-happy-expression-summer-holidays-beach-concept-ai-generated_1194-588713.jpg?semt=ais_hybrid&w=740" />,
  },
  {
    category: "Step Into a New World",
    title: "Embrace different cultures and places.",
    src: "https://www.science.org/do/10.1126/science.aac4550/abs/sn-smiles.jpg",
    content: <DummyContent category="Step Into a New World"
      title="Embrace different cultures and places."
      src="https://www.science.org/do/10.1126/science.aac4550/abs/sn-smiles.jpg" />,
  },
  {
    category: "Uncover Life's Great Treasures",
    title: "Nature, history, and beyond await.",
    src: "https://www.nannybag.com/images/landing/01-2239/london/natural-history-museum-0.webp",
    content: <DummyContent category="Uncover Life's Great Treasures"
      title="Nature, history, and beyond await."
      src="https://www.nannybag.com/images/landing/01-2239/london/natural-history-museum-0.webp" />,
  },
  {
    category: "Begin Your Incredible Journey",
    title: "Make every moment worth exploring.",
    src: "https://i.pinimg.com/736x/ff/05/f3/ff05f35335c658d7fc548facc43a62b7.jpg",
    content: <DummyContent category="Begin Your Incredible Journey"
      title="Make every moment worth exploring."
      src="https://i.pinimg.com/736x/ff/05/f3/ff05f35335c658d7fc548facc43a62b7.jpg" />,
  }
];
