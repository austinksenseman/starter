import React from 'react';
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Button Demo</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">Default Button</h2>
          <Button>Default Button</Button>
        </div>

        <div>
          <h2 className="text-xl mb-2">Button Variants</h2>
          <div className="space-x-2">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-2">Button Sizes</h2>
          <div className="space-x-2">
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🔔</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
