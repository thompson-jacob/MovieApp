import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddMovieModal from "./AddMovieModal.jsx";

class Movies extends React.Component {
  columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Release",
      dataIndex: "release",
      key: "release",
    },
    {
      title: "Reception",
      dataIndex: "reception",
      key: "reception",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Watch",
      dataIndex: "watch",
      key: "watch",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm title="Are you sure to delete this movie?" onConfirm={() => this.deleteMovie(record.id)} okText="Yes" cancelText="No">
          <a href="#" type="danger">
            Delete{"Movie Deleted"}
          </a>
        </Popconfirm>
      ),
    },
  ];


state = {
  movies: [],
};

componentDidMount() {
  this.loadMovies();
}

loadMovies = () => {
  const url = "api/v1/movies/index";
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("Network error.");
    })
    .then((data) => {
      data.forEach((movie) => {
        const newEl = {
          key: movie.id,
          id: movie.id,
          title: movie.title,
          release: movie.release,
          reception: movie.reception,
          description: movie.description,
          watch: movie.watch,
        };

        this.setState((prevState) => ({
          movies: [...prevState.movies, newEl],
        }));
      });
    })
    .catch((err) => message.error("Error: " + err));
};

reloadMovies = () => {
  this.setState({ movies: [] });
  this.loadMovies();
}

deleteMovie = (id) => {
  const url = `api/v1/movies/${id}`;

  fetch(url, {
    method: "delete",
  })
    .then((data) => {
      if (data.ok) {
        this.reloadMovies();
        return data.json();
      }
      throw new Error("Network error.");
    })
    .catch((err) => message.error("Error: " + err));
};

  render() {
    return (
      <> 
      <Table className="table-striped-rows" dataSource={this.state.movies} columns={this.columns} pagination={{ pageSize: 10 }} />
      <AddMovieModal reloadMovies={this.reloadMovies} />
      </>
    );
  }
}

export default Movies;