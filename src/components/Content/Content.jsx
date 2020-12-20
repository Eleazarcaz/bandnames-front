import React from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';
import BandList from '../BandList/BandList';
import BandAdd from '../BandAdd/BandAdd';
import ChartBar from '../Chart/Chart';

const Content = () => {
  const { Content: ContentTemplate } = Layout;
  const { Title } = Typography;

  return (
    <ContentTemplate style={{ backgroundColor: 'white', padding: '50px' }}>
      <div style={{ margin: '0 100px' }}>
        <Title>Band Names</Title>
        <Divider />
        <Row>
          <Col>
            <ChartBar />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <BandList />
          </Col>
          <Col span={6} offset={6}>
            <BandAdd />
          </Col>
        </Row>
      </div>
    </ContentTemplate>
  );
};

export default Content;
