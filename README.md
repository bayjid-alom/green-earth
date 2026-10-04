## 🍃 Green Earth

> **Green Earth is an interactive plant discovery platform designed to help users explore a wide range of plants, browse them by category, view detailed information, and build a better connection with nature through a simple and user-friendly experience.**


[Visit: Green Earth](https://green-earth-plants.vercel.app)

<details>
<summary>🔗 API Endpoints & Requirements</summary>


## 🌱 API Endpoints

## 1. Get 🌱 All Categories

```bash
https://openapi.programming-hero.com/api/categories
```



---

## 2. Get 🌱 All Plants

```bash
https://openapi.programming-hero.com/api/plants
```

**Response:**

```json
{
  "status": true,
  "message": "successfully fetched plants data",
  "plants": [
    {
      "id": 1,
      "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
      "name": "Mango Tree",
      "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
      "category": "Fruit Tree",
      "price": 500
    },
    {
      "id": 2,
      "image": "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg",
      "name": "Guava Tree",
      "description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.",
      "category": "Fruit Tree",
      "price": 350
    },
    {
      "id": 3,
      "image": "https://i.ibb.co.com/xt98PwZq/jackfruit-min.jpg",
      "name": "Jackfruit Tree",
      "description": "A large tropical tree that bears the world's biggest fruit, the jackfruit. Its sweet and aromatic flesh is both nutritious and filling, and the tree itself provides generous shade.",
      "category": "Fruit Tree",
      "price": 800
    },
    {
      "id": 4,
      "image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
      "name": "Gulmohar",
      "description": "Known as the 'Flame of the Forest', this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
      "category": "Flowering Tree",
      "price": 400
    },
    {
      "id": 5,
      "image": "https://i.ibb.co.com/qY8qS7YN/champa-min.jpg",
      "name": "Champa",
      "description": "A fragrant flowering tree that adorns gardens with its delicate white blossoms. Widely cherished in traditional rituals and perfumery.",
      "category": "Flowering Tree",
      "price": 300
    }
  ]
}
```

---

## 3. Get 🌱 Plants by Category

```bash
https://openapi.programming-hero.com/api/category/${id}
```

Example:

```bash
https://openapi.programming-hero.com/api/category/1
```

**Response:**

```json
{
  "status": true,
  "message": "successfully fetched plants data filtered by category",
  "plants": [
    {
      "id": 1,
      "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
      "name": "Mango Tree",
      "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
      "category": "Fruit Tree",
      "price": 500
    },
    {
      "id": 2,
      "image": "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg",
      "name": "Guava Tree",
      "description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.",
      "category": "Fruit Tree",
      "price": 350
    }
  ]
}
```

---

## 4. Get 🌱 Plant Details

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

Example:

```bash
https://openapi.programming-hero.com/api/plant/1
```

**Response:**

```json
{
  "status": true,
  "message": "successfully fetched plant data",
  "plants": {
    "id": 1,
    "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
    "name": "Mango Tree",
    "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
    "category": "Fruit Tree",
    "price": 500
  }
}
```
</details>

















---

### 📌 About The Project

`Green Earth` is an interactive plant discovery platform designed to make exploring and learning about plants simple, engaging, and accessible.

Explore plants by category, browse available trees and plants, view detailed information, and interact with plant data through a clean and responsive interface.

The project focuses on building practical skills in **JavaScript DOM manipulation, API integration, dynamic content rendering, event handling, asynchronous operations, and interactive UI development**.

---

### 📌 Features

- **Category-Based Browsing** — Explore plants through different categories
- **Plant Discovery** — Browse a collection of trees and plants
- **Plant Details** — View detailed information about individual plants
- **Dynamic Rendering** — Load and display plant data dynamically from the API
- **Category Filtering** — Filter plants based on selected categories
- **Interactive Plant Selection** — Select plants and interact with the available options
- **Responsive Design** — Optimized for mobile, tablet, and desktop screens
- **Loading Feedback** — Provide visual feedback while fetching data
- **API Integration** — Fetch real-time plant and category data from the REST API
- **Interactive UI** — Smooth and user-friendly interface for exploring plants

<br>


### ⚙️ Technology Stack

| Technology | Purpose |
|:---|:---|
| **HTML5** | Semantic structure and content |
| **Tailwind CSS** | Responsive styling and layouts |
| **DaisyUI** | Reusable UI components |
| **JavaScript** | Application logic and interactivity |
| **REST API** | Plant and category data |
| **Font Awesome** | Interface icons |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Vercel** | Project deployment |

---


### 🔌 API Integration

The project uses the **Programming Hero Open API** to load plant categories, plant data, category-based plants, and individual plant details dynamically.

#### ⚙️ Chrome Extension

> JSON Viewer Pro

> JSON Fomatter


<br>


## 👨‍💻 Author

**Bayjid Alom**

> Progress is built through consistency, one line of code at a time.