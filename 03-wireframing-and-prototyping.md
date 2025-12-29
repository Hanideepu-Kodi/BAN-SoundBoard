# 03: Wireframing and Prototyping

This document presents low-fidelity wireframes for the key screens of the soundboard application. These wireframes focus on layout, content hierarchy, and user interaction, and are not intended to represent the final visual design.

---

## 1. Homepage (Guest View)

**Purpose:** To introduce the platform, showcase popular content, and encourage registration.

```
+----------------------------------------------------------------------+
| [Logo]                    [Explore] [About]  [Log In] [Sign Up]      |
+----------------------------------------------------------------------+
|                                                                      |
|                  <--- Hero Section --->                              |
|             "Your Ultimate Soundboard Experience"                    |
|                [Create Your Free Account]                            |
|                                                                      |
+----------------------------------------------------------------------+
|                                                                      |
|                  <--- Curated Playlists --->                         |
|    [Playlist 1]    [Playlist 2]    [Playlist 3]    [Playlist 4]      |
|                                                                      |
+----------------------------------------------------------------------+
|                                                                      |
|                  <--- Trending Sounds --->                           |
|    [Sound 1]       [Sound 2]       [Sound 3]       [Sound 4]         |
|    [Sound 5]       [Sound 6]       [Sound 7]       [Sound 8]         |
|                                                                      |
+----------------------------------------------------------------------+
| [Footer Links]                                     [Social Media]    |
+----------------------------------------------------------------------+
```

---

## 2. Explore Page

**Purpose:** To allow users to discover and filter all public sounds.

```
+----------------------------------------------------------------------+
| [Logo]              [Search Bar]           [Dashboard] [Profile]     |
+----------------------------------------------------------------------+
|                                                                      |
|  <-- Filters -->                                                     |
|  [Category] [Tags] [Sort By: Popular/Newest]                         |
|                                                                      |
+----------------------------------------------------------------------+
|                                                                      |
|  <-- Sound Grid -->                                                  |
|  [Sound Card] [Sound Card] [Sound Card] [Sound Card] [Sound Card]    |
|  [Sound Card] [Sound Card] [Sound Card] [Sound Card] [Sound Card]    |
|  [Sound Card] [Sound Card] [Sound Card] [Sound Card] [Sound Card]    |
|  ...                                                                 |
|                                                                      |
|  [Load More]                                                         |
|                                                                      |
+----------------------------------------------------------------------+
| [Footer Links]                                     [Social Media]    |
+----------------------------------------------------------------------+
```
*   **Sound Card Interaction:** Clicking a sound tile plays the sound instantly. Hovering reveals an "Add to Playlist" icon.

---

## 3. Playlist Page

**Purpose:** To display the contents of a playlist and allow for playback.

```
+----------------------------------------------------------------------+
| [Logo]              [Search Bar]           [Dashboard] [Profile]     |
+----------------------------------------------------------------------+
|                                                                      |
|  <-- Playlist Header -->                                             |
|  <h1>Playlist Title</h1>                                            |
|  <p>Playlist Description</p>                                         |
|  Created by [Username]                                               |
|  [Play All] [Share]                                                  |
|                                                                      |
+----------------------------------------------------------------------+
|                                                                      |
|  <-- Sound List -->                                                  |
|  [Sound Title 1] [Duration] [Add to my Playlist]                     |
|  [Sound Title 2] [Duration] [Add to my Playlist]                     |
|  [Sound Title 3] [Duration] [Add to my Playlist]                     |
|  ...                                                                 |
|                                                                      |
+----------------------------------------------------------------------+
*   **Interaction:** Clicking a sound's row plays the sound.
| [Footer Links]                                     [Social Media]    |
+----------------------------------------------------------------------+
```

---

## 4. User Dashboard

**Purpose:** To be the central hub for a logged-in user to manage their content.

```
+----------------------------------------------------------------------+
| [Logo]              [Search Bar]           [Dashboard] [Profile]     |
+----------------------------------------------------------------------+
|  <-- Sidebar Nav -->   |                                             |
|  [My Playlists]        |  <-- Main Content Area -->                  |
|  [My Sounds]           |                                             |
|  [Upload Sound]        |  <h1>My Playlists</h1>                      |
|  [Settings]            |  [Create New Playlist]                      |
|                        |                                             |
|                        |  [Playlist Card 1] [Edit] [Delete]          |
|                        |  [Playlist Card 2] [Edit] [Delete]          |
|                        |  [Playlist Card 3] [Edit] [Delete]          |
|                        |  ...                                        |
+------------------------+---------------------------------------------+
| [Footer Links]                                     [Social Media]    |
+----------------------------------------------------------------------+
```

---

## 5. Upload Sound Page

**Purpose:** To provide a simple interface for uploading new sounds.

```
+----------------------------------------------------------------------+
| [Logo]              [Search Bar]           [Dashboard] [Profile]     |
+----------------------------------------------------------------------+
|  <-- Sidebar Nav -->   |                                             |
|  [My Playlists]        |  <-- Main Content Area -->                  |
|  [My Sounds]           |                                             |
|  [Upload Sound]        |  <h1>Upload a New Sound</h1>                |
|  [Settings]            |                                             |
|                        |  +---------------------------------------+  |
|                        |  |       Drag and drop your file here      |  |
|                        |  |                 or                      |  |
|                        |  |          [Browse Files]                 |  |
|                        |  +---------------------------------------+  |
|                        |                                             |
|                        |  [Title: ___________]                       |
|                        |  [Description: ___________]                 |
|                        |  [Tags: ___________]                        |
|                        |  [Visibility: (o) Public ( ) Private]       |
|                        |                                             |
|                        |  [Upload]                                   |
|                        |                                             |
+------------------------+---------------------------------------------+
| [Footer Links]                                     [Social Media]    |
+----------------------------------------------------------------------+
```