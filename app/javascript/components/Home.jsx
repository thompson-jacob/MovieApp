import { Layout } from "antd";
import React from "react";
import Movies from "./Movies";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Movie Catalog</h1>
        <Movies />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>JT ©2021.</Footer>
  </Layout>
);