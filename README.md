# TuneBridge
You might have downloaded Spotify, created playlists, but if you want to migrate to other streaming platform like YouTube, the major thing that pulls back you back to Spotify is your playlists. What if you can export them? TuneBridge, provides you that super power to export your playlists on Spotify to YouTube. 

## Tech Stack 
This project built on top of trending and essential tech stack tools. 
- Typescript
- React
- Next Js
- Tailwind CSS
- Prisma
- Neon DB (PostgreSql)
- Shadcn UI
- Aceternity UI
- Clerk Authentication
- Spotify API
- YouTube API

### 🎧 Why I Built This Project
As someone who listens to a lot of music over 70,000 hours of Spotify listening history I’ve always loved curating and discovering new playlists. Recently, I made the switch from Chrome to Brave and stopped paying for YouTube Premium, since Brave already blocks ads effectively.

With that shift, I found myself spending more time on YouTube whether it's for funny videos, podcasts, or even just listening to music. But there was one big problem:

I missed my carefully crafted Spotify playlists.

So I decided to build a solution.
This tool lets me sync my Spotify playlists directly to YouTube, giving me full access to my music across platforms without feeling locked into a single service.



<!-- ## Database Schema 
┌────────────────────────────┐
│          User              │
├────────────────────────────┤
│ id: String (PK)            │
│ clerkId: String (U)        │
│ email: String (U)          │
│ username: String (U)       │
│ fullName: String?          │
│ imageUrl: String?          │
│ spotifyUserId: String?     │
│ createdAt: DateTime        │
│ updatedAt: DateTime        │
├────────────────────────────┤
│ playlists: Playlist[]      │
│ listeningHistory:          │
│   ListeningHistory[]       │
└────────────────────────────┘
             ▲
             │ 1
             │
             │
             ▼
┌────────────────────────────┐
│        Playlist            │
├────────────────────────────┤
│ id: String (PK)            │
│ userId: String (FK)        │
│ name: String               │
│ source: String             │
│ destination: String        │
│ status: String             │
│ songCount: Int             │
│ spotifyPlaylistId: String? │
│ createdAt: DateTime        │
├────────────────────────────┤
│ songs: Song[]              │
└────────────────────────────┘
             ▲
             │ 1
             │
             ▼
┌────────────────────────────┐
│          Song              │
├────────────────────────────┤
│ id: String (PK)            │
│ playlistId: String (FK)    │
│ title: String              │
│ artist: String             │
│ album: String?             │
│ duration: Int?             │
│ sourceUrl: String?         │
│ order: Int                 │
│ spotifyTrackId: String?    │
│ createdAt: DateTime        │
├────────────────────────────┤
│ listeningHistory:          │
│   ListeningHistory[]       │
└────────────────────────────┘
             ▲
             │ 1
             │
             ▼
┌────────────────────────────┐
│    ListeningHistory        │
├────────────────────────────┤
│ id: String (PK)            │
│ songId: String (FK)        │
│ userId: String (FK)        │
│ listenedAt: DateTime       │
└────────────────────────────┘
 -->


## ✅ Features

- [x] Landing Page  
- [x] Clerk Authentication  
- [x] Database Setup  
- [ ] Database <-> Clerk Webhook  
- [x] Spotify OAuth Flow (via API Route)  
- [x] Fetch All Spotify Playlists  
- [x] Store Playlists + Songs on DB  
- [ ] Sync Playlist to YouTube  
- [ ] Show Sync Status in Dashboard  
- [ ] "Connect to Spotify" Button (Styled + Routed)  
- [ ] Trends Dashboard (most played song, artists, year-wise stats)  
- [ ] Export Trends to PDF  
- [ ] YouTube OAuth Integration  
- [ ] User Profile Page (profile picture, email, full name)  
- [ ] Logout functionality  
- [ ] Responsive Layout  
- [ ] Dark Mode Toggle  
- [ ] SEO Meta Tags for Landing Page  
- [ ] Rate Limiting for API Calls  
- [ ] Error Handling  

---

## 🛠️ Developer Setup

- [x] Tailwind + ShadCN UI Setup  
- [x] Prisma schema defined  
- [x] NeonDB Connected  
- [x] Add Prisma Seed Script  
- [x] Clerk Middleware to Protect Routes  
- [ ] Create REST API Routes for Spotify/YouTube  
- [ ] Utility Functions for Syncing  
- [ ] Analytics Table for Trends  


- [ ] Features section padding 
