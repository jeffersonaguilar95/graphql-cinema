import { Info } from './generatedTypes';
import { Model as ModelMongoose, Document } from 'mongoose';

export async function generateInfo(Model: ModelMongoose<Document>, page: number, limit: number): Promise<Info> {
  const totalRecords = await Model.countDocuments({}).exec();
  const totalPages = Math.ceil(totalRecords / limit);
  const prevPage = page - 1;
  const nextPage = page + 1;

  return {
    totalRecords,
    limit,
    page,
    totalPages,
    nextPage: nextPage <= totalPages ? nextPage : null,
    prevPage: prevPage > 0 ? (prevPage <= totalPages ? prevPage : totalPages) : null
  };
}
