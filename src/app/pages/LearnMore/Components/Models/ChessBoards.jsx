import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { LoopOnce } from 'three';
import { useFrame } from '@react-three/fiber';

const ChessBoard = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/chess_1.glb');
  const { actions } = useAnimations(animations, group);

  const playAnimation = () => {
    const action = actions['Take 001']; // Reference the animation by its name
    if (action) {
      action.reset().setLoop(LoopOnce, 1).clampWhenFinished = true; // Reset, set loop to once, and clamp when finished
      action.play(); // Play the animation
    }
  };

  useImperativeHandle(ref , ()=> ({
    playAnimation,
  }))

  useFrame(() => {
    group.current.rotation.y += 0.0005;
  });


  return (

  
    <group ref={group} {...props} scale={0.4}  dispose={null}>
      <group name="Scene">
        <mesh
          name="B_Pawn_3_01_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['B_Pawn_3_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[-0.105, -1.685, 0.227]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.024}
        />
        <mesh
          name="Chess_Board_02_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['Chess_Board_02_-_Default_0'].geometry}
          material={materials['02_-_Default_0']}
          position={[0, -1.685, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.024}
        />
        <mesh
          name="Chess_Board_03_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['Chess_Board_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[0, -1.685, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.024}
        />
        <mesh
          name="Chess_Board_07_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['Chess_Board_07_-_Default_0'].geometry}
          material={materials['07_-_Default']}
          position={[0, -1.685, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.024}
        />
        <mesh
          name="Chess_Board_08_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['Chess_Board_08_-_Default_0'].geometry}
          material={nodes['Chess_Board_08_-_Default_0'].material}
          position={[0, -1.685, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.024}
        />
        <group name="RootNode" position={[0, -1.685, 0]} scale={0.024}>
          <group name="B_Bishop_1" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Bishop_1_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Bishop_1_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Bishop_2" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Bishop_2_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Bishop_2_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_King" position={[1.237, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_King_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_King_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Knight_1" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Knight_1_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Knight_1_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Knight_2" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Knight_2_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Knight_2_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_1" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_1_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_1_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_2" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_2_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_2_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_4" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_4_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_4_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_5" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_5_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_5_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_6" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_6_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_6_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_7" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_7_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_7_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Pawn_8" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Pawn_8_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Pawn_8_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Queen" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Queen_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Queen_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Rook_1" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Rook_1_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Rook_1_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group name="B_Rook_2" position={[-4.418, 0, 9.582]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="B_Rook_2_01_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['B_Rook_2_01_-_Default_0'].geometry}
              material={materials['01_-_Default']}
            />
          </group>
          <group
            name="W_Bishop_1"
            position={[0.888, 0, 7.95]}
            rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Bishop_1_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Bishop_1_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group
            name="W_Bishop_2"
            position={[0.888, 0, 7.95]}
            rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Bishop_2_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Bishop_2_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_King" position={[0.888, 0, -60.844]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_King_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_King_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group
            name="W_Knight_1"
            position={[0.888, 0, 7.95]}
            rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Knight_1_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Knight_1_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group
            name="W_Knight_2"
            position={[0.888, 0, 7.95]}
            rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Knight_2_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Knight_2_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Pawn_2" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Pawn_2_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Pawn_2_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Pawn_4" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Pawn_4_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Pawn_4_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Pawn_5" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Pawn_5_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Pawn_5_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Pawn_6" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Pawn_6_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Pawn_6_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Pawn_7" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Pawn_7_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Pawn_7_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Pawn_8" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Pawn_8_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Pawn_8_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Queen" position={[0.888, 0, 76.745]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Queen_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Queen_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Rook_1" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Rook_1_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Rook_1_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
          <group name="W_Rook_2" position={[0.888, 0, 7.95]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh
              name="W_Rook_2_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes['W_Rook_2_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
          </group>
        </group>
        <mesh
          name="W_Pawn_1_02_-_Default_0"
          castShadow
          receiveShadow
          geometry={nodes['W_Pawn_1_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[0.021, -1.685, 0.189]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.024}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/chess_1.glb')





export default ChessBoard;