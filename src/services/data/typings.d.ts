declare namespace API {
  type AiResponse = {
    resultId?: number;
  };

  type BaseResponseAiResponse = {
    code?: number;
    data?: AiResponse;
    message?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageDataTask = {
    code?: number;
    data?: PageDataTask;
    message?: string;
  };

  type BaseResponseDataTask = {
    code?: number;
    data?: DataTask;
    message?: string;
  };

  type BaseResponseDataTaskVO = {
    code?: number;
    data?: DataTaskVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type genDataTaskAiParams = {
    genDataTaskByAiRequest: GenDataTaskByAiRequest;
  };

  type genDataTaskAsyncAiMqParams = {
    genDataTaskByAiRequest: GenDataTaskByAiRequest;
  };

  type genDataTaskAsyncAiRebuildParams = {
    dataRebuildRequest: DataRebuildRequest;
  };

  type GenDataTaskByAiRequest = {
    name?: string;
    aim?: string;
    textType?: string;
  };

  type getDataTaskByIdParams = {
    id: number;
  };

  type getDataTaskVOByIdParams = {
    id: number;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageDataTask = {
    records?: DataTask[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: number;
    pages?: number;
  };

  type DataAddRequest = {
    name?: string;
    textType?: string;
  };

  type DataEditRequest = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    userId?: number;
    status?: string;
  };

  type DataRebuildRequest = {
    id?: number;
  };

  type DataTask = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    userId?: number;
    status?: string;
    execMessage?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
    aim?: string;
  };

  type DataTaskQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    userId?: number;
    status?: string;
  };

  type DataTaskVO = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    status?: string;
    createTime?: string;
  };

  type DataUpdateRequest = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    status?: string;
    execMessage?: string;
  };
}
