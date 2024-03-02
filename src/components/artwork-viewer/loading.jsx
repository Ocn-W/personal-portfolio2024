'use client';
import React from 'react';
import { useProgress } from '@react-three/drei';

export default function Loading() {
  const {progress} = useProgress();

  return (
    <div>{Math.floor(progress)}% LOADED</div>
  );
  
}
