export interface Transaction {
    id: number,
    sender: string,
    receiver: string,
    amount: number,
    action: string,
    date: string,
    message: string
}