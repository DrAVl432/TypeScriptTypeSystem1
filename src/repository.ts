// src/repository.ts
import { Book } from './models';

export abstract class BooksRepository {
    abstract createBook(book: Book): void;
    abstract getBook(id: number): Book | null;
    abstract getBooks(): Book[];
    abstract updateBook(id: number, updatedBook: Book): void;
    abstract deleteBook(id: number): void;
}