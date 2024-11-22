// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as __ from './../_';

export function _BookAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Book extends _._cuidAspect(Base) {
    declare name?: string | null
    declare author?: __.Association.to<Author> | null
    declare author_ID?: __.Key<string> | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: typeof _.cuid.actions & Record<never, never>
      declare static readonly keys: __.KeysOf<Book>
  };
}
export class Book extends _BookAspect(__.Entity) {}
Object.defineProperty(Book, 'name', { value: 'db.Books' })
Object.defineProperty(Book, 'is_singular', { value: true })
export class Books extends Array<Book> {$count?: number}
Object.defineProperty(Books, 'name', { value: 'db.Books' })

export function _AuthorAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Author extends _._cuidAspect(Base) {
    declare books?: __.Composition.of.many<Books>
    declare lastPublishedBook?: __.Association.to<Book> | null
    declare lastPublishedBook_ID?: __.Key<string> | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: typeof _.cuid.actions & Record<never, never>
      declare static readonly keys: __.KeysOf<Author>
  };
}
export class Author extends _AuthorAspect(__.Entity) {}
Object.defineProperty(Author, 'name', { value: 'db.Authors' })
Object.defineProperty(Author, 'is_singular', { value: true })
export class Authors extends Array<Author> {$count?: number}
Object.defineProperty(Authors, 'name', { value: 'db.Authors' })
