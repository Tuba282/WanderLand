import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Assists clients in selecting travel destinations, packages, and crafting personalized itineraries.",
      name: "Sarah Chen",
      designation: "Travel Consultant",
      src: "https://t3.ftcdn.net/jpg/03/58/93/04/360_F_358930412_rodvr4vvY4LG0bUG8MKC3wwCZhWGozcW.jpg",
    },
    {
      quote:
        "Focuses on promoting and selling travel packages to attract new customers.",
      name: "Michael Rodriguez",
      designation: "Sales Executive",
      src: "https://www.shashkay.com.pk/images/blogs/5411TheBenefitsofScreenGlassesforOfficeWorkersandStudents.jpeg",
    },
    {
      quote:
        "Manages day-to-day agency operations, including logistics and bookings.Ensures smooth coordination among team members and service providers.",
      name: "Emily Watson",
      designation: "Operations Manager",
      src: "https://img.freepik.com/premium-photo/cute-brunette-woman-taking-picture-with-her-camera_13339-292940.jpg",
    },
    {
      quote:
        "Builds the agency's online presence through targeted social media campaigns and advertising.",
      name: "James Kim",
      designation: "Digital Marketing Specialist",
      src: "https://img.freepik.com/free-photo/young-bearded-man-suit-looking-camera-while-holding-laptop-computer-isolated_171337-11341.jpg",
    },
    {
      quote:
        "Handles client queries, feedback, and complaints with professionalism and care.Ensures a positive customer experience at every touchpoint.",
      name: "Lisa Thompson",
      designation: "Customer Service Representative",
      src: "https://ciowomenmagazine.com/wp-content/uploads/2024/01/1.1-Amy-Porterfield-Source-Amy-Porterfield.jpg",
    },
    {
      quote:
        "Manages the agency's finances, including payments, invoices, and budgets.Monitors expenses and ensures profitability through efficient financial practices.",
      name: "Loe Daldna",
      designation: "Finance/Accounts Executive",
      src: "https://yourfinancemanager.com.au/wp-content/uploads/2023/09/imh02.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
