"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const SocialMediaSticky = () => {
  return (
    <div className="fixed p-2 z-50 top-[50vh]">
      <motion.div
        className="flex flex-col gap-2"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Link
          href="https://www.instagram.com/iskconjaipur.official/?igsh=MWRqbnl4M3o2ZXpucw%3D%3D"
          target="_blank"
        >
          <motion.img
            src="/Home/Hero/social_media_icons/instagram.svg"
            alt="Instagram"
            className="h-6"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link href="https://www.youtube.com/@iskcon_jaipur" target="_blank">
          <motion.img
            src="/Home/Hero/social_media_icons/youtube.svg"
            alt="YouTube"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link href="https://wa.me/9649689649" target="_blank">
          <motion.img
            src="/Home/Hero/social_media_icons/whatsapp.svg"
            alt="WhatsApp"
            className="h-6"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialMediaSticky;