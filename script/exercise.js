// Get DOM elements
const categoriesContainer = document.getElementById("categoriesContainer")
const treesContainer = document.getElementById("treesContainer")
const loadingSpinner = document.getElementById("loading-spinner")
const categorySpinner = document.getElementById("category-spinner")


// Load all categories
const loadCategories = async () => {
    categorySpinner.classList.remove("hidden");
    categoriesContainer.classList.add("hidden")

    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()

    displayCategories(data.categories)
}


// Load all trees
const loadTrees = async () => {
    loadingSpinner.classList.remove("hidden")
    treesContainer.classList.add("hidden")

    const response = await fetch("https://openapi.programming-hero.com/api/plants")
    const data = await response.json()

    displayTrees(data.plants)
}


// Display all trees
const displayTrees = (trees) => {

    trees.forEach(tree => {
        const card = document.createElement("div")

        card.className = "card bg-base-100 shadow-sm"

        card.innerHTML = `
            <figure>
                <img
                    class="h-40 object-cover w-full"
                    src="${tree.image}"
                    alt="${tree.name}"
                />
            </figure>

            <div class="card-body">
                <h2 class="card-title">${tree.name}</h2>

                <p class="text-left line-clamp-2 mb-0.5">
                    ${tree.description}
                </p>

                <div class="flex justify-between items-center">
                    <div class="badge badge-soft badge-success">
                        ${tree.category}
                    </div>

                    <p class="font-bold">${tree.price} TK</p>
                </div>

                <div class="card-actions justify-end w-full">
                    <button class="btn btn-primary w-full">
                        Add to Cart
                    </button>
                </div>
            </div>
        `

        treesContainer.appendChild(card)
    })

    loadingSpinner.classList.add("hidden")
    treesContainer.classList.remove("hidden")
}


// Display all categories
const displayCategories = (categories) => {

    categories.forEach(category => {
        const btn = document.createElement("button")

        btn.className = "btn btn-outline w-full"

        btn.innerText = category.category_name

        btn.onclick = () => selectButtons(category.id, btn)

        categoriesContainer.appendChild(btn)
    })

    categorySpinner.classList.add("hidden");
    categoriesContainer.classList.remove("hidden")
}


// Handle category button selection
async function selectButtons(categoryId, btn) {
    // console.log(categoryId, btn)

    const allButtons = document.querySelectorAll(
        "#categoriesContainer button, #all-trees"
    )

    allButtons.forEach(btn => {
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-outline")
    })

    btn.classList.add("btn-primary")
    btn.classList.remove("btn-outline")
}


// Initial load
loadCategories()
loadTrees()