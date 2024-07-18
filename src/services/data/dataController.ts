// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /dataApi/data/add */
export async function addDataTask(body: API.DataAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/dataApi/data/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/delete */
export async function deleteDataTask(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/dataApi/data/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/edit */
export async function editDataTask(body: API.DataEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/dataApi/data/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/gen */
export async function genDataTaskAi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAiParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/dataApi/data/gen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
      genDataTaskByAiRequest: undefined,
      ...params['genDataTaskByAiRequest'],
    },
    data: body,
    ...(options || {}),
  });
}

/** genDataTaskAsyncAiMq POST /dataApi/data/gen/async/mq */
export async function genDataTaskAsyncAiMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseAiResponse>('/dataApi/data/gen/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/gen/async/rebuild */
export async function genDataTaskAsyncAiRebuild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiRebuildParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/dataApi/data/gen/async/rebuild', {
    method: 'POST',
    params: {
      ...params,
      dataRebuildRequest: undefined,
      ...params['dataRebuildRequest'],
    },
    ...(options || {}),
  });
}

/** genDataTaskAsyncAiMq POST /dataApi/data/gen/async/mq */
export async function genDataCleanTaskAsyncAiMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseAiResponse>('/dataApi/data/genClean/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/gen/async/rebuild */
export async function genDataCleanTaskAsyncAiRebuild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiRebuildParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/dataApi/data/genClean/async/rebuild', {
    method: 'POST',
    params: {
      ...params,
      dataRebuildRequest: undefined,
      ...params['dataRebuildRequest'],
    },
    ...(options || {}),
  });
}

/** genDataTaskAsyncAiMq POST /dataApi/data/gen/async/mq */
export async function genDataChooseTaskAsyncAiMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseAiResponse>('/dataApi/genChoose/gen/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/gen/async/rebuild */
export async function genDataChooseTaskAsyncAiRebuild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiRebuildParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/dataApi/data/genChoose/async/rebuild', {
    method: 'POST',
    params: {
      ...params,
      dataRebuildRequest: undefined,
      ...params['dataRebuildRequest'],
    },
    ...(options || {}),
  });
}

/** genDataTaskAsyncAiMq POST /dataApi/data/gen/async/mq */
export async function genDataFormTaskAsyncAiMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseAiResponse>('/dataApi/genForm/gen/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/gen/async/rebuild */
export async function genDataFormTaskAsyncAiRebuild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genDataTaskAsyncAiRebuildParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/dataApi/data/genForm/async/rebuild', {
    method: 'POST',
    params: {
      ...params,
      dataRebuildRequest: undefined,
      ...params['dataRebuildRequest'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /dataApi/data/get */
export async function getDataTaskById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDataTaskByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDataTask>('/dataApi/data/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /dataApi/data/get/vo */
export async function getDataTaskVOById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDataTaskVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDataTaskVO>('/dataApi/data/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/list/page */
export async function listDataTaskByPage(
  body: API.DataTaskQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDataTask>('/dataApi/data/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/my/list/page */
export async function listMyDataTaskByPage(
  body: API.DataTaskQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDataTask>('/dataApi/data/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/my/update */
export async function updateMyDataTask(
  body: API.DataUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/dataApi/data/my/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dataApi/data/update */
export async function updateDataTask(
  body: API.DataUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/dataApi/data/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
