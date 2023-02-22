// imports vtkOBJReader
import '@kitware/vtk.js/IO/Misc/OBJReader';
import { GeometryRepresentation, Reader, View } from 'react-vtk-js';

// React complains about unique key prop but I don't see why
function Example(props) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <View>
        <GeometryRepresentation property={{ color: [0.3, 0.3, 0.3] }}>
          <Reader
            vtkClass='vtkOBJReader'
            url='https://kitware.github.io/vtk-js-datasets/data/obj-mtl/star-wars-vader-tie-fighter.obj'
          />
        </GeometryRepresentation>
      </View>
    </div>
  );
}

export default Example;
