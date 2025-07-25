
# SNEAKER STORE
Welcome to the Sneaker Store an exciting web application that offers sneaker enthusiasts a stylish and user-friendly platform to browse, explore, and connect with their favourite sneakers from top brands like Jordans , Addidas , and Converse.

## TABLE OF CONTENT
. About the project
. Features
. Technologies used
. Project structure
. Getting Started
. Usage
. API/Data
. Routes
. Collaborators
. Live Demo
. License
. Contact
. GitHub usernames

### ABOUT THE PROJECT
SneakerStore is an online sneaker retailer featuring three main categories: Jordans, Adidas, and Converse. It provides users a smooth browsing experience, access to sneaker details, and a newsletter subscription form to leave messages and emails.

The app is built using React with routing, global cart context management, and styling powered by Tailwind CSS. The backend uses a simple db.json file to simulate API responses, making it easy to develop and test locally.

### FEATURES
. Browse authentic sneakers categorized by Jordans, Adidas, and Converse
. Search sneakers dynamically by name
. View detailed sneaker information with images and stock details
. Add new sneakers locally through an admin-style form
. Subscribe to a newsletter by submitting email and message
. Shopping cart functionality managed globally with React Context
. Responsive design styled with Tailwind CSS
. Fast and secure local development with json-server backend

### TECHNOLOGIES USED 
. React
. React Router DOM
. Tailwind CSS
. json-server (for db.json backend)
. JavaScript (ES6+)
. Node.js and npm (package management)

### PROJECT STRUCTURE
├── public/
├── src/
│   ├── components/ -> # React components (Home, Navbar, Items, Cart, etc.)
│   ├── context/    -> # React Context for cart management
│   ├── App.jsx     -> # Main app component with routes
│   ├── main.jsx    -> # Entry point rendering app
│   ├── index.css   -> # Tailwind CSS and global styles
│   ├── App.css     -> # App-level styles
├── db.json         -> # Mock backend data for products & newsletter
├── package.json    -> # npm dependencies and scripts
├── README.md       -> # Project documentation

### GETTING STARTED
A. Clone the Repository : git clone https://github.com/YOUR_GITHUB_USERNAME/GRP2-PHASE2.git, cd GRP2-PHASE2
B. Install Dependencies : npm install
C. Run the Backend json-server : npx json-server --watch db.json --port 3000
D. Start the React app locally : npm run dev
E. Open your browser : to navigate the link in your terminal of the react app to view the app itself

### USAGE
. Browse the sneaker catalog through the "Items" page or homepage
. Use the search bar to filter sneakers dynamically
. Click on a sneaker to view detailed info
. Use the cart icon to view and manage selected items
. Subscribe to the newsletter by submitting your email and message on the homepage
. Add sneakers locally via the "Add Sneaker" page (for admins/testing)

### API/DATA
The db.json file has 2 main collections in it , that is :
 1. PRODUCTS: Each product containing the following fields :
        . id: unique identifier
        . name: sneaker name/category
        . image: URL to sneaker image
        . price: sneaker price (number)
        . stock: available quantity (number)

 2. NEWSLETTER: Each newsletter entry containing the following :
    . id: unique identifier
    . user: email of subscriber
    . message: message from subscriber
    . created: timestamp of submission


### ROUTES 
Path	                   Component(s)             	Description
/	                       Home, Newsletter	            Landing page and newsletter subscription
/items	                   Items  	                    List and filter sneakers
/cart	                   Cart	                        Shopping cart overview and management
/add-sneaker	           AddSneaker	                Form to add sneakers locally
/sneakers/:id	           SneakerDetails	            Detailed sneaker info by ID
/about	                   About	                    About the store and team

### COLLABORATORS
The project was built collaboratively by :
. Allan MAina
. Joe Kariuki
. Muzna Ebrahim Mohamed
. Sydney Osindi

### LIVE DEMO

https://grp2-phase2-web.onrender.com/

### LICENSE
This project is licensed under the MIT License.
© 2025 Sneaker Store



### CONTACT
For questions, suggestions, and feedback, please reach out to any of the collaborators or open an issue in the repository.

### GITHUB USERNAMES
allan6757
Spiffy047
muzna-ebrahim
Sydney-lab

