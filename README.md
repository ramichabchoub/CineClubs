# Movie Club Platform

A platform for movie and TV enthusiasts to create, join, and engage with clubs focused on specific genres, themes, or shows. Clubs act as community hubs for discussions, sharing recommendations, and tracking member activity.

---

## 🚀 Project Overview

This platform fosters a vibrant community for fans of movies and TV shows, offering a space to connect with like-minded individuals. Users can join clubs, participate in discussions, and stay updated on club activities.

---

## ✨ Core Features

### **Club Management**

- Create, update, and delete clubs.
- Configure clubs as **public** (open to all) or **private** (invite-only).
- Detailed club profiles include:
  - Club name.
  - Description.
  - Banner image.

---

### **Join and Leave Clubs**

- Users can **join** or **leave** clubs.
- Display a list of clubs.
- Display a **Leaderboard** of most active clubs.

---

### **Club Discussions**

- Create **discussion threads** within a club.
- Enable **replies** to threads for detailed conversations.
- Allow moderators to **pin important threads** (e.g., _Weekly Watch Recommendations_).

---
### **User Pofile**
- Profile Picture.
- Banner
- Change Password.
- Joined Clubs.
- Threads Posts.
- Posts Liked.

---

### **Club Moderation**

- Club owners or moderators have tools to:
  - **Remove members** who violate club rules.
  - **Delete inappropriate posts or threads**.
  - **Invite new members** to private clubs.

---

### **Member Activity Tracking**

- Track active members and their contributions:
  - Threads started.
  - Posts made.
- Display a simple **leaderboard** of the most active members.

---

### **Notifications**

- Notify members about:
  - New threads in clubs they've joined.
  - Invitations to join private clubs.

---

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS, React Router.
- **Backend**: SpringBoot, PostgreSQL, WebSocket.
- **Authentication**: Clerk for user management.
- **API Management**: React Query for efficient state handling.

---

## 🚧 Future Enhancements

- Add **real-time chat** for live discussions.
- Support for **movie/TV tracking** within clubs.
- Advanced **search and filtering** for discovering clubs.

## 💾 Database Seeding

Populate the database with sample data for development:

```bash
# Windows
.\db.bat seed        # Seed database
.\db.bat seed:force  # Force reseed (adds more data)

# Linux/macOS
./db.sh seed        # Seed database
./db.sh seed:force  # Force reseed (adds more data)
```

Creates sample users, clubs, posts... for testing.
