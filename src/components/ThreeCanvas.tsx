import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // SCENE & SYSTEM COLOR PALETTE
    const scene = new THREE.Scene();
    
    // Background is transparent to blend with the warm off-white (#F2EDE4) page
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Dynamic 2D Scroll Canvas for MacBook Screen Texture
    const scrollCanvas = document.createElement("canvas");
    scrollCanvas.width = 512;
    scrollCanvas.height = 1024;
    const ctx = scrollCanvas.getContext("2d");
    const texture = new THREE.CanvasTexture(scrollCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    // Render design layouts on 2D Screen Canvas
    let bgScrollY = 0;
    const drawScrollContent = () => {
      if (!ctx) return;
      
      const w = scrollCanvas.width;
      const h = scrollCanvas.height;

      // Draw paper bag style texture background
      ctx.fillStyle = "#161514"; // Charcoal dark mode for demo screen contrast
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(0, -bgScrollY);

      // Repeat layout twice to loop seamlessly
      const drawSingleLayout = (offsetY: number) => {
        // Main structural line
        ctx.strokeStyle = "rgba(140, 123, 110, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(w * 0.1, offsetY);
        ctx.lineTo(w * 0.1, offsetY + 512);
        ctx.moveTo(w * 0.9, offsetY);
        ctx.lineTo(w * 0.9, offsetY + 512);
        ctx.stroke();

        // Logo
        ctx.fillStyle = "#F2EDE4";
        ctx.font = "bold 20px 'Playfair Display', Georgia, serif";
        ctx.fillText("ROVOCHÉ", w * 0.15, offsetY + 50);

        // Subtitle
        ctx.fillStyle = "#8C7B6E";
        ctx.font = "9px 'DM Sans', sans-serif";
        ctx.fillText("ARCHITECTURAL ATELIER", w * 0.15, offsetY + 70);

        // Elegant block
        ctx.fillStyle = "#5C1A1A"; // Deep Burgundy block
        ctx.fillRect(w * 0.15, offsetY + 100, w * 0.7, 180);

        // Inset card text
        ctx.fillStyle = "#F2EDE4";
        ctx.font = "italic 16px 'Playfair Display', serif";
        ctx.fillText("Form Follows Strategy", w * 0.2, offsetY + 180);
        ctx.font = "8px 'DM Sans', sans-serif";
        ctx.fillText("SYSTEM N°04", w * 0.2, offsetY + 230);

        // Three columns layout bottom
        ctx.fillStyle = "rgba(140, 123, 110, 0.15)";
        ctx.fillRect(w * 0.15, offsetY + 300, w * 0.2, 50);
        ctx.fillRect(w * 0.4, offsetY + 300, w * 0.2, 50);
        ctx.fillRect(w * 0.65, offsetY + 300, w * 0.2, 50);

        ctx.fillStyle = "#8C7B6E";
        ctx.font = "9px 'DM Sans', sans-serif";
        ctx.fillText("01 / WORK", w * 0.15, offsetY + 370);
        ctx.fillText("02 / LAB", w * 0.4, offsetY + 370);
        ctx.fillText("03 / ARCHIVE", w * 0.65, offsetY + 370);

        // Beautiful horizontal lines
        ctx.strokeStyle = "rgba(140, 123, 110, 0.2)";
        ctx.beginPath();
        ctx.moveTo(w * 0.15, offsetY + 400);
        ctx.lineTo(w * 0.85, offsetY + 400);
        ctx.stroke();

        // Footer lines
        ctx.fillStyle = "#F2EDE4";
        ctx.font = "14px 'Playfair Display', Georgia, serif";
        ctx.fillText("Unshakeable Ground.", w * 0.15, offsetY + 440);
      };

      drawSingleLayout(0);
      drawSingleLayout(512);

      ctx.restore();

      // Scroll speed
      bgScrollY += 1.2;
      if (bgScrollY >= 512) {
        bgScrollY = 0;
      }
      texture.needsUpdate = true;
    };

    // STUDIO LIGHTS - CRITICAL FOR SHARP DETAILS
    const ambientLight = new THREE.AmbientLight(0xf2ede4, 1.2);
    scene.add(ambientLight);

    // Strong Key Light with shadows
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Deep Burgundy rim light from bottom left back
    const rimLight = new THREE.DirectionalLight(0x5c1a1a, 4.0);
    rimLight.position.set(-6, -2, -3);
    scene.add(rimLight);

    // Subtle blue/gray fill light for shadows refinement
    const fillLight = new THREE.DirectionalLight(0x8c7b6e, 1.0);
    fillLight.position.set(-4, 4, 3);
    scene.add(fillLight);

    // MAIN GROUP FOR ROTATION COMPOSITE
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. PROCEDURAL 3D DEFORMED ROCK/MOUNTAIN PEAK (BufferGeometry)
    const rockGeometry = new THREE.ConeGeometry(2.4, 3.2, 5, 4); // Low poly cone
    
    // Deform vertices to make the rock look organic, raw, and architectural
    const posAttr = rockGeometry.attributes.position;
    const vertex = new THREE.Vector3();
    const tempMatrix = new THREE.Matrix4();
    
    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);
      
      // Randomize vertex factors except at the absolute base
      if (vertex.y > -1.5) {
        vertex.x += (Math.random() - 0.5) * 0.65;
        vertex.z += (Math.random() - 0.5) * 0.65;
        vertex.y += (Math.random() - 0.5) * 0.25;
      }
      
      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    rockGeometry.computeVertexNormals();

    const rockMaterial = new THREE.MeshStandardMaterial({
      color: 0x8C7B6E,          // Muted stone gray
      roughness: 0.95,          // High roughness for raw concrete texture
      metalness: 0.05,
      flatShading: true,       // CRITICAL FOR BRUTALIST GRID ACCENT PLANES
    });

    const rockMesh = new THREE.Mesh(rockGeometry, rockMaterial);
    rockMesh.position.set(0, -1.2, 0);
    rockMesh.receiveShadow = true;
    rockMesh.castShadow = true;
    mainGroup.add(rockMesh);

    // 2. PROCEDURAL MACBOOK 3D FRAME MODEL (MATTE-CHARCOAL GEOMETRIES)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.4, 0); // Sits resting beautifully on peak of rock
    laptopGroup.rotation.set(0.08, -0.65, -0.05); // Elegant slight angle
    mainGroup.add(laptopGroup);

    // Base of MacBook: Wide flat box
    const baseGeo = new THREE.BoxGeometry(2.4, 0.06, 1.7);
    const laptopMat = new THREE.MeshStandardMaterial({
      color: 0x1A1614, // Near-black charcoal matte
      roughness: 0.7,
      metalness: 0.15,
      flatShading: true,
    });
    const baseMesh = new THREE.Mesh(baseGeo, laptopMat);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptopGroup.add(baseMesh);

    // Lid Screen frame: Slightly thinner, rotated back around its base
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.03, -0.82); // Anchor hinge point
    lidGroup.rotation.x = -Math.PI / 2 - 0.22; // Rotated slightly open
    laptopGroup.add(lidGroup);

    const lidGeo = new THREE.BoxGeometry(2.4, 1.6, 0.05);
    const lidMesh = new THREE.Mesh(lidGeo, laptopMat);
    // Offset lidMesh so hinge acts correctly
    lidMesh.position.set(0, 0.8, 0);
    lidMesh.castShadow = true;
    lidGroup.add(lidMesh);

    // MacBook Emissive Display Screen Panel
    const screenGeo = new THREE.PlaneGeometry(2.28, 1.48);
    const screenMat = new THREE.MeshStandardMaterial({
      map: texture,
      emissiveMap: texture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.85,
      roughness: 0.1,
      metalness: 0.9,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.8, 0.03); // Sits on top of the front lid cover
    lidGroup.add(screenMesh);

    // 3. SEAMLESS MOUSE REACTION SYSTEM (LERPED ROTATE COMPOSITE)
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Scale dynamic cursor triggers
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      
      targetRot.y = normX * 0.45; // Turn left & right
      targetRot.x = normY * 0.22; // Tilt up & down
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation frames controller
    let animationFrameId: number;
    let autoRotationAngle = 0;

    const animateLoop = () => {
      // Live updates for screen contents
      drawScrollContent();

      // Horizontal autospin switch for responsive touchscreens state fallback
      const isTouch = window.matchMedia("(pointer: coarse)").matches;

      if (isTouch) {
        autoRotationAngle += 0.0035;
        mainGroup.rotation.y = autoRotationAngle;
        mainGroup.rotation.x = 0.12;
      } else {
        // Dampening smooth lerp algorithm for orbital dynamic tilting
        currentRot.y += (targetRot.y - currentRot.y) * 0.055;
        currentRot.x += (targetRot.x - currentRot.x) * 0.055;

        mainGroup.rotation.y = currentRot.y - 0.2; // Slight aesthetic default offset
        mainGroup.rotation.x = currentRot.x + 0.1;
      }

      // Beautiful constant subtle floating of the entire mount peak
      const floatVal = Math.sin(Date.now() * 0.001) * 0.035;
      rockMesh.position.y = -1.25 + floatVal;
      laptopGroup.position.y = 0.35 + floatVal;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animateLoop();

    // Resize container trigger
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const entry = entries[0];
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
      
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });

    resizeObserver.observe(container);

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Dispose materials & geometries safely
      rockGeometry.dispose();
      rockMaterial.dispose();
      baseGeo.dispose();
      laptopMat.dispose();
      lidGeo.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
      aria-hidden="true"
    />
  );
}
