export interface DocumentInput<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Metadata extends Record<string, any> = Record<string, any>
> {
  pageContent: string;

  metadata?: Metadata;
  queryId?: string;
  resultId?: string;
}

export interface DocumentInterface<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Metadata extends Record<string, any> = Record<string, any>
> {
  pageContent: string;

  metadata: Metadata;
  queryId?: string;
  resultId?: string;
}

/**
 * Interface for interacting with a document.
 */
export class Document<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Metadata extends Record<string, any> = Record<string, any>
> implements DocumentInput, DocumentInterface
{
  pageContent: string;

  metadata: Metadata;
  queryId?: string;
  resultId?: string;
  constructor(fields: DocumentInput<Metadata>) {
    this.pageContent = fields.pageContent
      ? fields.pageContent.toString()
      : this.pageContent;
    this.metadata = fields.metadata ?? ({} as Metadata);
    this.queryId = fields.queryId;
    this.resultId = fields.resultId;
  }
}
