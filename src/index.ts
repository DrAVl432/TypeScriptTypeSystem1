// src/index.ts
import { Book } from './models';
import { BooksRepository } from './repository';

class InMemoryBooksRepository extends BooksRepository {
    private books: Book[] = [];

    createBook(book: Book): void {
        this.books.push(book);
    }

    getBook(id: number): Book | null {
        const book = this.books.find(b => b.id === id);
        return book || null;
    }

    getBooks(): Book[] {
        return this.books;
    }

    updateBook(id: number, updatedBook: Book): void {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) this.books[index] = updatedBook;
    }

    deleteBook(id: number): void {
        this.books = this.books.filter(b => b.id !== id);
    }
}

// Тестирование
const repo = new InMemoryBooksRepository();
const book1: Book = {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    genre: 'Dystopia',
    available: true
};

repo.createBook(book1);

console.log('Получение всех книг:', repo.getBooks());
console.log('Получение книги с ID 1:', repo.getBook(1));

repo.updateBook(1, { ...book1, title: 'Animal Farm' });
console.log('После обновления книги:', repo.getBooks());

repo.deleteBook(1);
console.log('После удаления книги:', repo.getBooks());