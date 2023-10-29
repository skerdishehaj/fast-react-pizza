# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
---

## Project Requirements from the 'Business' | Step 1

- Very simple application, where users can order **one or more pizzas from a menu**
- Requires **no user accounts** and no login: users just input their names before using the app
- The pizza menu can change, so it should be **loaded from an API**
- Users can add multiple pizzas to **cart** before ordering
- If possible, **GPS location** should also be provided, to make delivery easier
- Users can **mark their order as "priority"** for an additional 20% of the cart price
- Orders are made by **sending a POST request** with the order data (user data + selected pizzas) to tge API
- Payments are made on delivery, so no **payment processing** is necessary in the app
- Each order will get a **unique ID** that should be displayed, so the **user can later look up their order** based on the ID
- Users should be able to mark their order as a "priority" order **even after it has been placed**

---

## Step 2 + 3

### Features Categories  

1. User
2. Menu
3. Cart
4. Order

### Pages 

1. Home `/` 
2. Pizza menu `/menu`
3. Cart `/cart`
4. Placing a new order `/order/new`
5. Looking up an order `/order/:orderID`

---

## Step 3 + 4

### State Management

|State Domains| Types of State|Explanation|
|:---:|:---:|:---:|
|1. User | Global UI|No account to fetch, so stays in app|
|2. Menu | Global remote|Menu is fetched from *API*|
|3. Cart | Global UI|No need for *API*, just storen in app|
|4. Order | Global remote|Fetched and submitter to *API*|

### Technology Decisions

|Action| Library|Explanation|
|:----------:|:-------------:|:---------------:|
|Routing|React Router|The standard for React SPAs|
|Styling|Tailwind CSS|Trendy way of styling applications|
|Remote State Management|React Router|New way of fetching data right inside React Router (*v6.4+*) that is worth exploring ("**render-as-you-fetch**" instead of "**fetch-on-render**"). Not really state ***management***, as it does not persist state|
|UI State Management|Redux|State is fairly complex. Redux has many advantages for UI state|
