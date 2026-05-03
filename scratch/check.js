const fs = require('fs');

// We don't have gltf parser installed easily in node, but we can just use three.js in a quick node script if we use JSDOM, or we can just use the provided @react-three/drei's gltfx tool if it's there.
// Actually, `npx gltfjsx public/assets/cup.glb` is a standard way to generate the component!
