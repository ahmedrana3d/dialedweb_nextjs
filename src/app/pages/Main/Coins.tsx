import { Center, Instance, Instances } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";
import React from "react";
import gsap from "gsap";

const radius = 3;
const count = 8;

function Item(props: GroupProps) {
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        x: "+=6.28", // Rotate full circle (2*PI radians)
        y: "+=6.28",
        z: "+=6.28",
        duration: 10, // Duration of one full rotation (in seconds)
        repeat: -1, // Repeat indefinitely
        ease: "linear",
      });
    }
  }, []);

  return (
    <group {...props}>
      <group ref={ref} rotation={[0, Math.PI / count, Math.PI / 2]}>
        <Instance />
      </group>
    </group>
  );
}

export const Item3 = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        z: "+=6.28", // Rotate full circle (2*PI radians)
        duration: 7.5, // Duration of one full rotation (in seconds)
        repeat: -1, // Repeat indefinitely
        ease: "linear",
      });
    }
  }, []);

  return (
    <Center>
      <group>
        <group scale={0.6} ref={groupRef}>
          <Instances>
            <cylinderGeometry args={[1, 1, 0.1, 64]}></cylinderGeometry>
            <CustomMaterial></CustomMaterial>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <Item
                  position={[
                    radius *
                      Math.cos((index * 2 * Math.PI) / count + Math.PI / 4),
                    radius *
                      Math.sin((index * 2 * Math.PI) / count + Math.PI / 4),
                    0,
                  ]}
                  rotation={[0, 0, (index * 2 * Math.PI) / count]}
                  key={index}
                ></Item>
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};
