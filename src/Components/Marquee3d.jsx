
import { ThreeDMarquee } from "./ui/3d-marquee";

export function Marquee3d() {
  const images = [
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-1.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-img-7.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-2.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-5.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-6.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-8.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-1.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-img-7.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-2.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-5.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-6.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-8.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-1.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-img-7.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-2.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-5.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-6.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-8.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-1.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-img-7.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-2.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-5.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-6.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-8.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-1.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-img-7.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-2.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-5.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-6.jpg",
    "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-8.jpg",
];
  return (
    <div
      className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
