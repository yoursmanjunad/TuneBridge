import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
const dummyPlaylists = [
  {
    id: 1,
    name: "Top Hits",
    image: "/playlist1.jpg",
    songs: [
      { id: "s1", title: "Song 1" },
      { id: "s2", title: "Song 2" },
    ],
  },
  {
    id: 2,
    name: "Coding Vibes",
    image: "/playlist2.jpg",
    songs: [
      { id: "s3", title: "Song 3" },
      { id: "s4", title: "Song 4" },
    ],
  },
]
export 