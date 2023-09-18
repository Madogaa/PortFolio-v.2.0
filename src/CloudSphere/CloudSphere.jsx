import React, { useEffect, useRef } from "react";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";
import "./CloudSphere.css";

function CloudSphere() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      62,
      1200 / 900,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({alpha:true});
    scene.background = null;
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const technologies = ["Java", "Python", "HTML", "CSS", "JavaScript"];
    const technologiesUpper = ["JPA", "Django", "Spring", "Tailwind"];
    const technologiesLower = ["BootStrap", "Git", "MySQL", "Kotlin"];
    const Upper = "React";
    const Lower = "Node";

    const textMaterials = [];
    const textObjects = [];

    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        createTextRing(technologies, 6, 0, group, font, textMaterials, textObjects);

        createTextRing(technologiesUpper, 6, 0.5, group, font, textMaterials, textObjects);

        createTextRing(technologiesLower, 6, -0.5, group, font, textMaterials, textObjects);

        createTextAtPole(Upper, 6, Math.PI / 2, group, font, textMaterials, textObjects);

        createTextAtPole(Lower, 6, -Math.PI / 2, group, font, textMaterials, textObjects);

        animateTextFloat();
      }
    );

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0,
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    camera.position.z = 15;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.005;
    controls.minPolarAngle = (80 * Math.PI) / 180;
    controls.maxPolarAngle = (100 * Math.PI) / 180;
    controls.enableZoom = false;

    function animateTextFloat() {
      textObjects.forEach((textMesh) => {
        const initialY = textMesh.position.y;
        const speed = Math.random() * 0.003 - 0.001; // Ajusta la velocidad según tu preferencia

        function update() {
          textMesh.position.y = initialY + Math.sin(Date.now() * speed) * 0.2;
        }

        function animate() {
          update();
          requestAnimationFrame(animate);
        }

        animate();
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      textObjects.forEach((textMesh, index) => {
        const lookAtPosition = camera.position.clone();
        lookAtPosition.y = textMesh.position.y;
        textMesh.lookAt(lookAtPosition);
      });
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  function createTextAtPole(text, radius, polarAngle, group, font, textMaterials, textObjects) {
    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 0.5,
      height: 0.1,
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    const x = 0;
    const y = radius * Math.sin(polarAngle);
    const z = 0;

    textMesh.position.set(x, y, z);

    group.add(textMesh);
    textMaterials.push(textMaterial);
    textObjects.push(textMesh);
  }

  function createTextRing(technologies, radius, inclination, group, font, textMaterials, textObjects) {
    technologies.forEach((tech, index) => {
      const textGeometry = new TextGeometry(tech, {
        font: font,
        size: 0.5,
        height: 0.1,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      const angle = (index / technologies.length) * Math.PI * 2;

      const x = Math.cos(angle) * radius * Math.cos(inclination);
      const y = radius * Math.sin(inclination);
      const z = Math.sin(angle) * (radius) * Math.cos(inclination);

      textMesh.position.set(x, y, z);

      textMesh.lookAt(0, 0, 0);

      group.add(textMesh);
      textMaterials.push(textMaterial);
      textObjects.push(textMesh);
    });
  }

  return (
    <div
      id="cloud-sphere"
      ref={containerRef}
      style={{ position: "relative"}}
    ></div>
  );
}

export default CloudSphere;

