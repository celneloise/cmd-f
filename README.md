# cmd-f

**cmd-f** is a lovable, interactive mental health check-in platform inspired by [R U OK? Australia](https://www.ruok.org.au/). This prototype allows users to assess their mental health, evaluate risk levels, and provides connections to hotlines, free therapy, and wellness resources.

---

## Features

- Interactive questionnaire combining PHQ-9 and GAD-7 inspired questions
- Risk assessment categorized as Low, Medium, or High
- Probability scoring to help users understand their mental health
- Clean, accessible UI with mauve (#A28F9D) and warm brown (#5C574F) color palette
- Fully responsive design
- Ready for integration with mental health hotlines or therapy resources

---

## Technologies

**Frontend:**

- React.js (Create React App)
- CSS with custom theme
- Fonts: Poppins Bold (headings), Nunito Regular (body)

**Backend:**

- FastAPI (Python)
- NumPy for calculations
- CORS enabled for frontend-backend communication

---

## Getting Started

These instructions will get you a copy of the project running locally for development and testing purposes.

### Frontend

1. Clone the repository:
```
git clone https://github.com/YourUsername/r-u-ok-frontend.git
cd r-u-ok-frontend
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```
The app should open at http://localhost:3000.

4. Build for production:
```
npm run build
```
The build/ folder is ready to deploy.

5. Backend

Navigate to your backend folder:
```
cd path/to/backend
```

6. Install dependencies:
```
pip install -r requirements.txt
```

7. Run the FastAPI server:
```
uvicorn main:app --reload
```
The API will be accessible at http://127.0.0.1:8000.
