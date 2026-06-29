type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>; // Partial type to update the user.

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign
    const user = users.find(u => u.id === id);
    if (user) {
        return Object.assign(user, updates);
    }
    console.log("User not found!")
    return
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)