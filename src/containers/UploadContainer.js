import React, { Component } from 'react';
import PlantForm from './PlantForm';

export default class UploadContainer extends Component {
  render() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-10">
          <PlantForm />
        </div>
      </div>
    );
  }
}
