"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h4 className="font-semibold">What they say about us</h4>
      <InfiniteMovingCards className="" items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Beltone changed my life. I can finally hear clearly again!",
    name: "Emily Carter",
    title: "Retired Teacher",
    rating: 5,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "Comfortable, reliable, and easy to use. Highly recommend Beltone!",
    name: "James Patel",
    title: "Veteran",
    rating: 4,
    img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "Great sound quality and friendly staff. Love my Beltone aids!",
    name: "Sophia Nguyen",
    title: "Artist",
    rating: 5,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "Very professional service. My hearing is better than ever!",
    name: "Michael Rodriguez",
    title: "Musician",
    rating: 4,
    img: "https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "I forgot what I was missing until I tried Beltone. Amazing clarity!",
    name: "Isabella Russo",
    title: "Grandmother of Four",
    rating: 5,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
