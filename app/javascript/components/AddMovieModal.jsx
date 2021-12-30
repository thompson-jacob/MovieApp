import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";



class AddMovieModal extends React.Component {
  formRef = React.createRef();
  state = { 
    visible: false,
  };

  onFinish = (values) => {
    // console.log("values = " + JSON.stringify(values))
    const url = "api/v1/movies/create";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((data) => {
      // event.preventDefault()
      // console.log("data = " + data['title'])
      // console.log("data = " + JSON.stringify(data))
      if (data.ok) {
        this.handleCancel();
        // console.log(data);
        return data.json();
      }
      throw new Error("Network error.")
    })
    .then(() => {
      this.props.reloadMovies();
    })
    .catch((err) => console.error("Error: " + err));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
      <Button type="primary" onClick={this.showModal}>
        Create New + 
        </Button>

        <Modal title="Add New Movie..." visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="title" label="Title" rules={[{ required: true, message: "Add movie title here!" }]}>
              <Input placeholder="Input your movie title" />
            </Form.Item>

            <Form.Item name="release" label="Release" rules={[{ required: true, message: "Add movie release date here!" }]}>
              <Input placeholder="Input your movie release date" />
            </Form.Item>

            <Form.Item
              name="reception"
              label="Reception"
              rules={[
                {required: true, message: "Please input the movies critical reception" }]}>
              <Input type="number" placeholder="How was the critical reception?" />  
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true, message: "Add movie description here!" }]}>
              <Input placeholder="Input your movie description" />
            </Form.Item>

            <Form.Item name="watch" label="Watch" rules={[{ required: true, message: "Add where to watch here!" }]}>
              <Input placeholder="What platforms can you watch on?" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
    </>
    );
  }
}

export default AddMovieModal;