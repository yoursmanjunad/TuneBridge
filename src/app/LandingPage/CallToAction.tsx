import React from "react";
import { Button } from "@/components/ui/button";
import { FaSpotify } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#0f0f0f] dark:to-black py-20 text-center transition-colors duration-300">
      <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Ready to Move Your Music?
      </h3>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Connect your accounts and start transferring playlists effortlessly.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <Button
          variant="outline"
          className="flex items-center gap-2 border-muted text-muted-foreground hover:bg-muted/10 dark:hover:bg-muted/20"
        >
          <FaSpotify className="text-green-500 dark:text-green-400" />
          Connect Spotify
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 border-muted text-muted-foreground hover:bg-muted/10 dark:hover:bg-muted/20"
        >
          <BsYoutube className="text-red-600 dark:text-red-500" />
          Connect YouTube
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
