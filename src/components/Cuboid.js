'use client'

import {
    useEffect,
    useRef
} from 'react';
import * as THREE from 'three';

const Cuboid = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        // scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

           // Lighting setup
           const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
           scene.add(ambientLight);

           const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
           directionalLight.position.set(5, 5, 5).normalize();
           scene.add(directionalLight);

        // Cuboid setup
        const geometry = new THREE.BoxGeometry(2, 1, 3);
        const material = new THREE.MeshBasicMaterial({
            color: 0x4F4F4F
        });
        const Cuboid = new THREE.Mesh(geometry, material);
        scene.add(Cuboid);

        camera.position.z = 5;

        // Animation loop
        // Allows user to see the rendered cuboid
        const animate = function () {
            requestAnimationFrame(animate);
            // rotates at 60 frames per second
            Cuboid.rotation.x += 0.01;
            Cuboid.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref = {
        mountRef
    }
    />;
};

export default Cuboid;
