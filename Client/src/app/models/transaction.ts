export interface Transaction {
    id: string,
    sender: string,
    receiver: string,
    amount: number,
    action: string,
    date: string,
    message: string
}