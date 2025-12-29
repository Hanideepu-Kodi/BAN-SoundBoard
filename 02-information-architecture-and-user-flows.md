# 02: Information Architecture and User Flows

## 1. Information Architecture

### High-Level Sitemap

*   **/ (Homepage):** The main landing page, featuring a hero section, curated playlists, trending sounds, and a call to action to sign up or log in.
*   **/explore:** A browsable and searchable library of all public sounds on the platform. This will include filtering and sorting options.
*   **/playlist/{id}:** The detail page for a specific playlist, showing the sounds it contains and allowing users to play them.
*   **/sound/{id}:** The detail page for a specific sound, showing its description, tags, and options to add it to a playlist.
*   **/profile/{username}:** A user's public profile, showing their public playlists and uploaded sounds.
*   **/dashboard:** The user's personal dashboard, accessible only when logged in. This will be the main hub for managing their playlists and sounds.
    *   **/dashboard/my-playlists:** A list of the user's created playlists.
    *   **/dashboard/my-sounds:** A list of the user's uploaded sounds.
    *   **/dashboard/upload:** The interface for uploading new sounds.
*   **/login:** The page for users to log in, primarily via Google OAuth.
*   **/register:** The page for new users to register, also primarily via Google OAuth.
*   **/settings:** The user's account settings page.
*   **/about:** A page with information about the platform.
*   **/privacy-policy:** The platform's privacy policy.
*   **/terms-of-service:** The platform's terms of service.

## 2. User Flows

### User Flow 1: Registration and Login

**Goal:** A new user registers for an account and logs in for the first time.

1.  **Entry Point:** The user clicks the "Sign Up" button on the homepage.
2.  **Registration Page:** The user is presented with the option to register using Google.
3.  **Google OAuth:** The user clicks the "Sign up with Google" button and is redirected to the Google OAuth flow.
4.  **Permissions:** The user grants the necessary permissions.
5.  **Redirect to Dashboard:** The user is redirected back to the platform and is now logged in. They are taken to their personal dashboard, which may include a brief onboarding tour.
6.  **Subsequent Logins:** For future visits, the user clicks the "Log In" button and is prompted to log in with Google.

### User Flow 2: Creating a New Playlist

**Goal:** A logged-in user creates a new playlist and adds sounds to it.

1.  **Entry Point:** The user is on their dashboard and clicks the "Create New Playlist" button.
2.  **Create Playlist Modal:** A modal appears, prompting the user to enter a name and an optional description for their playlist. They can also choose the playlist's visibility (public or private).
3.  **Empty Playlist:** The user is taken to the newly created playlist page, which is currently empty.
4.  **Adding Sounds:** The user can add sounds in several ways:
    *   From the **/explore** page, they can click an "Add to Playlist" button on any sound.
    *   From a sound's detail page, they can click the "Add to Playlist" button.
    *   From their own uploaded sounds in the dashboard, they can add sounds to the playlist.
5.  **Add to Playlist Modal:** When the user clicks "Add to Playlist," a modal appears showing their existing playlists. They select the desired playlist, and the sound is added.
6.  **Confirmation:** A toast notification or similar subtle feedback confirms that the sound has been added.

### User Flow 3: Uploading a New Sound

**Goal:** A logged-in user uploads a new sound to the platform.

1.  **Entry Point:** The user navigates to the "/dashboard/upload" page.
2.  **Upload Interface:** The user is presented with a clear and simple interface to upload a sound file. This will include a drag-and-drop area and a traditional file picker.
3.  **File Selection:** The user selects a sound file from their computer (MP3, AAC, etc., max 1 minute).
4.  **Upload Progress:** The file begins to upload, and a progress bar is displayed.
5.  **Metadata Form:** While the file is uploading, a form appears for the user to enter metadata for the sound:
    *   **Title:** (Required)
    *   **Description:** (Optional)
    *   **Tags:** (Optional, for discoverability)
    *   **Visibility:** (Public or Private)
6.  **Upload Completion:** Once the upload is complete, the user clicks the "Save Sound" button.
7.  **Redirect:** The user is redirected to the detail page for their newly uploaded sound.
8.  **Confirmation:** A success message confirms that the sound has been uploaded.
