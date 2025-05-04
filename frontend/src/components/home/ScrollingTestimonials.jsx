import { useEffect, useRef } from "react";

const testimonials = [
  {
    content: "Cyber Connect helped me recover after a ransomware attack that nearly cost me my business. The community provided step-by-step guidance that was invaluable.",
    author: "Michael Chen",
    role: "Small Business Owner",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    content: "I've learned more about practical cybersecurity in a month on this platform than I did in years of casual reading. The threat alerts have saved me multiple times.",
    author: "Sarah Williams",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    content: "As someone who works with sensitive data daily, the security practices I've learned here have been essential. I recommend Cyber Connect to all my colleagues.",
    author: "James Peterson",
    role: "Financial Analyst",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    content: "After being a victim of identity theft, I found support and practical advice here that helped me secure my accounts and prevent future attacks.",
    author: "Emma Thompson",
    role: "Healthcare Professional",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    content: "The real-time threat alerts from the community have helped our IT team stay ahead of several emerging vulnerabilities before they could be exploited.",
    author: "David Wilson",
    role: "IT Security Specialist",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    content: "Joining Cyber Connect was a game-changer for our remote team's security practices. The resources are accessible even for non-technical team members.",
    author: "Sophia Garcia",
    role: "Project Manager",
    image: "https://i.pravatar.cc/150?img=13",
  },
];

export function ScrollingTestimonials() {
  const scrollTrackRef = useRef(null);

  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;
    if (!scrollTrack) return;

    // Clone the content for seamless infinite scrolling
    const content = Array.from(scrollTrack.children);
    content.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollTrack.appendChild(clone);
    });

    // Animation function
    const scroll = () => {
      if (!scrollTrack) return;

      if (scrollTrack.scrollLeft >= scrollTrack.scrollWidth / 2) {
        scrollTrack.scrollLeft = 0;
      } else {
        scrollTrack.scrollLeft += 1;
      }
    };

    // Set the interval for smooth scrolling
    const scrollInterval = setInterval(scroll, 30);

    // Pause on hover
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => setInterval(scroll, 30);

    scrollTrack.addEventListener("mouseenter", handleMouseEnter);
    scrollTrack.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      if (scrollTrack) {
        scrollTrack.removeEventListener("mouseenter", handleMouseEnter);
        scrollTrack.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#f8f8f8d3]   overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What our community is saying</h2>
          <p className="text-[#717d8a]  max-w-2xl mx-auto">
            Join thousands of individuals and organizations who trust Cyber Connect to stay secure in the digital world.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollTrackRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap pb-6"
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="inline-block w-[350px] max-w-full shrink-0 whitespace-normal"
            >
              <div className={`h-full rounded-xl p-6 shadow-md bg-[#ffffff]  border border-[#dde3e9] `}>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-[#717d8a] dark:text-[#a7b1be]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-[#717d8a] dark:text-[#a7b1be]">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fade out effect on edges */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#ffffff]  to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#ffffff]  to-transparent"></div>
      </div>
    </section>
  );
}

// You would typically import and use this component in another part of your application,
// for example, on your homepage.
// import { ScrollingTestimonials } from '@/components/home/ScrollingTestimonials';