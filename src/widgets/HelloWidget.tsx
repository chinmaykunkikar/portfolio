"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
import Card from "src/components/Card";
import CardLinkButton from "src/components/CardLinkButton";

export default function HelloWidget() {
  const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <Card
      className="flex cursor-default select-none flex-col items-start justify-center p-4 md:px-10"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {isHovered ? (
        <motion.div
          animate={{ scale: 1.1 }}
          className="pointer-events-none flex items-center"
        >
          <motion.div
            key="greeting"
            animate={{
              rotate: [0, 20],
              transition: {
                duration: 0.3,
                repeat: 3,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
          >
            <Image
              alt="Hello!"
              src="/emoji/hello.png"
              width={48}
              height={48}
              quality={100}
              priority
            />
          </motion.div>
          <div className="ml-2 text-2xl font-bold tracking-tighter lg:text-3xl">
            Hello!
          </div>
        </motion.div>
      ) : (
        <motion.div className="pointer-events-none flex items-center">
          <Image
            key="greeting"
            alt="नमस्कार!"
            src="/emoji/namaskar.png"
            width={48}
            height={48}
            quality={100}
            priority
            className="rounded-md"
          />
          <div className="ml-2 text-2xl font-bold tracking-normal lg:text-3xl">
            नमस्कार!
          </div>
        </motion.div>
      )}
      <span className="mt-6 text-base lg:text-lg">
        <Balancer>
          I&apos;m&nbsp;
          <span className="font-newsreader text-xl tracking-normal lg:text-3xl">
            Chinmay
          </span>
          , a frontend web developer based in India, an open source software
          enthusiast, and a passenger through space and time.
        </Balancer>
      </span>
      <CardLinkButton
        href="/about"
        label="Read more"
        variant={ArrowRightIcon}
      />
    </Card>
  );
}
