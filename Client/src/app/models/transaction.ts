export interface Transaction {
    id: number,
    sender: string,
    receiver: string,
    amount: number,
    form: string,
    action: string,
    date: string,
    message: string,
    status: number
}