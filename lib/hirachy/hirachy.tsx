import React from 'react'

type SceneType = "layout" | "text" | "icon" | "image";
export interface Struct {
  id: string;
  title: string;
  type: SceneType;
  child?: Struct[];
}

function Hirachy() {
  return (
    <div>
      
    </div>
  )
}

export default Hirachy
