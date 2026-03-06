<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
</div>

<h1 align="center">📺 YouTube Clone Application</h1>

<p align="center">
  A modern, fully responsive Youtube Clone application demonstrating mastery of React, Material UI (MUI), and API integration. This application replicates the core functionality and design of YouTube, providing a seamless video browsing and playing experience.
</p>

## ✨ Features

- **Modern User Interface**: Clean, pixel-perfect design powered by Material UI.
- **Video Playback**: High-quality video playback integration using `react-player`.
- **Search Functionality**: Discover videos effortlessly with a robust search bar.
- **Categories & Feeds**: Browse through various categories like Music, Coding, Sports, and more.
- **Channel Pages**: Explore detailed channel profiles with their latest videos.
- **Video Details**: View comprehensive video information, statistics, and related sidebar videos.
- **Fully Responsive**: Optimized for all devices, from desktop to mobile.

## 🛠️ Tech Stack

- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Styling**: [Material UI (MUI v5)](https://mui.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Video Player**: [React Player](https://github.com/CookPete/react-player)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

You need `Node.js` and `npm` installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/urvitgehlot/youtube_clone_react.git
   ```

2. Navigate into the project directory:
   ```bash
   cd youtube_clone_react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key (if applicable):
   ```env
   REACT_APP_RAPID_API_KEY=your_api_key_here
   ```
   *(Note: This project connects to the YouTube v3 API via RapidAPI)*

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to view the application!

## 📂 Project Structure

```text
src/
├── Components/
│   ├── ChannelCard.jsx    # Component displaying a channel's overview card
│   ├── ChannelDetail.jsx  # Page displaying channel details and their video feed
│   ├── Feed.jsx           # Main page displaying category feeds and videos
│   ├── Navbar.jsx         # Navigation bar with branding and search functionality
│   ├── SearchBar.jsx      # Input component for searching videos
│   ├── SearchFeed.jsx     # Page displaying search results
│   ├── SideBar.jsx        # Sidebar containing video categories
│   ├── VideoCard.jsx      # Component displaying video thumbnail and title
│   ├── VideoDetail.jsx    # Page to watch video and see related videos
│   ├── Videos.jsx         # Container for rendering multiple VideoCards
│   └── index.js           # Exporter for clean component imports
├── utils/                 # Utilities like API fetching logic or constants
├── App.js                 # Main application component & routes
└── index.js               # Application entry point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

<p align="center">Made with ❤️ by <a href="https://github.com/urvitgehlot">Urvit Gehlot</a></p>
