## 🌱 Green Earth - `Working Flow`


### 1. Category Button দেখানো

API থেকে category data **fetch** করে প্রতিটি category অনুযায়ী dynamic button তৈরি করে UI-তে দেখানো হয়েছে।


<br>

### 2. Plant Card তৈরি করা

DaisyUI ব্যবহার করে প্রতিটি plant-এর জন্য dynamic card তৈরি করা হয়েছে। Card-এর description দুই লাইনের মধ্যে সীমাবদ্ধ রাখতে `line-clamp-2` class ব্যবহার করা হয়েছে। যেখানে `truncate` class ব্যবহার করলে description শুধু এক লাইনে সীমাবদ্ধ থাকে।

<br>

### 3. সব Plant Dynamicভাবে দেখানো

Plants API থেকে সব plant data **fetch** করে প্রতিটি plant-এর তথ্য অনুযায়ী dynamic card তৈরি করে UI-তে দেখানো হয়েছে।

<br>



### 04. Loading Spinner ফাংশনালি দেখানো

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






### 05. প্রত্যেক বাটনের Trees দেখানো

```
btn.onclick = () => selectCategory(category.id);
-
async function selectCategory(id) {
    console.log(id);
}
```


```
async function selectCategory(categoryId, btn) {
    console.log(categoryId, btn);
    // manageSpinner(false)
    btn.classList.add("btn-primary")

    document.querySelectorAll("")

}
```

```
<button id="all-trees" class="btn btn-primary w-full">All Trees</button>
```








