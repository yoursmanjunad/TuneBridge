# TuneBridge
You might have downloaded Spotify, created playlists, but if you want to migrate to other streaming platform like YouTube, the major thing that pulls back you back to Spotify is your playlists. What if you can export them? TuneBridge, provides you that super power to export your playlists on Spotify to YouTube. 

## Database Schema 
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
- [ ] Prisma schema defined  
- [ ] NeonDB Connected  
- [ ] Add Prisma Seed Script  
- [ ] Clerk Middleware to Protect Routes  
- [ ] Create REST API Routes for Spotify/YouTube  
- [ ] Utility Functions for Syncing  
- [ ] Analytics Table for Trends  
