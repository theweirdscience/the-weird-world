import { convertLatLonToVec3 } from '../../utils/converters';

export class Marker {

    constructor(lat: number, lon: number, scene: THREE.Scene, circumference: number, payload) {
        const contextPosition = convertLatLonToVec3(lat, lon -= 90).multiplyScalar(circumference);

        const marker = new THREE.Mesh(new THREE.SphereGeometry(.3, .3, .2), new THREE.MeshBasicMaterial({ color: '#cf3f40', name: "location" }));

        marker.position.setX(contextPosition.x);
        marker.position.setY(contextPosition.y);
        marker.position.setZ(contextPosition.z);

        Object.assign(marker, payload);
        marker.name = "location";
        scene.add(marker);
    }

}