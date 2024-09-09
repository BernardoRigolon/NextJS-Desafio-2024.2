export type Card = {
    id: number;
    title: string;
    description: string | null;
    image: string;
    price: number;
}

export type IndivCard = {
    id: number;
    title: string;
    description: string | null;
    image: string;
    price: number;
} | null