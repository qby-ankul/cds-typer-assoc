namespace db;
using { cuid } from '@sap/cds/common';


entity Books : cuid {
   name: String;
   author: Association to one Authors;
}

entity Authors : cuid {
   books: Composition of many Books on books.author = $self;
   lastPublishedBook: Association to one Books;
}