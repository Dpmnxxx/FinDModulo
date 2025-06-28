// Task 3: addUser(first_name, last_name, email)

export async function listUsers() {
    const response = await fetch("http://localhost:3000/users");
    console.log(await response.json());
}
