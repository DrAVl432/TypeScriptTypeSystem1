// src/models.ts

export interface Book {
    id: number;
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
    available: boolean;
}