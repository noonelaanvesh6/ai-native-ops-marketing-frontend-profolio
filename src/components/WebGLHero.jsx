import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mount = mountRef.current;
    if (!mount) return;

    // Use window dimensions directly — never measure the parent
    // Parent is min-height so offsetHeight is unreliable on first paint
    const getW = () => window.innerWidth;
    const getH = () => window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(getW(), getH());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, getW() / getH(), 0.1, 1000);
    camera.position.set(0, 0, 32);

    const COLS = getW() < 768 ? 24 : 42;
    const ROWS = getW() < 768 ? 14 : 24;
    const COUNT = COLS * ROWS;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const ox = new Float32Array(COUNT);
    const oy = new Float32Array(COUNT);

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const n = i * COLS + j;
        const x = (j - COLS / 2) * 1.6;
        const y = (i - ROWS / 2) * 1.6;
        pos[n * 3] = x;
        pos[n * 3 + 1] = y;
        pos[n * 3 + 2] = 0;
        ox[n] = x;
        oy[n] = y;
        col[n * 3] = 0.78;
        col[n * 3 + 1] = 1.0;
        col[n * 3 + 2] = 0.0;
      }
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    let tx = 0,
      ty = 0,
      cx2 = 0,
      cy2 = 0,
      t = 0;

    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 16;
      ty = -(e.clientY / window.innerHeight - 0.5) * 10;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      camera.aspect = getW() / getH();
      camera.updateProjectionMatrix();
      renderer.setSize(getW(), getH());
    };
    window.addEventListener("resize", onResize);

    let animRaf;
    const animate = () => {
      animRaf = requestAnimationFrame(animate);
      t += 0.007;
      const p = geo.attributes.position.array;
      const c = geo.attributes.color.array;
      for (let n = 0; n < COUNT; n++) {
        const z =
          Math.sin(ox[n] * 0.28 + t) * 1.8 +
          Math.cos(oy[n] * 0.28 + t * 0.65) * 1.8;
        p[n * 3 + 2] = z;
        const v = (z + 3.6) / 7.2;
        c[n * 3] = 0.78 + v * 0.22;
        c[n * 3 + 1] = 1.0 - v * 0.82;
        c[n * 3 + 2] = v * 0.33;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      cx2 += (tx - cx2) * 0.045;
      cy2 += (ty - cy2) * 0.045;
      camera.position.x = cx2;
      camera.position.y = cy2;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRaf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
      aria-hidden="true"
    />
  );
}
