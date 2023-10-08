<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>The Correct answer is option **B**. Because **"greeting"** is declared in the first line and an empty object is assigned to **"greetign"** which is **not declared**. As a result, we will get a **reference error**.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>The correct answer is option **C**. 1 and "2" are passed as arguments in the sum function. Here 1 is of **number** type but "2" is of **string** type. When a number is added with a string Javascript **converts all the arguments to string** and concatenates them.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>The correct answer is option **A**. In the first line an array **food** is declared and initialized. In the second line an object **info** is declared and assigned an object where **favoriteFood** is the only key. **food[0]** is the value of favoriteFood. In the next line, the value of the favoriteFood is changed but the original **food** array is not changed. Because the address of **food[0]** in the food array and the address of **favoriteFood** is not the same. As a result, the original **food** array hasn't mutated.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>The correct answer is option **B**. **"name"** is passed as a parameter in **sayHi** function. But when it is called no argument is passed. As a result, we will get **Hi there, undefined** in the console. **Default Argument** can be used to get rid of this issue.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>The correct answer is option **C**. By forEach method each element of **nums** array will be checked if it is a **truthy** or **falsy** value. For each truthy value, the **count** variable will be incremented. Since **0 is the only falsy value** in the array **3** will be displayed in the console.</i>

</p>
</details>