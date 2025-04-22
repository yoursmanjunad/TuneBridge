import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from 'components/motion-primitives/accordion'; // Importing Accordion components from a custom library

import { ChevronRight } from 'lucide-react';

export function AccordionVariant() {
    return (
      <Accordion
        className='flex flex-col items-center justify-center max-w-screen-md mx-auto px-4'
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        <AccordionItem value='getting-started' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              What does this application do?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            This application allows you to easily transfer your playlists from your Spotify account directly to your YouTube account (specifically YouTube Music).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='animation-properties' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              How does the playlist transfer work?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            You connect your Spotify account, select the playlists you want to transfer, then connect your YouTube account. Our tool will then find the matching songs from your Spotify playlists on YouTube and create new playlists in your YouTube account.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='advanced-features' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              Do I need a YouTube Music subscription?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            While our tool facilitates the transfer, you will need a YouTube account. The ability to play specific tracks might depend on your YouTube account type (standard YouTube or YouTube Music Premium) and regional availability on the YouTube platform.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='community-support' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              Is my Spotify or YouTube account information safe?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Yes, absolutely. We use secure authentication protocols (OAuth) provided by Spotify and Google (for YouTube). We do NOT store your Spotify or Google account passwords. We only access the necessary data (like your playlists) with your explicit permission to perform the transfer.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='permissions' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              What permissions does the application require?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            We require permission to view your Spotify playlists to read their content and permission to create and manage playlists in your YouTube account to add the transferred songs.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='whatIf' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              What happens if a song can't be found on YouTube?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            While our matching is designed to be accurate, sometimes a direct match isn't available on YouTube's library (due to licensing, version differences, etc.). In such cases, those specific songs may not be included in the transferred playlist on YouTube. We aim to minimize this, but a 100% match for every song is not always guaranteed across platforms.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='activity' className='py-2 w-full'>
          <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
              <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              I heard there are listening activity charts. How do I access those?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='origin-left'>
            <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Yes, we are adding features to visualize your listening activity based on the data you allow us to access during the transfer process (or potentially through a separate data retrieval step with your permission). Once this feature is live, you will likely find a "Dashboard" or "Analytics" section in the application after connecting your account, where you can explore insights into your listening habits.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
}