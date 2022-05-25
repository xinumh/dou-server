import Book from '../models/book'

export async function insert (ctx) {
  const hasBook = await Book.findOne({title: '1'})
  if (hasBook) {
    ctx.throw(400, 'Book 已存在')
  }

  const book = await new Book({title: '2'}).save()
  ctx.body = book
}