import { useModel } from '@@/exports';
import {Avatar, Button, Card, List, message, Result, Space} from 'antd';
import React, { useEffect, useState } from 'react';
import Search from "antd/es/input/Search";
import {listMyDataTaskByPage} from "@/services/data/dataController";
import {Link} from "react-router-dom";
import {RedoOutlined} from "@ant-design/icons";


/**
 * 我的文本页面
 * @constructor
 */
const MyDataPage: React.FC = () => {
  const initSearchParams = {
    current: 1,
    pageSize: 4,
    sortField: 'createTime',
    sortOrder: 'desc',

  };

  const [searchParams, setSearchParams] = useState<API.DataTaskQueryRequest>({ ...initSearchParams });
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  const [dataList, setDataList] = useState<API.DataTask[]>();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await listMyDataTaskByPage(searchParams);
      if (res.data) {
        setDataList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
        // 隐藏文本的 title
      } else {
        message.error('获取我的数据失败');
      }
    } catch (e: any) {
      message.error('获取我的数据失败，' +e.response.data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  return (
    <div className="my-data-page">
      <div>
        <Search placeholder="请输入数据名称" enterButton loading={loading} onSearch={(value) => {
          // 设置搜索条件
          setSearchParams({
            ...initSearchParams,
            name: value,
          })
        }}/>
        <Button type="primary" onClick={loadData} loading={loading} icon={<RedoOutlined />} style={{position:"absolute",right:'2px'}}></Button>
      </div>
      <div className="margin-16" />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        pagination={{
          onChange: (page, pageSize) => {
            setSearchParams({
              ...searchParams,
              current: page,
              pageSize,
            })
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: total,
        }}
        loading={loading}
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{ width: '100%' }}>
              <List.Item.Meta
                avatar={<Avatar src={currentUser && currentUser.userAvatar} />}
                title={item.name}
                description={item.textType ? '文本类型：' + item.textType : undefined}
              />
              <div style={{position:'absolute',right:'10px'}}>
                <Space wrap >
                  <Button>
                    <Link to={'/data/info/'+item.id}>查看</Link>
                  </Button>
                </Space>
              </div>

              <>
                {
                  item.status === 'wait' && <>
                    <Result
                      status="warning"
                      title="待生成"
                      subTitle={item.execMessage ?? '当前文本生成队列繁忙，请耐心等候'}
                    />
                  </>
                }
                {
                  item.status === 'running' && <>
                    <Result
                      status="info"
                      title="文本生成中"
                      subTitle={item.execMessage}
                    />
                  </>
                }
                {
                  item.status === 'succeed' && <>
                    <Result
                      status="success"
                      title="文本转换成功"
                      subTitle={item.execMessage}
                    />
                  </>
                }
                {
                  item.status === 'failed' && <>
                    <Result
                      status="error"
                      title="文本生成失败"
                      subTitle={item.execMessage}
                    />
                  </>
                }
              </>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MyDataPage;
