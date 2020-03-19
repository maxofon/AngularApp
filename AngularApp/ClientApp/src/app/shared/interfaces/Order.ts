export interface Order {
    id?: string
    name: string
    surname: string
    address: string
    phone: string
    email: string
    amount?: number
    orderTime?: Date
}
