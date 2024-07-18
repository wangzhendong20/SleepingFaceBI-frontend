import { UploadOutlined } from '@ant-design/icons';
import {Button, Card, Col, Divider, Form, Input, message, Row, Select, Space, Spin, Upload} from 'antd';
import React, { useState } from 'react';
import {
  genDataTaskAsyncAiMq

} from "@/services/data/dataController";
import {useForm} from "antd/es/form/Form";
/**
 * 添加文本（异步）页面
 * @constructor
 */
const AddDataMQ: React.FC = () => {
  const [form] = useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);

  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    // 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await  genDataTaskAsyncAiMq(params, {}, values.file.file.originFileObj);
      if (!res?.data) {
        message.error('分析失败');
      } else {
        message.success('分析任务提交成功，稍后请在我的数据页面查看');
        form.resetFields();
      }
    } catch (e: any) {
      message.error('分析失败，' + e.response.data.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="add-data-async">
      <Card title="数据清洗">
        <Form form={form} name="addData" labelAlign="left" labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }} onFinish={onFinish} initialValues={{}}>
          <Form.Item name="name"
                     label="数据名称"
                     rules={[{ required: true, message: '请输入数据' }]}
          >
            <Input placeholder="请输入转换后的数据名称" />

          </Form.Item>
          <Form.Item name="aim"
                     label="目标"
                     rules={[{ required: true, message: '请输入目标' }]}
          >
            <Input placeholder="请输入目标" />

          </Form.Item>
          <Form.Item name="textType" label="数据类型"  rules={[{ required: true, message: '类型不能为空' }]}>
            <Select
              options={[
                { value: 'xlsx', label: 'xlsx格式' },
                { value: 'csv', label: 'csv格式' },
              ]}
            />
          </Form.Item>
          <Form.Item name="file" label="原始数据"  rules={[{ required: true, message: '笔记不能为空' }]}>
            <Upload name="file" maxCount={1}>
              <Button icon={<UploadOutlined />}>上传 xlsx/csv 文件</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
                提交
              </Button>
              <Button htmlType="reset">重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default AddDataMQ;
