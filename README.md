# FlikFolio Frontend

Welcome to the FlikFolio Frontend repository! FlikFolio is a web application designed to help users search for movies, save them for later, and track their favorite films. The frontend is developed using React.js, and it interacts with a Flask-based backend API. 

The application is live and can be accessed at: [FlikFolio](https://flikfolio-fronend.vercel.app/).

## Features

- **Movie Search:** Search for movies by title and view detailed information.
- **Watch Later List:** Save movies to your "Watch Later" list for future viewing.
- **Favorites:** Mark movies as favorites and keep track of your liked films.
- **User Authentication:** Register, log in, and manage user sessions securely.
- **Responsive Design:** Provides a seamless experience on both desktop and mobile devices.

## Installation

To set up the FlikFolio Frontend locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rahulaauji-30/flikfolio-fronend.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd flikfolio-fronend
   ```

3. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variable:

   ```env
   REACT_APP_API_URL=your_flask_api_url
   ```

   Replace `your_flask_api_url` with the URL of your Flask backend API.

## Usage

To start the development server, run:

```bash
npm start
```

This command will launch the app in development mode. Open your browser and go to `http://localhost:3000` to view the application.

For a production build, use:

```bash
npm run build
```

The production-ready files will be located in the `build` directory.

## Development

For development tasks:

1. **Run Tests:**

   Execute tests with:

   ```bash
   npm test
   ```

2. **Linting and Formatting:**

   The project uses ESLint and Prettier for code quality. Run:

   ```bash
   npm run lint
   ```

   To format your code, use:

   ```bash
   npm run format
   ```

## Contributing

Contributions to the FlikFolio Frontend are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## Contact

For any questions or feedback, please reach out to:

- **Email:** [rahulaauji71@gmail.com](mailto:rahulaauji71@gmail.com)
- **GitHub:** [rahulaauji-30](https://github.com/rahulaauji-30)
