## 🌱 Green Earth - `Working Flow`


### 📌 01. Category Button দেখানো

API থেকে category data **fetch** করে প্রতিটি category অনুযায়ী dynamic button তৈরি করে UI-তে দেখানো হয়েছে।


<br>

### 📌 02. Plant Card তৈরি করা

DaisyUI ব্যবহার করে প্রতিটি plant-এর জন্য dynamic card তৈরি করা হয়েছে। Card-এর description দুই লাইনের মধ্যে সীমাবদ্ধ রাখতে `line-clamp-2` class ব্যবহার করা হয়েছে। যেখানে `truncate` class ব্যবহার করলে description শুধু এক লাইনে সীমাবদ্ধ থাকে।

<br>

### 📌 03. সব Plant Dynamicভাবে দেখানো

Plants API থেকে সব plant data **fetch** করে প্রতিটি plant-এর তথ্য অনুযায়ী dynamic card তৈরি করে UI-তে দেখানো হয়েছে।

<br>



### 📌 04. Loading Spinner ফাংশনালি দেখানো

#### Way - 01

```
function manageSpinner(status) {
    if (status == true) {
        document.getElementById("loading-spinner").classList.remove("hidden")
        document.getElementById("treesContainer").classList.add("hidden")
    }
    else {
        document.getElementById("loading-spinner").classList.add("hidden")
        document.getElementById("treesContainer").classList.remove("hidden")
    }
}
```

#### Way - 02

```

function loadTrees(){
    ফাংশনের একদম শুরুতে-
    document.getElementById("loading-spinner").classList.remove("hidden")
    document.getElementById("treesContainer").classList.add("hidden")
}

এবং

const displayTrees = (trees) =>{
    ফাংশনের একদম শেষে - 
    document.getElementById("loading-spinner").classList.add("hidden")
    document.getElementById("treesContainer").classList.remove("hidden")
}

```


#### Way - 03

```
function showSpinner(){
    document.getElementById("loading-spinner").classList.remove("hidden")
    document.getElementById("treesContainer").classList.add("hidden")
}


function hideSpinner(){
    document.getElementById("loading-spinner").classList.add("hidden")
    document.getElementById("treesContainer").classList.remove("hidden")
}

// এরপর উপযুক্ত জায়গায় কল করে দিতে হবে।

```

<br>





### 📌 05.01 Category অনুযায়ী Trees দেখানো

প্রতিটি category button-এ click করলে `selectCategory()` function call হয় এবং clicked button-এর `categoryId` ও button element পাওয়া যায়।

```js
btn.onclick = () => selectCategory(category.id, btn);

async function selectCategory(categoryId, btn) {
    console.log(categoryId, btn);
}
```

এরপর সব category button এবং **All Trees** button select করে প্রথমে সব button-কে inactive করা হয়। তারপর clicked button-টিকে active করা হয়।

```js
const allButtons = document.querySelectorAll("#categoriesContainer button, #all-trees");

allButtons.forEach(btn => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
});

btn.classList.add("btn-primary");
btn.classList.remove("btn-outline");
```

**Flow:**  
`Click Category → Get Category ID → Reset All Buttons → Make Clicked Button Active`




<br>



### 📌 05.02 Trees by Category

```
async function selectCategory(categoryId, btn) {
    console.log(categoryId, btn);
    manageSpinner(false)

    const allButtons = document.querySelectorAll("#categoriesContainer button, #all-trees");

    allButtons.forEach(btn => {
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-outline")
    })

    btn.classList.add("btn-primary")
    btn.classList.remove("btn-outline")

    const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`);
    const data = await res.json();

    displayTrees(data.plants)
}
```

<br>


### 📌 05.03 Control All Trees Button

- এখন **All Trees** button-এ click করলে কোনো কাজ হচ্ছে না, কারণ এখনো button-এ `onclick` event দেওয়া হয়নি।
- তাই **All Trees** button-এ click event add করবো।
- Button-এ click করলে:
  1. সব category button-এর active state remove হবে।
  2. **All Trees** button active হবে।
  3. `loadTrees()` function call হবে।
- `loadTrees()` function-এর মধ্যেই **All Trees API** থেকে সব trees fetch করে display করার logic আগে থেকেই আছে।



```js
allTreesBtn.addEventListener("click", () => {
    // Update active button style
    const allButtons = document.querySelectorAll(
        "#categoriesContainer button, #all-trees"
    )

    allButtons.forEach(btn => {
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-outline")
    })

    allTreesBtn.classList.add("btn-primary")
    allTreesBtn.classList.remove("btn-outline")

    // Load all trees
    loadTrees()
})
```


<br>






### 📌 06. Show Modal()

<details>
<summary>Build the Tree Details Modal with AI</summary>

```
<dialog id="tree_details_modal" class="modal">
    <div id="modal-box" class="modal-box max-w-lg p-6 rounded-2xl">

        <!-- Header -->
        <div class="flex justify-between items-center mb-5">
            <h2 id="modal-title" class="text-2xl font-bold">Arjun Tree</h2>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost text-xl"
                    onclick="document.getElementById('tree_details_modal').close()">✕</button>
            </form>
        </div>

        <!-- Tree Image -->
        <div class="rounded-xl overflow-hidden mb-5">
            <img id="modal-image" src="https://i.ibb.co.com/MxSDCxV4/arjun-min.jpg"
                alt="Arjun Tree" class="w-full h-60 object-cover" />
        </div>

        <!-- Tree Information -->
        <div class="space-y-2">
            <div>
                <span class="font-bold">Category : </span>
                <h3 id="modal-category" class="font-bold badge badge-outline badge-success"></h3>
            </div>
            <div>
                <p id="modal-description" class="text-gray-500 leading-6">A sturdy tree with bark known for its heart-strengthening properties. Valued in herbal medicine for cardiovascular health.</p>
            </div>
            <div class="flex gap-1 items-center">
                <p id="modal-price" class="text-2xl font-bold text-green-600">700</p>
                <span class="text-2xl font-bold text-green-600">TK</span>
            </div>
        </div>

        <!-- Actions -->
        <div class="modal-action mt-6">
            <form method="dialog">
                <button class="btn btn-outline">Close</button>
            </form>
            <button class="btn btn-primary">Add to Cart</button>
        </div>

    </div>
</dialog>

```

</details>



- প্রথমে modal element-টি JavaScript-এ ধরে নিতে হবে:
  `const treeDetailsModal = document.getElementById("tree_details_modal")`

- এরপর `displayTrees()` function-এর নিচে `openTreeModal()` নামে একটি নতুন function তৈরি করতে হবে।

- `openTreeModal()` কোথায় call হবে?
  Card-এর **tree name/heading**-এ click করলে `openTreeModal()` function call হবে এবং সেই tree-এর `id` পাঠানো হবে।

```js
<h2 onclick="openTreeModal(${tree.id})" class="card-title cursor-pointer text-left">
    ${tree.name}
</h2>
```


> Find all required modal elements:

```
const modalImage = document.getElementById("modal-image")
const modalCategory = document.getElementById("modal-category")
const modalDescription = document.getElementById("modal-description")
const modalPrice = document.getElementById("modal-price")
const modalTitle = document.getElementById("modal-title")
```


> **এরপর `openTreeModal()` function-এর ভিতরে নিচের কাজগুলো করতে হবে:**

```
async function openTreeModal(ID) {
    console.log("Clicked plants id is :", ID);

    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${ID}`)
    const data = await res.json()
    const plantDetails = data.plants;
    // console.log(plantDetails);

    modalTitle.textContent = plantDetails.name;
    modalImage.src = plantDetails.image;
    modalDescription.textContent = plantDetails.description;
    modalPrice.textContent = plantDetails.price;
    modalCategory.textContent = plantDetails.category;

    treeDetailsModal.showModal()
}
```


<br>

