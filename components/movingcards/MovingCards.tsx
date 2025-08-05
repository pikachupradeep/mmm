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
      "Outstanding service! The team was professional, responsive, and exceeded our expectations from start to finish.",
    name: "Emily Carter",
    title: "Marketing Manager, BrightWave Media",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "Their attention to detail and dedication to quality really impressed us. We’d gladly work with them again.",
    name: "James Patel",
    title: "Founder, NextGen Solutions",
    img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "They turned our vision into reality. The final product was sleek, fast, and totally on-brand. Highly recommended!",
    name: "Sophia Nguyen",
    title: "Creative Director, Luna Studio",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "Working with them was seamless. Deadlines were met, communication was clear, and the outcome was top-tier.",
    name: "Michael Rodriguez",
    title: "COO, Velocity Ventures",
    img: "https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote:
      "Fantastic experience! We saw immediate results after launching our project. Their team really knows their stuff.",
    name: "Isabella Russo",
    title: "Product Manager, NovaTech",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
