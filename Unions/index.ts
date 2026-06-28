// literal types (the type which is just the value itself and can't be changed to that) are mostly used with unions. 

type User = {
    username: string
    role: "guest" | "member" | "admin"
}
 // or
type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "member"