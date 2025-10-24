import React from 'react'
import { useEffect, useRef } from "react";

// Three.js Background Component
const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    // Dynamically import Three.js to avoid SSR issues
    const initThree = async () => {
      try {
        const THREE = await import("three");

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement);
        }

        // Create floating particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(posArray, 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.8,
        });

        const particlesMesh = new THREE.Points(
          particlesGeometry,
          particlesMaterial
        );
        scene.add(particlesMesh);

        // Create geometric shapes
        const geometries = [
          new THREE.BoxGeometry(0.1, 0.1, 0.1),
          new THREE.SphereGeometry(0.05, 8, 6),
          new THREE.ConeGeometry(0.05, 0.1, 6),
        ];

        const materials = [
          new THREE.MeshBasicMaterial({
            color: 0x4f46e5,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
          }),
          new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
          }),
          new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
          }),
        ];

        const shapes = [];
        for (let i = 0; i < 20; i++) {
          const geometry =
            geometries[Math.floor(Math.random() * geometries.length)];
          const material =
            materials[Math.floor(Math.random() * materials.length)];
          const mesh = new THREE.Mesh(geometry, material);

          mesh.position.x = (Math.random() - 0.5) * 10;
          mesh.position.y = (Math.random() - 0.5) * 10;
          mesh.position.z = (Math.random() - 0.5) * 10;

          mesh.rotation.x = Math.random() * Math.PI;
          mesh.rotation.y = Math.random() * Math.PI;

          scene.add(mesh);
          shapes.push(mesh);
        }

        camera.position.z = 5;

        sceneRef.current = scene;
        rendererRef.current = renderer;

        // Animation loop
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);

          // Rotate particles
          particlesMesh.rotation.x += 0.001;
          particlesMesh.rotation.y += 0.001;

          // Animate shapes
          shapes.forEach((shape, index) => {
            shape.rotation.x += 0.01 + index * 0.001;
            shape.rotation.y += 0.01 + index * 0.001;
            shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
          });

          renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      } catch (error) {
        console.log("Three.js not available, using fallback background");
      }
    };

    initThree();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none stellar-gradient-overlay"
    />
  );
};

export default ThreeBackground;

