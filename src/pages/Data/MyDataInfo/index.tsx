import {useModel} from '@@/exports';
import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router";
import DataArea from "antd/es/input/DataArea";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter' // 代码高亮
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Avatar, Button, Card, Col, message, Result, Row} from "antd";
import {
  genDataTaskAsyncAiRebuild,
  getDataTaskVOById, updateMyDataTask
} from "@/services/data/dataController";
import Meta from "antd/es/card/Meta";
import {RedoOutlined} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";

/**
 * 我的数据页面
 * @constructor
 */
const MyDataPageInfo: React.FC = () => {
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState ?? {};
  const params = useParams();
  const [dataTaskInfo, setDataTaskInfo] = useState<API.DataTaskVO>();
  const [dataInfo, setDataInfo] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * 页面初始化
   */
  const loadData = async () => {
    try {
      const res = await getDataTaskVOById({
        id: params.id,
      });
      if (res.data) {
        setDataTaskInfo(res.data ?? []);
        if (res.data.status === "succeed"){
          setDataInfo(res.data.genTextContent)
        }
        // 隐藏图表的 title
      } else {
        message.error('获取我的图表失败');
      }
    } catch (e: any) {
      message.error('获取我的图表失败，' +e.response.data.message);
    }
  };
  /**
   * 钩子
   */
  useEffect(() => {
    loadData();
  }, []);
  /**
   * 保存数据
   */
  const saveData = async () =>{
    try {
      const res = await updateMyDataTask({
        id: params.id,
        genTextContent: dataInfo
      });
      if (res.data) {
        message.success("保存成功")
        // 隐藏图表的 title
      } else {
        message.error('保存失败');
      }
    } catch (e: any) {
      message.error('保存失败，' +e.response.data.message);
    }

  }

  /**
   * 重新生成
   */
  const rebuild = async () => {
    setLoading(true);
    if (!params.id) {
      message.error("数据不存在");
      return;
    }
    try {
      const res = await genDataTaskAsyncAiRebuild({
        id: params.id,
      });
      if (!res?.data) {
        message.error('重新分析失败');
      } else {
        message.success('分析任务提交成功，稍后请在我的数据页面查看');
        history.back()
      }
    } catch (e: any) {
      message.error('分析失败，' +e.response.data.message);
    }
    setLoading(false);
  };

  /**
  双向绑定
   */
  const handleMdChange = (e: React.ChangeEvent<HTMLInputElement | HTMLDataAreaElement>) => {
    console.log('Change:', e.target.value);
    setDataInfo(e.target.value)
  };



  return (
    <div className="my-chart-page">
      <div className="margin-16"/>
      <Row gutter={24}>
        <Col span={12}>
          <Card style={{width: '100%'}}>
            <Meta
              avatar={<Avatar src={currentUser && currentUser.userAvatar}/>}
              title={dataTaskInfo?.name}
              description={
                dataTaskInfo?.status==='succeed'&&<>
                <Button type={"primary"} style={{margin:"5px",float:"right"}} onClick={saveData} icon={<RedoOutlined />}>保存</Button>
              </>
              }
            />
            <DataArea autoSize showCount value={dataInfo} style={{margin:'5px',float:"right"}} onChange={handleMdChange} />
          </Card>
          {
          dataTaskInfo?.status==='failed'&&<>
            <Button type={"primary"} style={{margin:"5px"}} onClick={rebuild} icon={<RedoOutlined />}>重新生成</Button>
          </>
         }
        </Col>
        <Col span={12}>
          <Card style={{width: '100%'}}>
            <Meta
              title="数据展示"
              description={dataTaskInfo?.textType ? '数据类型：' + dataTaskInfo?.textType : undefined}
            />
            <ReactMarkdown
              className='markdown-body'
              children={dataInfo}
              remarkPlugins={[remarkGfm, { singleTilde: false }]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            />
            <>
            </>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default MyDataPageInfo;
