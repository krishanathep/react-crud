import axios from "axios";
import React, { useState, useEffect } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      //setLoading(true);
      const res = await axios.get(
        "https://www.full-stack-app.com/demos/public/api/photos"
      );
      //console.log(res.data.photos);
      setPhotos(res.data.photos);
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Photos Page</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="link">Home</a>
                </li>
                <li className="breadcrumb-item active">Photos Page</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Photos</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Path</th>
                  <th>Status</th>
                  <th>Create date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {photos.map((photo) => {
                  return (
                    <tr key={photo.id}>
                      <td>{ photo.id }</td>
                      <td>{ photo.photo_name }</td>
                      <td>{ photo.photo_size }</td>
                      <td>{ photo.photo_url }</td>
                      <td>{ photo.photo_status }</td>
                      <td>{ photo.created_at }</td>
                      <td>
                          <button className='btn btn-info'><i class="fas fa-eye"></i></button>
                          <button className='btn btn-primary ml-1 mr-1'><i class="fas fa-edit"></i></button>
                          <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
