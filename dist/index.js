"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
class InMemoryBooksRepository extends repository_1.BooksRepository {
    constructor() {
        super(...arguments);
        this.books = [];
    }
    createBook(book) {
        this.books.push(book);
    }
    getBook(id) {
        const book = this.books.find(b => b.id === id);
        return book || null;
    }
    getBooks() {
        return this.books;
    }
    updateBook(id, updatedBook) {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1)
            this.books[index] = updatedBook;
    }
    deleteBook(id) {
        this.books = this.books.filter(b => b.id !== id);
    }
}
// Тестирование
const repo = new InMemoryBooksRepository();
const book1 = {
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
repo.updateBook(1, Object.assign(Object.assign({}, book1), { title: 'Animal Farm' }));
console.log('После обновления книги:', repo.getBooks());
repo.deleteBook(1);
console.log('После удаления книги:', repo.getBooks());
