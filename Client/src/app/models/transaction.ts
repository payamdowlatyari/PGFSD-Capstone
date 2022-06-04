export interface Transaction {
    id: string,
    tid: string,
    accountNumber: string,
    toAccountNumber: string,
    sender: string,
    receiver: string,
    amount: number,
    action: string,
    date: string,
    message: string
}