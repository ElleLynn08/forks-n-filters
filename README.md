## **Forks n' Filters**  
*Created with 🧡 and a pinch of sweetness by Elle Lynn.*

---

### **About**  
Forks n' Filters is a fun and intuitive platform designed to help users discover recipes tailored to their preferences. Whether you're looking for quick meals under 30 minutes, high-protein recipes, or low-calorie options, this app makes it easy to filter and explore delicious meals in seconds.

This cloud-based platform leverages cutting-edge technologies to ensure scalability, speed, and an engaging user experience.

---

### **Features**  
- **Filter recipes by:**
  - **Dietary preferences**: Vegan, keto, paleo, etc./* Footer Styling */
.footer {
    background-color: var(--main-orange); /* Match navbar background */
    color: white; /* White text color */
    font-family: "Poppins", sans-serif; /* Match font family */
    text-align: center; /* Center everything */
    padding: 1.5rem; /* Add spacing around content */
    margin-top: 2rem; /* Space above the footer */
    border-top: none; /* Remove the dividing line for seamless look */
  }
  
  /* Footer Text Animation */
  .footer p {
    font-size: 1.3rem; /* Slightly larger text size */
    margin: 0; /* Remove default margin */
    line-height: 1.6; /* Add nice spacing */
    animation: fadeIn 2s ease; /* Apply fade-in animation */
  }
  
  /* Keyframes for Text Animation */
  @keyframes fadeIn {
    from {
      opacity: 0; /* Start invisible */
    }
    to {
      opacity: 1; /* Fade to visible */
    }
  }
  
  /* Chef Hat Styling */
  .footer img.chef-hat {
    margin-top: 0.8rem; /* Space above the image */
    width: 45px; /* Adjust the size of the image */
    height: auto; /* Maintain aspect ratio */
    transition: transform 0.3s ease; /* Smooth transition for hover effect */
    cursor: pointer; /* Indicate it's clickable */
  }
  
  /* Chef Hat Hover Effect */
  .footer img.chef-hat:hover {
    transform: scale(1.1); /* Slight zoom on hover */
  }
  - **Ingredients**: Include or exclude specific items.
  - **Cuisine types**: Italian, Asian, and more.
  - **Cooking time**: Under 30 or 45 minutes max.
  - **Nutrition**: High-protein, low-calorie options.
- **User-friendly design**: Responsive and seamless navigation.
- **Spoonacular API Integration**: Extensive recipe database.
- **Error handling**: Friendly feedback for invalid searches.
- **Cloud-ready deployment**: Ensures speed and scalability.

---

### **Technologies Used**  
- **Frontend**: React with responsive CSS for a modern UI.  
- **Backend**: Python (Flask) with RESTful API design.  
- **Cloud**: Virtual Machines (VMs) and Dockerized components for seamless deployment.  
- **Database/API**: Spoonacular API for rich recipe data.  
- **Version Control**: GitHub for project management.  

---

### **Architecture Overview**  
1. **Frontend**: A React-based SPA (Single Page Application) for seamless navigation and an interactive UI.  
2. **Backend**: Flask handles API requests, data processing, and integrations.  
3. **Cloud Deployment**: Hosted on Virtual Machines with Docker for containerized scalability.  

---

### **Setup Instructions**  
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ElleLynn08/forks-n-filters.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd forks-n-filters
   ```
3. **Set up the backend**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
4. **Set up the frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
5. **Run the app**:
   - Start the backend server:
     ```bash
     python app.py
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

---

### **Live Demo**  
Coming soon!

---

### **To-Do List**  
- [x] Finalize responsive UI and footer.  
- [x] Add error handling for invalid API keys or searches.  
- [x] Implement cloud-based deployment.  
- [ ] Set up CI/CD pipeline.  
- [ ] Expand features (e.g., user accounts, recipe saving).  
😊



